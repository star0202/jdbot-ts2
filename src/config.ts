type Config = {
  token: string
  guilds: string[]
  staff_guilds: string[]
}

export const config: Config = require('../config.json') // eslint-disable-line @typescript-eslint/no-var-requires
