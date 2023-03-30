import { config } from '#config'
import { Logger } from 'tslog'

export const logger = new Logger({
  name: 'JDBot',
  prettyLogTemplate:
    '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{name}}]\t',
  prettyLogTimeZone: 'local',
  minLevel: config.debug ? 2 : 3,
})
