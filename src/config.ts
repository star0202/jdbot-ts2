type Config = {
  token: string
  neis_key: string
  school_code: string

  guilds: string[]
  message_log_channel: string
  contact_channel: string
  member_log_channel: string
  punish_log_channel: string
  admin_role: string
  punish_roles: string[]

  debug: boolean
}

export const config: Config = require('../config.json') // eslint-disable-line @typescript-eslint/no-var-requires
