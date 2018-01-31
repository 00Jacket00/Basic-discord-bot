const Discord = require("discord.js"); 
const TOKEN = "your TOKEN";
const client= new Discord.Client;

client.on("ready", function() { 
  console.log("Ready")
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content === '/join') {
  
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('Salve!');
        })
        .catch(console.log);
    } else {
      message.reply('Tu non sei è qui');
    }
  }
});


client.on('message', message => {
  if (message.content === 'Ehy') {
    message.reply('Qualcuno mi chiama?');
  }
  if(message.content==='Cosa fai?'){
    message.reply('Sono qui per proteggere e servire');
  }
  if(message.content==='Entra'){
    message.reply('Arrivo subito ');
  }
});


client.login('your Token');