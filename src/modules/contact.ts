import { config } from '#config'
import { COLORS } from '#constants'
import { isIrrelevant } from '#utils'
import { Extension, listener } from '@pikokr/command.ts'
import { EmbedBuilder, Message, TextBasedChannel } from 'discord.js'

class Contact extends Extension {
  @listener({ event: 'messageCreate' })
  async contact(msg: Message) {
    if (isIrrelevant(msg) || !msg.channel.isDMBased()) return

    const channel = msg.client.channels.cache.get(
      config.contact_channel
    ) as TextBasedChannel

    const embed = new EmbedBuilder()
      .setTitle('문의')
      .setAuthor({
        name: `${msg.author.tag} (${msg.author.id})`,
        iconURL: msg.author.displayAvatarURL(),
      })
      .setDescription(msg.content)
      .setColor(COLORS.GREEN)

    await channel.send({ embeds: [embed] })
  }
}

export const setup = async () => {
  return new Contact()
}
