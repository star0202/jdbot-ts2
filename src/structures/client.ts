import { config } from '#config'
import { VERSION } from '#constants'
import { logger } from '#utils'
import { CommandClient } from '@pikokr/command.ts'
import { green } from 'chalk'
import { Client, Partials } from 'discord.js'
import { Jejudo } from 'jejudo'
import path from 'path'

export class JDBot extends CommandClient {
  private jejudo: Jejudo | null = null

  constructor() {
    super(
      new Client({
        intents: [
          'DirectMessages',
          'GuildMessages',
          'Guilds',
          'MessageContent',
        ],
        partials: [Partials.Channel],
      }),
      logger
    )

    this.discord.on('ready', () => this.onReady())

    this.discord.on('debug', (msg) => {
      this.logger.debug(msg)
    })
  }

  async setup() {
    await this.enableApplicationCommandsExtension({ guilds: config.guilds })

    await this.registry.loadAllModulesInDirectory(
      path.join(__dirname, '..', 'modules')
    )
  }

  async onReady() {
    this.jejudo = new Jejudo(this.discord, {
      isOwner: (user) => this.owners.has(user.id),
      prefix: `.`,
      noPermission: (i) => i.reply('Permission denied'),
    })

    this.discord.on('messageCreate', (msg) => this.jejudo?.handleMessage(msg))

    this.discord.on('interactionCreate', (i) => {
      this.jejudo?.handleInteraction(i)
    })

    this.discord.user?.setActivity(`문의는 DM으로! | v${VERSION}`)

    this.logger.info(`Logged in as: ${green(this.discord.user?.tag)}`)

    await this.fetchOwners()
  }
}
