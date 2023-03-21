import { config } from '#config'
import { CommandClient } from '@pikokr/command.ts'
import path from 'path'

export class CustomizedCommandClient extends CommandClient {
  async setup() {
    await this.enableApplicationCommandsExtension({ guilds: config.guilds })

    await this.registry.loadAllModulesInDirectory(
      path.join(__dirname, '..', 'modules')
    )
  }
}
