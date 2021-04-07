const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`<a:turning_m:827220576774520902> ϻ's Moderation Engel Yardım Menüsü`)
.setTimestamp()
.addField('m-reklam-engel', 'Reklam Engelini Açar Ya da Kapatırsınız')
.addField('m-capsengel', 'Caps Lock Engelini Açar Ya da Kapatırsınız')
.addField('m-ever-here-engel', 'Ever Here Engelini Açar Ya da Kapatırsınız')
.addField('m-reklam-taraması','Reklam Taraması Yaparsınız')
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
  name: 'engel-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};