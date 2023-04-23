import { config } from '#config'
import { COLORS } from '#constants'
import { logger } from '#utils'
import { Extension, applicationCommand, option } from '@pikokr/command.ts'
import dayjs from 'dayjs'
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ChatInputCommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import type { School } from 'neis.ts'
import { Neis } from 'neis.ts'

class SchoolModule extends Extension {
  private readonly neis: Neis
  private school?: School

  constructor() {
    super()
    this.neis = new Neis({
      KEY: config.neis_key,
      logger: logger.getSubLogger({ name: 'Neis' }),
    })
  }

  async setup() {
    this.school = await this.neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: config.school_code,
    })
  }

  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: '급식',
    description: '급식을 확인합니다.',
  })
  async meal(
    i: ChatInputCommandInteraction,
    @option({
      type: ApplicationCommandOptionType.String,
      name: '날짜',
      description: 'yyyymmdd 형식의 날짜 ex) 20230331',
      required: false,
    })
    date?: string
  ) {
    await i.deferReply()

    const now = dayjs(date)

    try {
      const meal = (await this.school
        ?.getMealOne({ MLSV_YMD: now.format('YYYYMMDD') })
        .then((meal) =>
          meal.DDISH_NM.replace(/ {2,}(?!(\((\d{1,2}\.)+\)))/g, '').split(
            '<br/>'
          )
        )) as string[]

      await i.editReply({
        embeds: [
          new EmbedBuilder()
            .setTitle(`${now.format('YYYY년 M월 D일')} 급식`)
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
  const school = new SchoolModule()
  await school.setup()
  return school
}
