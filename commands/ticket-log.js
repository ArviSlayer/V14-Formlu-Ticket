const Discord = require('discord.js');//ArviS#0011
  const db = require("croxydb")//ArviS#0011

  exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) 
      return message.reply("Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın");
//ArviS#0011
    let log = message.mentions.channels.first()//ArviS#0011
      if(!log) 
    return message.reply({content: "**ArviS#0011:** Kanal Etiketlemen Gerekiyor \n\nhttps://media.discordapp.net/attachments/997105193256747028/1043167775927058452/image.png"})
    //ArviS#0011
  message.reply("<:tik_arvis:1035231831815106611> Log Kanalı Ayarlandı")
    db.set(`log_${message.guild.id}`, log.id)
    
}//ArviS#0011
exports.conf = {
  aliases: ["tl"]
};

exports.help = {
  name: "ticket-log"//ArviS#0011
};//ArviS#0011

  








//ArviS#0011