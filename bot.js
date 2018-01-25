const Discord = require(‘discord.js’);

const client = new Discord.Client();

var prefix = ‘!’

client.on(‘message’, message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + ‘help’)) {
        message.channel.sendMessage(‘Ïğèâåò ÿ ÁÎÒ!’);
     }
});

client.login(‘NDA1ODUyNDM5Mzg4ODgwODk2.DUqeMw.a4TZPUSS6w0U0k6UIBZm1XJxAaE’);