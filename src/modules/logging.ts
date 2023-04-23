import { config } from '#config'
import { COLORS } from '#constants'
import { diff, isIrrelevant } from '#utils'
import { Extension, listener } from '@pikokr/command.ts'
import { blue, green, red, yellow } from 'chalk'
import type {
  GuildMember,
  Interaction,
  Message,
  TextBasedChannel,
} from 'discord.js'
import {
  ApplicationCommandOptionType,
  EmbedBuilder,
  codeBlock,
} from 'discord.js'
import { inspect } from 'util'

class Logging extends Extension {
  @listener({ event: 'applicationCommandInvokeError', emitter: 'cts' })
  async errorLogger(err: Error) {
    this.logger.error(err)
  }

  @listener({ event: 'interactionCreate' })
  async commandLogger(i: Interaction) {
    if (!i.isChatInputCommand()) return

    const options: string[] = []
    for (const option of i.options.data) {
      options.push(
        `\n- ${green(option.name)}: ${blue(option.value)} (${yellow(
          ApplicationCommandOptionType[option.type]
        )})`
      )
    }

    const guild = i.guild ? `${green(i.guild.name)}(${blue(i.guild.id)})` : 'DM'

    this.logger.info(
      `${green(i.user.tag)}(${blue(i.user.id)}) in ${guild}: ${yellow.bold(
        `/${i.commandName}`
      )}${options}`
    )
  }

  @listener({ event: 'messageUpdate' })
  async messageUpdateLogger(before: Message, after: Message) {
    if ((isIrrelevant(before) && isIrrelevant(after)) || !after.guild) return

    const msgDiff = diff(after, before)

    this.logger.info(
      `Updated: ${green(before.author.tag)} (${blue(
        before.author.id
      )}) - ${red.bold.strikethrough(
        inspect(msgDiff[0], { colors: false })
      )} -> ${yellow.bold(inspect(msgDiff[1], { colors: false }))}`
    )

    const channel = after.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel

    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle('메세지 업데이트됨')
          .setColor(COLORS.YELLOW)
          .setAuthor({
            name: `${after.author.tag} (${after.author.id})`,
            iconURL: after.author.displayAvatarURL(),
          })
          .addFields(
            { name: '유저', value: `<@${after.author.id}>`, inline: true },
            { name: '채널', value: `<#${after.channelId}>`, inline: true },
            {
              name: '이전',
              value: codeBlock('ts', inspect(msgDiff[0])),
            },
            {
              name: '현재',
              value: codeBlock('ts', inspect(msgDiff[1])),
            }
          ),
      ],
    })
  }

  @listener({ event: 'guildMemberAdd' })
  async memberJoinLogger(member: GuildMember) {
    if (member.user.bot) return

    this.logger.info(
      `Joined: ${green(member.user.tag)} (${blue(member.user.id)})`
    )

    const channel = member.client.channels.cache.get(
      config.member_log_channel
    ) as TextBasedChannel

    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle('입장')
          .setColor(COLORS.GREEN)
          .setAuthor({
            name: `${member.user.tag} (${member.user.id})`,
            iconURL: member.user.displayAvatarURL(),
          })
          .setTimestamp(),
      ],
    })
  }

  @listener({ event: 'guildMemberRemove' })
  async memberLeaveLogger(member: GuildMember) {
    if (member.user.bot) return

    this.logger.info(
      `Left: ${green(member.user.tag)} (${blue(member.user.id)})`
    )

    const channel = member.client.channels.cache.get(
      config.member_log_channel
    ) as TextBasedChannel

    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle('퇴장')
          .setColor(COLORS.RED)
          .setAuthor({
            name: `${member.user.tag} (${member.user.id})`,
            iconURL: member.user.displayAvatarURL(),
          })
          .setTimestamp(),
      ],
    })
  }
}

export const setup = async () => {
  return new Logging()
}
