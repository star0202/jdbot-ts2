import { config } from '#config'
import { COLORS } from '#constants'
import { JDBot } from '#structures'
import { adminOnly } from '#utils'
import { Extension, applicationCommand, option } from '@pikokr/command.ts'
import { blue, green, red, yellow } from 'chalk'
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ChatInputCommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import type { TextBasedChannel } from 'discord.js'

class Punish extends Extension {
  @adminOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: '처벌',
    description: '[ADMIN] 유저를 처벌합니다.',
  })
  async punish(
    i: ChatInputCommandInteraction,
    @option({
      type: ApplicationCommandOptionType.User,
      name: 'user',
      description: '처벌할 유저',
      required: true,
    })
    user: string,
    @option({
      type: ApplicationCommandOptionType.String,
      name: 'reason',
      description: '처벌 사유',
      required: true,
    })
    reason: string,
    @option({
      type: ApplicationCommandOptionType.Integer,
      name: 'amount',
      description: '경고 횟수',
      required: true,
    })
    amount: number
  ) {
    if (!i.guild) return

    await i.deferReply({ ephemeral: true })

    const member = await i.guild.members.fetch(user)
    const userObj = member.user

    if (!member) return await i.editReply('멤버를 찾을 수 없습니다.')

    let punish = 0
    member.roles.cache.forEach((role) => {
      if (config.punish_roles.includes(role.id)) {
        punish++
        member.roles.remove(role.id)
      }
    })
    punish += amount

    this.logger.info(
      `Punished: ${green(i.user.tag)} (${blue(
        i.user.id
      )}) - ${red.bold.strikethrough(`${userObj.tag} (${user})`)} - ${yellow(
        reason
      )} - ${blue(punish)}`
    )

    await i.editReply({
      content: 'Done',
    })

    const channel = this.client.channels.cache.get(
      config.punish_log_channel
    ) as TextBasedChannel

    await channel.send({
      content: `<@${user}>`,
      embeds: [
        new EmbedBuilder()
          .setTitle(`${amount}회 처벌`)
          .setColor(COLORS.DARK_RED)
          .setAuthor({
            name: `${userObj.tag} (${user})`,
            iconURL: userObj.displayAvatarURL(),
          })
          .setDescription(reason)
          .setTimestamp()
          .addFields(
            {
              name: '관리자',
              value: `<@${i.user.id}>`,
              inline: true,
            },
            {
              name: '대상',
              value: `<@${user}>`,
              inline: true,
            },
            {
              name: '누적',
              value: punish.toString(),
              inline: true,
            }
          ),
      ],
    })

    this.logger.info(punish)

    if (punish > 2) {
      ;(this.commandClient as JDBot).bannedCache.add(user)

      await userObj.send({
        embeds: [
          new EmbedBuilder()
            .setTitle(`${i.guild.name} 서버에서 차단되었습니다.`)
            .setColor(COLORS.DARK_RED)
            .setDescription(reason)
            .setTimestamp(),
        ],
      })

      await member.ban({ reason: `${reason} by ${i.user.tag}` })

      return this.logger.info(`Banned: ${green(userObj)} (${blue(user)})`)
    }

    this.logger.info(config.punish_roles[punish - 1])

    await member.roles.add(config.punish_roles[punish - 1])
  }
}

export const setup = async () => {
  return new Punish()
}
