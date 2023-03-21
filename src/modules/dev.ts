import { Extension, applicationCommand, ownerOnly } from '@pikokr/command.ts'
import { ApplicationCommandType, ChatInputCommandInteraction } from 'discord.js'
import path from 'path'

class DevExtension extends Extension {
  @ownerOnly
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: 'reload',
    description: 'reload modules',
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
      await i.editReply(
        '```\n' +
          `✅ ${success} ❌ ${fail}\n` +
          data.map((x) => `${x.result ? '✅' : '❌'} ${x.path}`).join('\n') +
          '```'
      )
    }
  }
}

export const setup = async () => {
  return new DevExtension()
}
