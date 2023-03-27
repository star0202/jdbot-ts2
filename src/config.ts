type Config = {
  token: string
  guilds: string[]

  message_log_channel: string
  contact_channel: string

  debug: boolean
}

export const config: Config = require('../config.json') // eslint-disable-line @typescript-eslint/no-var-requires
