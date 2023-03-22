import { config } from '#config'
import {
  Extension,
  applicationCommand,
  option,
  ownerOnly,
} from '@pikokr/command.ts'
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ChatInputCommandInteraction,
} from 'discord.js'
import path from 'path'

class DevCommands extends Extension {
  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'reload',
    description: 'Reload all modules',
    guilds: config.staff_guilds,
  })
  async reload(i: ChatInputCommandInteraction) {
    await i.deferReply()

    const data = await this.commandClient.registry.reloadModules().then((r) =>
      r.map((x) => ({
        path: path.basename(x.file),
        result: x.result,
        error: x.error?.message.normalize(),
      }))
    )

    let success = 0,
      fail = 0
    for (const x of data) {
      if (x.result) success++
      else fail++
    }

    await i.editReply(
      '```\n' +
        `✅ ${success} ❌ ${fail}\n` +
        data.map((x) => `${x.result ? '✅' : '❌'} ${x.path}`).join('\n') +
        '```'
    )
  }

  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'load',
    description: 'Load a module',
    guilds: config.staff_guilds,
  })
  async load(
    i: ChatInputCommandInteraction,
    @option({
      type: ApplicationCommandOptionType.String,
      name: 'module',
      description: 'Module name',
      required: true,
    })
    name: string
  ) {
    await i.deferReply()

    await this.commandClient.registry.loadModulesAtPath(
      path.join(__dirname, '..', `${name}.ts`)
    )

    await i.editReply('```\n' + `✅ ${name}.ts` + '\n```')
  }
}

export const setup = async () => {
  return new DevCommands()
}
