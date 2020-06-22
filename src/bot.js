import discord from 'discord.js';
import token from './connect';
import prefix from '../app/controller/prefix'

const client = new discord.Client();

// teste conexão
client.once('ready', () => {
  console.log('Ready!');
 });
 client.once('reconnecting', () => {
  console.log('Reconnecting!');
 });
 client.once('disconnect', () => {
  console.log('Disconnect!');
 });

// console.log(msg.author.bot); // Verifica se a msg foi enviada pelo bot, return BOOL

client.on('message', msg=>{
  if(msg.content.startsWith(`${prefix}ok`)){
      const attachment = new discord.MessageAttachment('https://i.imgur.com/H3D1P8R.jpg');
      msg.channel.send(attachment);
  }
});

client.login(token);