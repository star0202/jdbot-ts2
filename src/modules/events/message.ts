import { CENSOR, COLORS } from '#constants'
import { isMessageInvalid } from '#utils/message'
import { Extension, listener } from '@pikokr/command.ts'
import { EmbedBuilder, Message } from 'discord.js'

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
          .setColor(COLORS['RED'])
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
            },
            {
              name: '검열 사유',
              value: '||```' + censor.name + '```||',
            }
          )
        await msg.reply({
          embeds: [embed],
        })
        await msg.delete()
        return
      }
    }
  }
  @listener({ event: 'messageUpdate' })
  async messageUpdate(before: Message, after: Message) {
    if (isMessageInvalid(before) && isMessageInvalid(after)) return
    this.messageCreate(after)
  }
}

export const setup = async () => {
  return new MessageEvents()
}
