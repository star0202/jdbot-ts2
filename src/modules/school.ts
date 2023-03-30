import { COLORS } from '#constants'
import { getMeal } from '#utils'
import { Extension, applicationCommand } from '@pikokr/command.ts'
import dayjs from 'dayjs'
import {
  ApplicationCommandType,
  ChatInputCommandInteraction,
  EmbedBuilder,
} from 'discord.js'

class School extends Extension {
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: '급식',
    description: '오늘의 급식을 확인합니다.',
  })
  async meal(i: ChatInputCommandInteraction) {
    await i.deferReply()

    const now = dayjs()

    try {
      const meal = await getMeal(now)

      await i.editReply({
        embeds: [
          new EmbedBuilder()
            .setTitle(`${now.format('M월 D일')} 급식`)
            .setDescription(meal.join('\n'))
            .setColor(COLORS.GREEN),
        ],
      })
    } catch (e) {
      const embed = new EmbedBuilder()
        .setTitle('오류 발생')
        .setColor(COLORS.DARK_RED)

      if (e instanceof Error) embed.setDescription(e.message)
      else embed.setDescription('알 수 없는 오류')

      await i.editReply({ embeds: [embed] })
    }
  }
}

export const setup = async () => {
  return new School()
}
