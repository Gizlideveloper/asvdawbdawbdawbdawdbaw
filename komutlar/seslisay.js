const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
  let gif = ("https://images-ext-2.discordapp.net/external/qSYAi3TrLZ6Yba7_9d9Lhqt7EGa-Cc_9VRzhcPtxfNE/https/media.giphy.com/media/kFNMddkQQKds2mVMbI/giphy.gif")
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.  size;
      const emoji = client.emojis.cache.find(emoji => emoji.name === "herlia_siyahtik");
  const arrifentembed = new Discord.MessageEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL()}`)
        .setDescription(`<a:BeyazTik:779826321706057758> Ses kanallarında ${count} kişi bulunmaktadır.`)
        .setImage("https://images-ext-2.discordapp.net/external/qSYAi3TrLZ6Yba7_9d9Lhqt7EGa-Cc_9VRzhcPtxfNE/https/media.giphy.com/media/kFNMddkQQKds2mVMbI/giphy.gif")

  message.channel.send(arrifentembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["seslisay"],
  permLevel: 0,
};

exports.help = {
  name: 'seslisay',
  description: 'kullanıcıyı susturur.',
  usage: 'seslisay'
};