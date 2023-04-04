const Discord = require('discord.js');
require('dotenv').config();
const moment = require('moment');
const colors = require('colors/safe');
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

client.once(Discord.Events.ClientReady, async (c) => {
    console.log('Ready as ' + c.user.tag);
});

client.login(process.env.DiscordToken);