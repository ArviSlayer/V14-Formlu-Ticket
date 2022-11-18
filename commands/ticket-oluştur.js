const {ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')//ArviS#0011
const db = require("croxydb")
const config = require("../config.js")//ArviS#0011
const prefix = config.prefix
//ArviS#0011
exports.run = async (client, message, args) => {
	let tit = message.content.slice(prefix.length + 'ticket-oluştur'.length);
	if(!tit.includes("+")) return message.reply("**ArviS#0011:** Buton Yazısı + Embed Yazısı \n\n`ÖRNEK:` a.ticket-oluştur Destek Talebi + Destek İçin Ticket Açabilirsiniz \n\nhttps://media.discordapp.net/attachments/997105193256747028/1043167281020162058/image.png")
        let tit2 = tit.split('+');//ArviS#0011
 
  let hm = await db.get("destek"+ message.guild.id)
  if(!hm) return message.channel.send('**ArviS#0011:** Destek Yetkilisi Ayarlamadan Menü Oluşturamazsın')
  let hm2 = await db.get(`log_${message.guild.id}`)
  if (!hm2) return message.channel.send("**ArviS#0011:** Log Kanalı Ayarlamadan Menü Oluşturamazsın")
//ArviS#0011
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
				.setLabel(`${tit2[0]}`)
				.setStyle(ButtonStyle.Success)
				.setCustomId("ticket")
			)
			const embed = new EmbedBuilder()//ArviS#0011
			.setTitle("ArviS#0011")
			.setDescription(`${tit2[1]}`)//ArviS#0011
			.setColor("#2f3136")//ArviS#0011
			.setImage("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
			.setThumbnail("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
		
        message.channel.send({embeds: [embed], components: [row]})
    }//ArviS#0011
//ArviS#0011
	exports.conf = {
	  aliases: ["to"]
	};
	
	exports.help = {
	  name: "ticket-oluştur"
	};
	









	//ArviS#0011