import { config } from '#config'
import { AdminOnlyError } from './errors'
import { createCheckDecorator } from '@pikokr/command.ts'
import type { GuildMember, Interaction, Message } from 'discord.js'

export const adminOnly = createCheckDecorator(
  async (_, i: Interaction | Message) => {
    let isAdmin = false

    if (i.guild) {
      isAdmin = (i.member as GuildMember).roles.highest.id === config.admin_role
    }

    if (!isAdmin) throw new AdminOnlyError()
  }
)
