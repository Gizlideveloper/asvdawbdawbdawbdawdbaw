const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
if(!message.member.roles.cache.get("780152920536252457") && !message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(new Discord.MessageEmbed() .setDescription(`Bu komutu Kullanmaya Hakkın yok :x:`).setAuthor(message.author.tag ,message.author.avatarURL()).setColor("RANDOM")).then(m => m.delete(5000));
    let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let chan = client.channels.cache.get("785876560833413130")
    let muterol = ("780152926910808164")
    var muteTime = args[1];
    if(!muteTime) return message.channel.send(new Discord.MessageEmbed() .setDescription(`Süreyi Girmelisin`).setAuthor(message.author.tag ,message.author.avatarURL()).setColor("BLACK")).then(m => m.delete(5000));
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send(new Discord.MessageEmbed() .setDescription(`Lütfen Bir Sebep Giriniz.`).setAuthor(message.author.tag ,message.author.avatarURL()).setColor("BLACK")).then(m => m.delete(5000));
    if (!kullanici)   if(kullanici.hasPermission("ADMINISTRATOR")) return message.channel.send("Kimi susturacağını belirtmedin.")
    if (!reason) return message.channel.send ("Bir Sebep Belirtmedin.")
  
  message.react('785876560833413130')
  kullanici.roles.add(muterol)
  .then(() =>
           chan.send (new Discord.MessageEmbed()
.setDescription(`${kullanici} adlı kullanıcı chat kanallarında susturuldu. 
 Ceza Süresi: **${süre}**
 Ceza Sebebi: **${reason}**
 Cezayı Veren Yetkili: **<@${message.author.id}>** `)
.setAuthor(message.author.tag ,message.author.avatarURL()))
.setColor("BLACK"))   
  message.react("785876560833413130")

        .catch(console.error);
   
    
        setTimeout(() => {
    let chan1 = client.channels.cache.get("785876560833413130")

        kullanici.roles.remove(muterol)
        chan1.send(new Discord.MessageEmbed()
        .setDescription(`${kullanici} Adlı Kullanıcının **Chat Mute** süresi doldu`)
        .setColor("BLACK")
        .setFooter(message.author.tag ,message.author.avatarURL()));
  

    },  ms(muteTime));
let süre =muteTime
.replace(/y/g, " Yıl")
.replace(/d/g, " Gün")
.replace(/h/g, " Saat")
.replace(/m/g, " Dakika")
.replace(/s/g, " Saniye")

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["chatmute","mute"],
    permLevel: 0
};

exports.help = {
    name: 'chatmute',
    description: 'sesli kanalda susturur',
    usage: "mic-kapat @kisi @sure"
};