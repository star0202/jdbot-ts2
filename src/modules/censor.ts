import { config } from '#config'
import { CENSOR, COLORS } from '#constants'
import type { JDBot } from '#structures'
import { isIrrelevant } from '#utils'
import { Extension, listener } from '@pikokr/command.ts'
import { blue, green, red } from 'chalk'
import type { Message, TextBasedChannel } from 'discord.js'
import { EmbedBuilder, codeBlock } from 'discord.js'

class Censor extends Extension {
  @listener({ event: 'messageCreate' })
  async censor(msg: Message) {
    if (isIrrelevant(msg) || !msg.guild || msg.content.startsWith(';;jejudo'))
      return

    const content = msg.content
      .normalize('NFC')
      .replace(/[!?@#$%^&*():;+-=~{}<>_[\]|\\"',./`₩\d]/g, '')

    if (!content) return

    for (const censor of CENSOR) {
      const censored = content.match(censor.regex)

      if (censored) {
        ;(this.commandClient as JDBot).censoredCache.add(msg.id)

        this.logger.info(
          `Censored: ${green(msg.author.tag)} (${blue(
            msg.author.id
          )}) - ${red.bold.strikethrough(msg.content)}`
        )

        await msg.reply({
          embeds: [
            new EmbedBuilder()
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
                { name: '메세지', value: codeBlock(msg.content) },
                {
                  name: '감지된 단어',
                  value: codeBlock(`${censor.name}(분류: ${censor.ruleType})`),
                }
              ),
          ],
        })
        await msg.delete()

        const channel = msg.client.channels.cache.get(
          config.message_log_channel
        ) as TextBasedChannel

        await channel.send({
          embeds: [
            new EmbedBuilder()
              .setTitle('메세지 검열됨')
              .setColor(COLORS.DARK_RED)
              .setAuthor({
                name: `${msg.author.tag} (${msg.author.id})`,
                iconURL: msg.author.displayAvatarURL(),
              })
              .addFields(
                { name: '유저', value: `<@${msg.author.id}>`, inline: true },
                { name: '채널', value: `<#${msg.channelId}>`, inline: true },
                { name: '내용', value: codeBlock(msg.content) },
                {
                  name: '내용(특문과 숫자 제거)',
                  value: codeBlock(content),
                },
                {
                  name: '검열 대상',
                  value: codeBlock(censored[0]),
                  inline: true,
                },
                {
                  name: '감지된 단어',
                  value: codeBlock(`${censor.name}(분류: ${censor.ruleType})`),
                  inline: true,
                },
                {
                  name: '검열 정규식',
                  value: codeBlock(censor.regex.source),
                }
              ),
          ],
        })

        break
      }
    }
  }

  @listener({ event: 'messageUpdate' })
  async editCensor(before: Message, after: Message) {
    if (before.content === after.content) return

    if (isIrrelevant(after) || !after.guild) return

    await this.censor(after)
  }
}

export const setup = async () => {
  return new Censor()
}
