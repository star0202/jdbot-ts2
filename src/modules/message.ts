import { config } from '#config'
import { CENSOR, COLORS } from '#constants'
import { messageBypasses } from '#utils/message'
import { Extension, listener } from '@pikokr/command.ts'
import { EmbedBuilder, Message, TextBasedChannel } from 'discord.js'

class MessageModule extends Extension {
  private censoredCache = new Set<string>()

  @listener({ event: 'messageCreate' })
  async censor(msg: Message) {
    if (messageBypasses(msg)) return

    const content = msg.content
      .normalize('NFC')
      .replace(/[!?@#$%^&*():;+-=~{}<>_[\]|\\"',./`₩\d]/g, '')

    if (!content) return

    for (const censor of CENSOR) {
      const censored = content.match(censor.regex)

      if (censored) {
        this.censoredCache.add(msg.id)

        const publicEmbed = new EmbedBuilder()
          .setTitle('메세지 검열됨')
          .setDescription(
            '분류, 감지된 단어, 또는 검열이 잘못되었다고 생각하시면 문의 바랍니다.'
          )
          .setColor(COLORS.DARK_RED)
          .setAuthor({
            name: msg.author.tag,
            iconURL: msg.author.displayAvatarURL(),
          })
          .addFields(
            { name: '유저', value: `<@${msg.author.id}>` },
            { name: '메세지', value: '```' + msg.content + '```' },
            {
              name: '감지된 단어',
              value: '```' + `${censor.name}(분류: ${censor.ruleType})` + '```',
            }
          )

        await msg.reply({
          embeds: [publicEmbed],
        })
        await msg.delete()

        const adminEmbed = new EmbedBuilder()
          .setTitle('메세지 검열됨')
          .setColor(COLORS.DARK_RED)
          .setAuthor({
            name: `${msg.author.tag} (${msg.author.id})`,
            iconURL: msg.author.displayAvatarURL(),
          })
          .addFields(
            { name: '유저', value: `<@${msg.author.id}>`, inline: true },
            { name: '채널', value: `<#${msg.channelId}>`, inline: true },
            { name: '내용', value: '```' + msg.content + '```' },
            {
              name: '내용(특문과 숫자 제거)',
              value: '```' + content + '```',
            },
            {
              name: '검열 대상',
              value: '```' + censored[0] + '```',
              inline: true,
            },
            {
              name: '감지된 단어',
              value: '```' + `${censor.name}(분류: ${censor.ruleType})` + '```',
              inline: true,
            },
            {
              name: '검열 정규식',
              value: '```' + censor.regex.toString().slice(1, -2) + '```',
            }
          )

        const channel = msg.client.channels.cache.get(
          config.message_log_channel
        ) as TextBasedChannel
        await channel.send({
          embeds: [adminEmbed],
        })

        break
      }
    }
  }

  @listener({ event: 'messageUpdate' })
  async editLogger(before: Message, after: Message) {
    if (messageBypasses(before) && messageBypasses(after)) return

    const channel = after.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel

    const embed = new EmbedBuilder()
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
      )

    await channel.send({ embeds: [embed] })
  }

  @listener({ event: 'messageUpdate' })
  async editCensor(_: Message, after: Message) {
    if (messageBypasses(after)) return

    this.censor(after)
  }

  @listener({ event: 'messageDelete' })
  async deleteLogger(msg: Message) {
    if (messageBypasses(msg)) return

    if (this.censoredCache.delete(msg.id)) return

    const channel = msg.client.channels.cache.get(
      config.message_log_channel
    ) as TextBasedChannel

    const embed = new EmbedBuilder()
      .setTitle('메세지 삭제됨')
      .setColor(COLORS.RED)
      .setAuthor({
        name: `${msg.author.tag} (${msg.author.id})`,
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
  return new MessageModule()
}
