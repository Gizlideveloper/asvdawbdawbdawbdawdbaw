  const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
 const lovers = message.guild.roles.cache.find(r => r.id === "780152966380126219");//üye rol
  if(!message.member.hasPermission("ADMINISTRATOR")) { //kayıt-sorumlusu rolü
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Yönetici Yetkisine Sahip Olman Gerekli!**");
  } else {
    let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
      if(!vUser) return message.channel.send("Bir Kullanıcı Veya ID Girin")
    const c = message.guild.member(vUser)
    c.roles.add(lovers)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lovers"],
  permLevel: 0,
};
exports.help = {
  name: "lovers",
  description: "lovers",
  usage: "lovers"
};