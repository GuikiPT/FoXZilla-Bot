const Discord = require('discord.js');
const colors = require('colors/safe');

module.exports = {
	name: Discord.Events.ClientReady,
	once: true,
	async execute(client, clientLoadProgress) {
		clientLoadProgress.succeed(colors.green('Bot is ready as ' + client.user.tag))
    },
};