const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`<a:turning_m:827220576774520902> ϻ's Moderation Engel Yardım Komutları`)
.setTimestamp()
.addField('m-istatistik', 'Botun İstatistiklerine Bakarsınız')
.addField('m-istek-kod', 'İstediğiniz Kodları Belirtirsiniz')
.addField('m-toplamkomut', 'Bottaki Toplam Komut Sayısına Bakarsınız')
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
  name: 'bot-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};