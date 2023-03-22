import { Extension, listener } from '@pikokr/command.ts'

class DefaultEvents extends Extension {
  @listener({ event: 'ready' })
  async ready() {
    this.logger.info(`Logged in as ${this.client.user?.tag}`)
    await this.commandClient.fetchOwners()
  }
}

export const setup = async () => {
  return new DefaultEvents()
}
