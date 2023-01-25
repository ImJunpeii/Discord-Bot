const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
] });

client.once('ready', (c) => {
    console.log(`${c.user.tag} is ready to go !`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    switch(message.content.split(' ').shift().toLowerCase()) {
        case 'ping':
            message.reply('**Pong!**');
            break;
    };
});

client.login(token);