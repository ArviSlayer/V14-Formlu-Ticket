const {EmbedBuilder} = require("discord.js");//ArviS#0011
const config = require("../config.js");
const { help } = require("./ticket-yetkili.js");
let prefix = config.prefix
//ArviS#0011
exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()//ArviS#0011
    .setTitle("YARDIM")//ArviS#0011
    .setDescription("**YETKİLİ AYARLAMA** \n`a.ticket-yetkili` \n `a.ty` \n\n**LOG KANALI AYARLAMA** \n`a.ticket-log` \n`a.tl` \n\n**TICKET OLUŞTURMA** \n`a.ticket-oluştur` \n`a.to`")
    .setColor("#2f3136")//ArviS#0011
    .setThumbnail("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
    .setImage("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
    return message.channel.send({embeds : [embed]});
};
//ArviS#0011
exports.conf = {
  aliases: ["y, help, h"]
};

exports.help = {
  name: "yardım"
};//ArviS#0011










//ArviS#0011