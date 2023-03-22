import { Extension, listener } from '@pikokr/command.ts'
import { green } from 'chalk'

class DefaultEvents extends Extension {
  @listener({ event: 'ready' })
  async ready() {
    this.logger.info(`Logged in as: ${green(this.client.user?.tag)}`)
    await this.commandClient.fetchOwners()
  }
}

export const setup = async () => {
  return new DefaultEvents()
}
