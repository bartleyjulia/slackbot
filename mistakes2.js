const envKey = process.env.JOKES_BOT_TOKEN

// create a bot
var bot = new SlackBot({
  token: envKey,
  name: "Jokes Bot"
})