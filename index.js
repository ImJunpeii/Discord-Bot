const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

require('./commands/index.js')

const client = new Client({ intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
] });

client.once('ready', (c) => {
    console.log(`${c.user.tag} is ready to go !`);
});

client.login(token);