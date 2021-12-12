const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.once('ready', () => {
    console.log('Lode al Sole');
    bot.user.setActivity('Lode al Sole', { type: 'PLAYING'});

});

function buongiorno(){
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const canale = bot.channels.cache.get("819835890347147274")

    const embed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setTitle("Lode al Sole")
        .setDescription("Buongiorno " + "<@&783621035295637514>")
        .setImage("https://media.tenor.com/images/124cf009a111c6f792ec2bf907ef82ca/tenor.gif")
        .setFooter("BigDevil Bot")
        .setTimestamp();

    if(hour == 6 && minutes == 00){
        canale.send(embed)
    }
}
setInterval(buongiorno, 1000*60)

function buonanotte(){
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const canale = bot.channels.cache.get("819835890347147274")

    const embed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setTitle("Lode al Sole")
        .setDescription("Buonanotte " + "<@&783621035295637514>")
        .setImage("https://c.tenor.com/4TVsfk4Dh5oAAAAi/good-night-yellow-stars-and-moon-around-good-night-in-blue-bubble-letters.gif")
        .setFooter("BigDevil Bot")
        .setTimestamp();

    if(hour == 00 && minutes == 00){
        canale.send(embed)
    }
}
setInterval(buonanotte, 1000*60)
