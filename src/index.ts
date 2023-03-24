import { config } from '#config'
import { JDBot } from '#structures'

const cts = new JDBot()

;(async () => {
  await cts.setup()

  await cts.discord.login(config.token)

  await cts.getApplicationCommandsExtension()?.sync()
})()
