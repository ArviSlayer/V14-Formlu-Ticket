const Discord = require('discord.js');//ArviS#0011
  const db = require("croxydb")//ArviS#0011
//ArviS#0011
  exports.run = async (client, button, args) => {//ArviS#0011
    if(!button.member.permissions.has("ADMINISTRATOR")) 
      return button.channel.send("Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın")//ArviS#0011
//ArviS#0011
      let role = button.mentions.roles.first();
      if (!role)//ArviS#0011
        return button.reply("**ArviS#0011:** Bir Rol Etiketlemen Gerekiyor \n\nhttps://media.discordapp.net/attachments/997105193256747028/1043167898484604958/image.png").catch(() => {})
          button.react("<:tik_arvis:1035231831815106611>")

.then(async (cs) => {
  db.set("destek" + button.guild.id, {
    rolID: role.id
  });
    }).catch(() => {})
  //ArviS#0011
}
exports.conf = {
  aliases: ["ty"]
};

exports.help = {
  name: "ticket-yetkili"
};//ArviS#0011










//ArviS#0011