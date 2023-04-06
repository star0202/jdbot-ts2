import type { Message } from 'discord.js'

export const isIrrelevant = (msg: Message): boolean => {
  return msg.author.bot || msg.content.length === 0
}
