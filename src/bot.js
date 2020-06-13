import discord from 'discord.js';
import token from './connect';

const client = new discord.Client();

const PREFIX = "!!";

client.on('ready', () => {
  console.log('Bot Online');
});

client.on('message', msg=>{
  if(msg.content === PREFIX + 'ok'){
      const attachment = new discord.MessageAttachment('https://i.imgur.com/H3D1P8R.jpg');
      msg.channel.send(attachment);
  }
});

client.login(token);