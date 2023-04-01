import { config } from '#config'
import { COLORS } from '#constants'
import { isIrrelevant } from '#utils'
import { Extension, listener } from '@pikokr/command.ts'
import { blue, green, yellow } from 'chalk'
import {
  ApplicationCommandOptionType,
  EmbedBuilder,
  Interaction,
  Message,
  TextBasedChannel,
} from 'discord.js'

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
  async messageEditLogger(before: Message, after: Message) {
    if ((isIrrelevant(before) && isIrrelevant(after)) || !after.guild) return

    this.logger.info(
      `Edited: ${green(before.author.tag)} (${blue(
        before.author.id
      )}) - ${red.bold.strikethrough(before.content)} -> ${yellow.bold(
        after.content
      )}`
    )

    const channel = after.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel

    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle('메세지 수정됨')
          .setColor(COLORS.YELLOW)
          .setAuthor({
            name: `${after.author.tag} (${after.author.id})`,
            iconURL: after.author.displayAvatarURL(),
          })
          .addFields(
            { name: '유저', value: `<@${after.author.id}>`, inline: true },
            { name: '채널', value: `<#${after.channelId}>`, inline: true },
            { name: '수정 전', value: '```' + before.content + '```' },
            { name: '수정 후', value: '```' + after.content + '```' }
          ),
      ],
    })
  }
}

export const setup = async () => {
  return new Logging()
}
