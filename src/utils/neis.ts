import { config } from '#config'
import axios from 'axios'
import { Dayjs } from 'dayjs'

export const getMeal = async (date: Dayjs): Promise<string[]> => {
  const formatted_date = date.format('YYYYMMDD')
  const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=${config.neis_key}&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=${config.school_code}&MLSV_YMD=${formatted_date}`

  const { data } = await axios.get(url)

  if (!data.mealServiceDietInfo) throw new Error(data.RESULT.MESSAGE)
  return data.mealServiceDietInfo[1].row[0].DDISH_NM.split('<br/>')
}
