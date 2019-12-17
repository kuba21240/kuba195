const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "$"
var nazwabota = "Biuro Szeryfa BOT"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async() => {
    console.log(`${nazwabota} jest online`)
});

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()


if(command == "say"){
    message.delete() 
   
 

   if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3)) 
   else
   return message.channel.send("Nie posiadasz permisji!")  
}
 
if(command == "ogłoszenie"){
    var embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setTitle("Biuro Szeryfa informuje")
    .setColor(`#ffa500`)
    .setThumbnail(bot.user.avatarURL)
    .setTimestamp()
    .setFooter('Zarząd BCSO', bot.user.avatarURL)

    message.delete()
    


    
    
    message.channel.send(embed)

}

if(command == "propozycja"){
    var embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setTitle("///Propozycja///")
    .setColor(`#ffa500`)
    .setTimestamp()
     
    message.delete()
    
return message.channel.send(embed)
     


}



if(command == "infoserwer"){
    var embed = new Discord.RichEmbed()
    .addField("Nazwa Serwera:", message.guild.name, true)
    .addField("Właściciel serwera:", message.guild.owner.user.tag, true)
    .addField("Data stworzenia serwera:", message.guild.createdAt, false)
    .addField("Data dołączenia na serwer:", message.guild.joinedAt, false)
    .addField("Role serwera:", message.guild.roles.map(roles => `${roles.name}`).join(`, `), false)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(message.member.user.tag, message.member.user.avatarURL)
    .setAuthor(message.member.user.username, message.member.user.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .setImage(message.guild.iconURL)


    return message.channel.send(embed)
}
});     
bot.login(botconfig.token)