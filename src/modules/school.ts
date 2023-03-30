import { getMeal } from '#utils'
import { Extension, applicationCommand } from '@pikokr/command.ts'
import dayjs from 'dayjs'
import { ApplicationCommandType, ChatInputCommandInteraction } from 'discord.js'

class School extends Extension {
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: '급식',
    description: '오늘의 급식을 확인합니다.',
  })
  async meal(i: ChatInputCommandInteraction) {
    await i.deferReply()

    const now = dayjs()
    const data = await getMeal(now).catch((e) => e.message)

    await i.editReply(data)
  }
}

export const setup = async () => {
  return new School()
}
