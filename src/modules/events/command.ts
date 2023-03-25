import { Extension, listener } from '@pikokr/command.ts'
import { blue, green, yellow } from 'chalk'
import { ApplicationCommandOptionType, Interaction } from 'discord.js'

class CommandEvents extends Extension {
  @listener({ event: 'applicationCommandInvokeError', emitter: 'cts' })
  async errorHandler(err: Error) {
    this.logger.error(err)
  }

  @listener({ event: 'interactionCreate' })
  async commandLogger(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return

    const options: string[] = []
    for (const option of interaction.options.data) {
      options.push(
        `\n- ${green(option.name)}: ${blue(option.value)} (${yellow(
          ApplicationCommandOptionType[option.type]
        )})`
      )
    }

    const guild = interaction.guild
      ? `${green(interaction.guild.name)}(${blue(interaction.guild.id)})`
      : 'DM'

    this.logger.info(
      `${green(interaction.user.tag)}(${blue(
        interaction.user.id
      )}) in ${guild}: ${yellow.bold(
        `/${interaction.commandName}`
      )}\nOptions:${options}`
    )
  }
}

export const setup = async () => {
  return new CommandEvents()
}
