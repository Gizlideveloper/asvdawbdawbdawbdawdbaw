const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Paradox Code Pingledi");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//-----------------------KOMUTLAR------------------------//
//afk//
client.on("message" , async message => {
  const msg = message;
  if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
  /*db.set(`afkSebep_${message.author.id}_${message.guild.id}`, "Sebep Girilmemiş")
  db.set(`afkKisi_${message.author.id}_${message.guild.id}`, message.author.id)           
  db.set(`afkAd_${message.author.id}_${message.guild.id}`, message.author.username)*/
  
  let afk = message.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
  
  const isim = db.fetch(`afkAd_${message.author.id}_${message.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${message.guild.id}`)
   if(message.content.includes(kisi3)){
     const embed = new Discord.MessageEmbed()
      .setColor("#0080FF")
      .setAuthor("" , client.user.avatarURL())
      .setDescription(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi`)
       message.channel.send(embed)
   }
 }
  if(message.author.id === kisi){
    const embed = new Discord.MessageEmbed()
      .setColor("#0080FF")
      .setAuthor("" , client.user.avatarURL())
      .setDescription(`Afk'lıktan Çıktınız`)
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi`)
       message.channel.send(embed)
   db.delete(`afkSebep_${message.author.id}_${message.guild.id}`)
   db.delete(`afkid_${message.author.id}_${message.guild.id}`)
   db.delete(`afkAd_${message.author.id}_${message.guild.id}`)
    message.member.setNickname(isim)
    
  }
  
})
//afk//
// SA AS SİSTEMİ //
client.on("message", async msg => {
  let sa = await db.fetch(`saas_${msg.guild.id}`);
  if (sa == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "selamın aleyküm" ||
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "slm"
    ) {
      try {
        return msg.reply("**Aleyküm Selam Hoş geldin.**")
      } catch (err) {
        console.log(err);
      }
    }
  } else if (sa == "acik") {
  }
  if (!sa) return;
});
// SA AS SİSTEMİ //
// TAG PAYLAŞ //
client.on("message", async msg => {
  let tagpaylas = await db.fetch(`tagpaylas_${msg.guild.id}`);
  if (tagpaylas == "acik") {
    if (
      msg.content.toLowerCase() == "tag" ||
      msg.content.toLowerCase() == "!tag" ||
      msg.content.toLowerCase() == ".tag"||
      msg.content.toLowerCase() == "-tag"
    ) {
      try {
        return msg.channel.send("✬  ");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (tagpaylas == "acik") {
  }
  if (!tagpaylas) return;
});

// TAG PAYLAŞ //
//ses//
client.on('ready', ()=>{
 client.channels.cache.get("785876523025956915").join()
    }) 
//ses//
// CHAT LOG \\
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  var yapan = message.author;
//Dionysus
  var kanal = await db.fetch(`chatlog_${message.guild.id}`);
  if (!kanal) return;
  var kanalbul = message.guild.channels.cache.cache.find("name", kanal);
//Dionysus
  const chatembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Silindi!`, yapan.avatarURL())
    .addField("Kullanıcı Tag", yapan.tag, true)
    .addField("ID", yapan.id, true)
    .addField("Silinen Mesaj", "```" + message.content + "```")
    .setThumbnail(yapan.avatarURL());
  kanalbul.send(chatembed);
});
//
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  var yapan = oldMsg.author;

  var kanal = await db.fetch(`chatlog_${oldMsg.guild.id}`);
  if (!kanal) return;
  var kanalbul = oldMsg.guild.channels.cache.cache.find("name", kanal);
//Dionysus
  const chatembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Düzenlendi!`, yapan.avatarURL())
    .addField("Kullanıcı Tag", yapan.tag, true)
    .addField("ID", yapan.id, true)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .setThumbnail(yapan.avatarURL());
  kanalbul.send(chatembed);
});
// CHAT LOG \\
// TAG ALANA ROL //

client.on('userUpdate', async user => {
  let sunucuid = "773585548844466186"; //Buraya sunucunuzun IDsini yazın
  let tag = "✬"; //Buraya tagınızı yazın
  let rol = "780152945345822741";//Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let rol1 = "780152945345822741";
  let rol2 = "780152945345822741";
  let rol3 = "780152945345822741";
  let rol4 = "780152945345822741";
  let rol5 = "780152945345822741";
  let rol6 = "780152945345822741";
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.id == '785876627527434270'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.cache.get(sunucuid).members.cache.get(user.id);
  if (!member) return;
  if (!member.roles.cache.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.roles.add(rol)
      const tagalma = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**<@${user.id}> Marcelus Ailesine Tagımızı Alarak Katıldı,** ${tag} **Tagını Aldığı için <@&${rol}> Rolünü Aldı.**`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.roles.remove(rol)
      member.roles.remove(rol1)
      member.roles.remove(rol2)
      member.roles.remove(rol3)
      member.roles.remove(rol4)
      member.roles.remove(rol5)
      member.roles.remove(rol6)
      const tagsilme = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**<@${user.id}> Adlı Kullanici, ${tag} Tagını Sildiğinden Dolayı <@&${rol}> Rolü Silindi!**`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});

// TAG ALANA ROL //