const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h!"

bot.on((message), message => {
    if (message.content == prefix + "ping") {
      message.reply("pong!")
    } 
});

bot.login('Mjk0MTk0NTA2MTEzMjIwNjA4.DOa3Zg.yLil3kJG0FmDE3x47YyA5Bk_nJU')