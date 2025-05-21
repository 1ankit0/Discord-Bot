const  { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('messageCreate', message =>{
    if(message.author.bot) return; 
    message.reply({
        content: `Welcome ${message.author.username} to demonblood's channel!`    })
    console.log(message.content)
})

client.on('interactionCreate', (interaction)=>{
    console.log(interaction)
    interaction.reply('Pong')
})

client.login('MTM3NDQ2MDcyNjAyMTk4MDI5Mw.GGYa5Y.ytKO9ZIpv_1HWwNwNeJWG78RMjxNF8FXkIicgo')