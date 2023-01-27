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

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const p = ';'

    switch(message.content.split(' ').shift().toLowerCase()) {
        case `${p}ping`:
            message.reply('**Pong!**');
            break;

        case `${p}say`:
            if (message.content.split(' ').slice(1) == "") return message.reply({ embeds: [{
                title: 'Empty message.', color: 0x9971FF
            }] })
            message.channel.send(`${message.content.split(/ +/).slice(1)}`)
            break;

        
    };
});

client.login(token);