const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')

var pref = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`:x: Aç yada kapat yazmalısınm! Örnek: \`${ayarlar.prefix}tagpaylas aç\``)
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('`Yönetici` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`tagpaylas_${message.guild.id}`, 'acik').then(i => {
     return message.channel.send(new Discord.MessageEmbed().setDescription(`Artık biri tag diyince otomatik olarak tagı atıcak.`).setColor("RANDOM"));
    })
  }
  if (args[0] == 'kapat') {
    db.set(`tagpaylas_${message.guild.id}`, 'kapali').then(i => {
    return message.channel.send(new Discord.MessageEmbed().setDescription(`Artık biri tag diyince cevap vermicek...`).setColor("RANDOM"));
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "ayarlar",
  aliases: [],
  permLevel: 1,
};

exports.help = {
  name: 'tagpaylas',
  description: 'Botun Sa-As Sistemini Ayarlar.',
  usage: 'tagpaylas <aç/kapat>'
};