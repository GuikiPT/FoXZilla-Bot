const Discord = require('discord.js');
require('dotenv').config();
const moment = require('moment');
const colors = require('colors/safe');
const fs = require('fs');
require('better-logging')(console, {
    format: ctx => `${colors.grey('[' + moment().format('LT') + ']')} ${colors.grey('[' + moment().format('L') + ']')} ${ctx.type} >> ${ctx.msg}`,
    saveToFile: `${__dirname}/logs/${moment().format('YYYY')}/${moment().format('MM')}/${moment().format('DD')}.log`,
    color: {
        base: colors.grey,
        type: {
            debug: colors.green,
            info: colors.white,
            log: colors.grey,
            error: colors.red,
            warn: colors.yellow,
        }
    },
});

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
    ],
});
client.slashCommands = new Discord.Collection();


['events', 'slashs'].forEach(handler => {
    try {
        require(__dirname + '/handlers/' + handler)(client);
    }
    catch (error) {
        console.error('\n' + colors.red(error.stack || error));
    }
});

if (!process.env.DiscordToken) return console.warn(colors.yellow('You must provide a discord bot token before to use this command!'));
client.login(process.env.DiscordToken);