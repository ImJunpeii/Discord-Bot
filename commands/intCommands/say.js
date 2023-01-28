const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Make it say whatever you want it to say')
		.addStringOption(option =>
			option
                .setName('message')
				.setDescription('What do you want it to say ?')
				.setRequired(true)),
	async execute(interaction) {
		const msg = interaction.options.getString('message');
        await interaction.reply(msg)
	},
};