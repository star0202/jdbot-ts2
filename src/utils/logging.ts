import { Logger } from 'tslog'

export const setupLogger = (id: string): Logger<unknown> => {
  return new Logger({
    name: id,
    prettyLogTemplate:
      '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{name}}]\t',
    prettyLogTimeZone: 'local',
  })
}
