const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 if(!message.member.roles.cache.has("780152945345822741")) return message.channel.send(`**Tag almadan başvuru yapamazsınız.**`)


let kanal = "785876604956966912"

let isim = args[0]

let yaş = args[1]

let invite = args[2]

let aktiflik = args[3]

if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`İsim Yazmalısın.`)).then(a => a.delete({timeout:3000}))

if(isNaN(yaş)) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Yaşını Yazmalısın.`)).then(a => a.delete({timeout:3000}))

if(!invite) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Günlük İnvite`)).then(a => a.delete({timeout:3000}))

if(!aktiflik) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Chatte Ve seslerde ne kadar aktif olabiliceğini yaz`)).then(a => a.delete({timeout:3000}))


message.channel.send("Başvuru Başarıyla Gönderilmiştir.").then(a => a.delete({timeout:7000}))
  
  let emebed = new Discord.MessageEmbed()
.setColor("BLUE")
.addField(`Başvuru Yapan Üye`,`${message.author} (${message.author.id})`)
.addField(` <a:772727616175341568:780196246576824351> İsminiz <a:772727616175341568:780196246576824351>`,`${isim}`)
.addField(` <a:772727616175341568:780196246576824351> Yaşınız <a:772727616175341568:780196246576824351>`,`${yaş}`)
.addField(` <a:772727616175341568:780196246576824351> Günlük İnvite <a:772727616175341568:780196246576824351>`,invite)
.addField(` <a:772727616175341568:780196246576824351> Günlük aktiflik <a:772727616175341568:780196246576824351>`,aktiflik)
client.channels.cache.get(kanal).send(emebed)
  client.channels.cache.get(kanal).send(`**<@&780152901695307794> Hey yeni bir başvuru var buraya bakman gerek.**`)
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["başvur","basvuru"],
  permLevel: 0
};

exports.help = {  
  name: 'başvuru',
};