const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pp')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription("User's pp :>"))
        .setDescription('How long is your pp'),
    async execute(interaction) {
        const string = '='
        const num = Math.floor(Math.random() * 12)
        const mentioned = interaction.options.getUser('user')

        if (interaction.options.getUser('user')) return await interaction.reply({ embeds: [{ title: `${mentioned.username}'s pp size is...`, description: `8${string.repeat(num)}D`, color: 0x68FF93, footer: { text: `${num} inches long` } }] })
        
        await interaction.reply({ embeds: [{ title: `Your pp size is...`, description: `8${string.repeat(num)}D`, color: 0x68FF93, footer: { text: `${num} inches long` } }] })
    },
};