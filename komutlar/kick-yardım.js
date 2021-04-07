const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`<a:turning_m:827220576774520902> ϻ's Moderation Kick Komutları`)
.setTimestamp()
.addField('m-kick', 'Etiketlediğiniz Kullanıcıyı Sunucudan Atarsınız')
.addField('m-kick-log', 'Kick Log Kanalını Ayarlarsınız')
.setFooter(`ϻ's Moderation`, client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};//başka şeyler eklersiniz die menüyüde koydum

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kick-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};