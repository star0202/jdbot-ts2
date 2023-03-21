import { Extension, applicationCommand, listener } from '@pikokr/command.ts'
import { ApplicationCommandType, ChatInputCommandInteraction } from 'discord.js'

class HelloExtension extends Extension {
  @listener({ event: 'ready' })
  async ready() {
    this.logger.info(`Logged in as ${this.client.user?.tag}`)
    await this.commandClient.fetchOwners()
  }

  @listener({ event: 'applicationCommandInvokeError', emitter: 'cts' })
  async errorHandler(err: Error) {
    this.logger.error(err)
  }

  @applicationCommand({
    name: 'ping',
    type: ApplicationCommandType.ChatInput,
    description: 'wow this is ping',
  })
  async ping(i: ChatInputCommandInteraction) {
    await i.reply(`current ping: ${i.client.ws.ping}ms`)
  }
}

export const setup = async () => {
  return new HelloExtension()
}
