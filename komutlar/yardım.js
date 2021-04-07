const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:turning_m:827220576774520902> Yardım Komutları')
.setTimestamp()
.addField('m-moderasyon', 'Moderasyon Komutlarını Açar')
.setFooter(`ϻ's Moderation`, client.user.avatarURL())
.setTimestamp('https://i.pinimg.com/originals/e5/cc/1f/e5cc1fa47c29425e3fdaf6f35e9555b6.gif')
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};