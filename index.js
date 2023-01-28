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
            message.channel.send(`${message.content.split(/ +/).slice(1)}`).catch(error => {
                if (error.code == '50006') {
                    message.reply({ embeds: [{ title: "Error 50006 : Empty message.", color: 0x68FF93 }] })
                };
            });
            break;
        
        case 'test':
            const txt = "=";
            const num = Math.floor(Math.random() * 12);
            if (message.mentions.users.size > 0) {
                const mentionedUser = message.mentions.users.first().username;
                message.reply({ embeds: [{ title: `${mentionedUser}'s pp size is...`, description: `8${txt.repeat(num)}D`, color: 0x68ff93 }] });
                return;
            };
            message.reply({ embeds: [{ title: "Your pp size is...", description: `8${txt.repeat(num)}D`, color: 0x68ff93 }] });
        
    };
});

client.login(token);