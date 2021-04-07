const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`<a:turning_m:827220576774520902> ϻ's Moderation Ban Komutları`)
.setTimestamp()
.addField('m-ban', 'Etiketlediğiniz Kullanıcıya Ban Atarsınız')
.addField('m-ban-log', 'Ban Log Kanalını Ayarlasınız')
.addField('m-byetkilirol','Ban Yetkilisi Rolünü Ayarlarsınız')
.addField('m-unban','Belirtilen Kullanıcının Banını Kaldırır')
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
  name: 'ban-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};