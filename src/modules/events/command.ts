import { Extension, listener } from '@pikokr/command.ts'
import { ApplicationCommandOptionType, Interaction } from 'discord.js'

class CommandEvents extends Extension {
  @listener({ event: 'applicationCommandInvokeError', emitter: 'cts' })
  async errorHandler(err: Error) {
    this.logger.error(err)
  }

  @listener({ event: 'interactionCreate' })
  async interactionCreate(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return

    const options: string[] = []
    for (const option of interaction.options.data) {
      options.push(
        `\n- ${option.name}: ${option.value} (${
          ApplicationCommandOptionType[option.type]
        })`
      )
    }

    const guild = interaction.guild
      ? `${interaction.guild.name}(${interaction.guild.id})`
      : 'DM'

    this.logger.log(
      3,
      'COMMAND',
      `${interaction.user.tag}(${interaction.user.id}) in ${guild}: /${interaction.commandName} ${options}`
    )
  }
}

export const setup = async () => {
  return new CommandEvents()
}
