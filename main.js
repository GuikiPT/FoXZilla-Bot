const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
    ],
});

client.once(Discord.Events.ClientReady, async (c) => {
    console.log('Ready as ' + c.user.tag);
});

client.login(process.env.DiscordToken);