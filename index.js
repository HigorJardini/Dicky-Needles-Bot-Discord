const discord = require('discord.js');

const client = new discord.Client();

const token = 'NzIxMTkyMTUxNDI5Njc3MDU3.XuQ8_Q.ZY-DMC6bM655gg3YS8Oy_X1p_F0';

const PREFIX = "!!";

client.on('ready', () => {
    console.log('Bot Online');
});

client.on('message', msg=>{
    if(msg.content === "Hello"){
      msg.reply('Hello, take my gun!');
    }
})

client.on('message', msg=>{
    if(msg.content === '!avatar'){
      msg.reply(msg.author.displayAvatarURL());
    }
});

client.on('message', msg=>{
    if(msg.content === PREFIX + 'ok'){
        const attachment = new discord.MessageAttachment('https://i.imgur.com/H3D1P8R.jpg');
        msg.channel.send(attachment);
    }
});


client.on('message', msg=>{
  if(msg.content === PREFIX + 'ak'){
    const embed = new discord.MessageEmbed()
    .setColor('#6600cc')
    .setTitle('AKN Teste')
    .setImage('https://i.imgur.com/Ou2dm4e.png')
    .addField('AKN title', 'Akn test', true);

    msg.channel.send(embed);
  }
});

client.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args);
    switch(args[0]){
      case 'armor':
        if(!args[1]) return msg.reply('Error, sorry');
        else{
          const embed = new discord.MessageEmbed()
          .setColor('#0066cc')
          .setTitle('Armor Class - Tier 2')
          .addFields(
            { name: 'Armor Name', value: 'Module-3M', inline: true },
            { name: 'Armor Class', value: '2', inline: true },
            { name: 'Material', value: 'Aramid', inline: true },
            { name: 'Armor Zones', value: 'Thorax and Stomach', inline: true },
            { name: 'Durability', value: '40', inline: true },
            { name: 'Movement Speed', value: '-7%', inline: true },
            { name: 'Turn Speed', value: '-6%', inline: true },
            { name: 'Ergonomics', value: '-4', inline: true },
            { name: '\u200B', value: '\u200B' },

            { name: 'Armor Name', value: 'PACA Soft', inline: true },
            { name: 'Armor Class', value: '2', inline: true },
            { name: 'Material', value: 'Aramid', inline: true },
            { name: 'Armor Zones', value: 'Thorax and Stomach', inline: true },
            { name: 'Durability', value: '50', inline: true },
            { name: 'Movement Speed', value: '-6%', inline: true },
            { name: 'Turn Speed', value: '-5%', inline: true },
            { name: 'Ergonomics', value: '-6', inline: true },
            { name: '\u200B', value: '\u200B' },

            { name: 'Armor Name', value: '6B2 (Flora)', inline: true },
            { name: 'Armor Class', value: '2', inline: true },
            { name: 'Material', value: 'Null', inline: true },
            { name: 'Armor Zones', value: 'Thorax and Stomach', inline: true },
            { name: 'Durability', value: '80', inline: true },
            { name: 'Movement Speed', value: '-6%', inline: true },
            { name: 'Turn Speed', value: '-3%', inline: true },
            { name: 'Ergonomics', value: '-7', inline: true },
            { name: '\u200B', value: '\u200B' },
          )
          msg.channel.send(embed);
        }
    }
})

client.login(token);