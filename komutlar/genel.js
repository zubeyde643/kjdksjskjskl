const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`<a:turning_m:827220576774520902> ϻ's Moderation Genel Komutlar`)
.setTimestamp()
.addField('m-çekiliş', 'Çekiliş Düzenlersiniz')
.addField('m-mod-log', 'Mod Log Kanalını Ayarlarsınız')
.addField('m-sa-as', 'Sa-as Sistemini Açar Ya da Kapatırsınız')
.addField('m-sil', 'Belirtilen Sayıda Mesaj Silersiniz')
.addField('m-yardım', 'Yardım Menüsünü Açarsınız')
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
  name: 'genel',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};