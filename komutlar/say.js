const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("780152921635422249"))
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "773585548844466186";
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
'0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
'0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }
  let boost = '780074107185266698';
  var booster = message.guild.members.cache.filter(r => r.roles.cache.has(boost)).size.toString().replace(/ /g, "    ");
  var üs3 = booster.match(/([0-9])/g)
  booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    booster = booster.replace(/([0-9])/g, d => {
      return {
'0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }
  
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
'0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }
  
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "✬";
  message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
 '0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }
	 //////////////////////////////////////////
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
'0': `<a:Sifir:779847537170710559>`,
    '1': `<a:bir:779847119065710653>`,
    '2': `<a:iki:779847123671318620> `,
    '3': `<a:uc:779847123352158219>`,
    '4': `<a:dort:779847123343638548>`,                       
    '5': `<a:bes:779847122920144916>`,
    '6': `<a:alti:779847123704479765>`,
    '7': `<a:yedi:779847122329534484>`,
    '8': `<a:sekiz:779847124015120414>`,
    '9': `<a:dokuz:779847123414941747>`}[d];
      })
    }
  
  /////////////////////////////////////////////////////
const emoji1 = client.emojis.cache.get("778341309190373426")
 const embed1 = new Discord.MessageEmbed()
 .setColor('000000')
 .setDescription(`<a:Kraltac:779826525171875892> **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n <a:Kraltac:779826525171875892> **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n <a:Kraltac:779826525171875892> **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n <a:Kraltac:779826525171875892> **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n  <a:Kraltac:779826525171875892>** Sunucumuza Toplam ${booster} Kişi takviye yaptı. **`)
 .setFooter(`Komutu Kullanan : ${message.author.username}`)
 
     const hata = new Discord.MessageEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.cache.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLevel: 1,
};
exports.help = {
  name: 'say'
}