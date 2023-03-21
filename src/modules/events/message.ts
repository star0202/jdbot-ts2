import { config } from '#config'
import { CENSOR, COLORS } from '#constants'
import { isMessageInvalid } from '#utils/message'
import { Extension, listener } from '@pikokr/command.ts'
import { EmbedBuilder, Message, TextBasedChannel } from 'discord.js'

class MessageEvents extends Extension {
  @listener({ event: 'messageCreate' })
  async messageCreate(msg: Message) {
    if (isMessageInvalid(msg)) return
    const content = msg.content
      .normalize('NFC')
      .replace(/[!?@#$%^&*():;+-=~{}<>_[\]|\\"',./`₩\d]/g, '')
    if (!content) return
    for (const censor of CENSOR) {
      const censored = content.match(censor.regex)
      if (censored) {
        const embed = new EmbedBuilder()
          .setTitle('메세지 검열됨')
          .setColor(COLORS['DARK_RED'])
          .setAuthor({
            name: msg.author.tag,
            iconURL: msg.author.displayAvatarURL(),
          })
          .addFields(
            { name: '유저', value: `<@${msg.author.id}>` },
            { name: '내용', value: '||```' + msg.content + '```||' },
            {
              name: '내용(특문과 숫자 제거)',
              value: '||```' + content + '```||',
            },
            {
              name: '검열 대상',
              value: '||```' + censored[0] + '```||',
              inline: true,
            },
            {
              name: '검열 사유',
              value: '||```' + censor.name + '```||',
              inline: true,
            }
          )
        await msg.reply({
          embeds: [embed],
        })
        await msg.delete()
        const channel = msg.client.channels.cache.get(
          config.message_log_channel
        ) as TextBasedChannel
        await channel.send({
          embeds: [embed],
        })
        return
      }
    }
  }
  @listener({ event: 'messageUpdate' })
  async messageUpdate(before: Message, after: Message) {
    if (isMessageInvalid(before) && isMessageInvalid(after)) return
    const channel = after.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel
    const embed = new EmbedBuilder()
      .setTitle('메세지 수정됨')
      .setColor(COLORS['YELLOW'])
      .setAuthor({
        name: after.author.tag,
        iconURL: after.author.displayAvatarURL(),
      })
      .addFields(
        { name: '유저', value: `<@${after.author.id}>`, inline: true },
        { name: '채널', value: `<#${after.channelId}>`, inline: true },
        { name: '수정 전', value: '```' + before.content + '```' },
        { name: '수정 후', value: '```' + after.content + '```' }
      )
    await channel.send({ embeds: [embed] })
    this.messageCreate(after)
  }
  @listener({ event: 'messageDelete' })
  async messageDelete(msg: Message) {
    if (isMessageInvalid(msg)) return
    const channel = msg.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel
    const embed = new EmbedBuilder()
      .setTitle('메세지 삭제됨')
      .setColor(COLORS['RED'])
      .setAuthor({
        name: msg.author.tag,
        iconURL: msg.author.displayAvatarURL(),
      })
      .addFields(
        { name: '유저', value: `<@${msg.author.id}>`, inline: true },
        { name: '채널', value: `<#${msg.channelId}>`, inline: true },
        { name: '내용', value: '```' + msg.content + '```' }
      )
    await channel.send({ embeds: [embed] })
  }
}

export const setup = async () => {
  return new MessageEvents()
}
