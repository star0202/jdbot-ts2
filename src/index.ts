import { config } from '#config'
import { CustomizedCommandClient } from '#structures'
import { setupLogger } from '#utils/logging'
import { Client } from 'discord.js'

const client = new Client({
  intents: ['MessageContent', 'Guilds', 'GuildMessages'],
})

const logger = setupLogger('JDBot')

const cts = new CustomizedCommandClient(client, logger)

const start = async () => {
  await cts.setup()

  await client.login(config.token)

  await cts.getApplicationCommandsExtension()?.sync()
}

start().then()
