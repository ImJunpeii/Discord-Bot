const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')
const { execute } = require('./pp')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Deletes the specific amount of messages given by the user with the correct permissions.')
        .addNumberOption(option => 
            option
                .setName('number')
                .setDescription('Specific amount of messages you want to delete')
                .setMaxValue(100)
                .setMinValue(1)
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const num = interaction.options.getNumber('number')
        interaction.channel.bulkDelete(num)
        interaction.reply({ embeds: [{ title: `Successfully purged ${num} messages.`, color: 0x68FF93 }], ephemeral: true })
    }

}