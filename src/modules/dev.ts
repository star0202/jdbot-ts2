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
  codeBlock,
} from 'discord.js'
import path from 'path'

class Dev extends Extension {
  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'reload',
    description: '[OWNER] Reload all modules',
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
      codeBlock(
        `✅ ${success} ❌ ${fail}\n` +
          data.map((x) => `${x.result ? '✅' : '❌'} ${x.path}`).join('\n')
      )
    )
  }

  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'load',
    description: '[OWNER] Load a module',
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
      path.join(__dirname, `${name}.ts`)
    )

    await i.editReply(codeBlock(`✅ ${name}.ts`))
  }

  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'unregister',
    description: '[OWNER] Unregister commands',
  })
  async unregister(
    i: ChatInputCommandInteraction,
    @option({
      type: ApplicationCommandOptionType.Boolean,
      name: 'global',
      description: 'Global?',
      required: true,
    })
    global: boolean
  ) {
    await i.deferReply()

    if (global) this.client.application?.commands.set([])
    else i.guild?.commands.set([])

    await i.editReply('Done')
  }
}

export const setup = async () => {
  return new Dev()
}
