const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`» ϻ's Moderation Moderasyon Komutları`)
.setTimestamp()
.addField('<a:bstar_m:812786958795014175> m-ban-yardım', 'Ban Yardım Menüsünü Açar')
.addField('<a:bstar_m:812786958795014175> m-engel-yardım', 'Engelle Komutları Yardım Menüsünü Açar')
.addField('<a:bstar_m:812786958795014175> m-kick-yardım', 'Banlog ayarlar')
.addField('<a:bstar_m:812786958795014175> m-bot-yardım', 'Sayaç Sistemi')
.addField('<a:bstar_m:812786958795014175> m-genel', 'Sa-as sistemi Sistemi')
.addField('<a:bstar_m:812786958795014175> m-koruma-yardım', 'Kullanıcıya belirtilen rolü verir')
.addField('<a:bstar_m:812786958795014175> m-rol-yardım', 'Kullanıcıdan belirtilen olü alır')
.setImage("")
.setFooter(`ϻ's Moderation`, client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};