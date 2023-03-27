import { Message } from 'discord.js'

export const messageBypasses = (msg: Message): boolean => {
  return msg.author.bot || msg.guild === null || msg.content.length === 0
}
