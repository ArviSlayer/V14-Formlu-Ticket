const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")
const config = require("../config.js")
let prefix = config.prefix
client.on("ready", () => {
client.user.setActivity(`Made by ❤️ ArviS#0011`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`[ArviS#0011] Toplam: ${files.length} Komut Bulunuyor`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`[KOMUT] Yüklendi: ${props.help.name}`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
