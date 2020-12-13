const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız. :uyar:`);
  
  let kanal = message.mentions.channels.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`Chat-log sistemi zaten ayarlanmamış. <a:no:772939501973930035>`)
      return
    }
    
    db.delete(`chatlog_${message.guild.id}`)
    message.channel.send(`Chat-log kanalı başarıyla sıfırlandı. <a:herlia_mortik:772939710116921354>`)
    return
  }
  
    if (!kanal) {
        return message.channel.send(`Chat-log kanalı olarak ayarlamak istediğiniz kanalı etiketlemelisiniz. <a:no:772939501973930035>`)
    }
  
    db.set(`chatlog_${message.guild.id}`, kanal.name)
  
    const chatembed = new Discord.MessageEmbed()
    .setDescription(`Chat-log kanalı başarıyla ${kanal} olarak ayarlandı. <a:herlia_mortik:772939710116921354>`)
    .setColor("PURPLE")
    .setTimestamp()
    message.channel.send(chatembed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["chat-log"],
    permLevel: 3
}

exports.help = {
    name: 'chat-log',
    description: 'Log kanalını ayarlar..',
    usage: 'log-ayarla '
}