const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTM3NDQ2MDcyNjAyMTk4MDI5Mw.GGYa5Y.ytKO9ZIpv_1HWwNwNeJWG78RMjxNF8FXkIicgo');

try {
  console.log('Started refreshing application (/) commands.');

   rest.put(Routes.applicationCommands('1374460726021980293'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}