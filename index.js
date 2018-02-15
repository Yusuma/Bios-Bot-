const Discord = require("discord.js");

const PREFIX = "<"

//fortunes variable setting
let fortunes = [
    "Oui",
    "Non",
    "42",
    "Je suis un robot je n'ai pas la réponse àvotre requête.",
    "pourquoi ?",
    ">request: denied...",
];

//coin variable setting
let coin = [
    "pile",
    "pile",
    "pile",
    "face",
    "face",
    "face",
    "tranche lel !"
];

//dice variable setting
let dice = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
];

let bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setPresence({ game:{name: '<help | Bios Services', type: 0}});
    console.log("Ready");
});

bot.on("guildMemberAdd", member =>{
    let role = member.guild.find("name", "Sans Faction");
    member.guild.channels.find("name", "discussions_generales").send('${member.user.username} viens de rejoindre le server !')
    member.addRole(role)
});

bot.on("guildMemberRemove", member =>{
    member.guild.channels.find("name","discussions_generales").send('${member.user.username} viens de nous quitter !')
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user))return;

    //Message spéciaux
    if (message.content == "Yop") {
        message.channel.send("Bonjour à vous !");
    }
    if (message.content == "RPG") {
        message.channel.send(">data_access: garanted...");
            let rpg_embed = new Discord.RichEmbed()
            .setColor('#86d1ff')
            .addField(">url_send_message...", "https://laurierleaderking.wixsite.com/tocthegamefr")
            .setFooter("- Bios vous remercie d'avoir fait appel à ces services !")
        message.channel.send(_embed); 
    }

    if (message.content == "Qli") {
        message.channel.send(":nauseated_face:");
    }

    if (message.content == "gg") {
        message.channel.send(":sunglasses:");
    }

    if (message.content == "Trickstar") {
        message.channel.send("*U no da wei !*");
    }

    if (message.content == "Odd Eyes") {
        message.channel.send("Dragon Powaaaa !");
    }

    if (message.content == "Lightsworn") {
        message.channel.send("**MAY GOD BLESS YOU !!!**");
    }

    if (message.content == "Cyberse") {
        message.channel.send("*Wat iz dat ?!*");
    }

    if (message.content == "laisse poce bleu") {
        message.channel.send("https://i.imgur.com/t9Z5S3C.png");
    }

    if (message.content == "Schuss") {
        message.channel.send("Adios Amigos ! Pépito !");
    }

    if (message.content == "Eidolon") {
        message.channel.send("**MLG ! You are a Pro Player Bruv !**");
    }
        //Commands
        if(!message.content.startsWith(PREFIX)) return;

        let args = message.content.substring(PREFIX.length).split(" ");
    
        switch (args[0].toLowerCase()) {

            //help command
            case "help":
                message.channel.send(">data_access: garanted...");
                    let help_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .setThumbnail("https://cdn.discordapp.com/attachments/410079349190950913/413606558682054656/Bios1.png")
                    .addField(">command_list_load...", "Liste des commandes")
                    .addField(">link_command...","**<forum** lien vers le forum Faeris\n**<points** tableau de point des factions\n**<factions** liens vers les factions\n**<ygoprol** lien ygopro_link bétâ\n**<ygopro** lien ygopro")
                    .addField(">system_command...","**<help** liste de commandes\n**<info** information sur le Bios\n")
                    .addField(">games_command...", "**<ask** jeux de question réponse\n**<toss** pile/face\n**<roll** lancer une dé a 6 faces")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(help_embed);
                console.log("help");
                break;
            //link commands
            case "forum":
                message.channel.send(">data_access: garanted...");
                    let forum_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .addField(">url_send_message...", "http://faeris.forumactif.com/")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(forum_embed);
                console.log("forum");
                break;
                
            case "factions":
                message.channel.send(">data_access: garanted...");
                    let factions_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .addField(">url_send_message: Datenshi...", "http://faeris.forumactif.com/t340-faction-datenshi-les-heritiers-des-samurais")
                    .addField(">url_send_message: Laishmabal...", "http://faeris.forumactif.com/t344-faction-laishmabal-les-guerriers-de-l-orient#4819")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(factions_embed);
                console.log("factions");
                break;
                
            case "ygoprol":
                message.channel.send(">data_access: garanted...");
                    let ygoprol_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .addField(">url_send_message...", "https://mega.nz/#!N6RQBCZR!UPINQF4pmyg520CnFvybYaBTbuj9ZcZFqzdPx1KTpXI")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(ygoprol_embed);
                console.log("ygoprol");
                break;

            case "points":
                message.channel.send(">data_access: garanted...");
                    let points_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .addField(">url_send_message...", "http://faeris.forumactif.com/h9-tableau-de-points-2")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(points_embed);
                console.log("points");
                break;

            case "ygopro":
                message.channel.send(">data_access: garanted...");
                    let ygopro_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .addField(">url_send_message...", "https://openload.co/f/N9lJnDFaj70/ygopro-1.033.D-Percy.exe")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(ygopro_embed);
                console.log("ygopro");
                break;
            

            //syst command
            case "info":
                message.channel.send(">data_access: garanted...");
                    let info_embed = new Discord.RichEmbed()
                    .setColor('#86d1ff')
                    .setThumbnail("https://cdn.discordapp.com/attachments/410079349190950913/413606558682054656/Bios1.png")
                    .addField("**>BIOS-Bot©**", "**>program_author:** yusuma & kikhay\n\n**>patch_version:** 0.1.2\n\n**>birth_date:** 02/13/2018\n\n**>function_added:** interaction/jeux/musique/lien")
                    .setFooter("- Bios vous remercie d'avoir fait appel à ses services !")
                message.channel.send(info_embed);
                console.log("info");
                break;

            
            //game command
            case "ask":
                if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
                else message.channel.send("je ne peut pas lire cela !");
                console.log("ask");
                break;

            case "toss":
                message.channel.send(coin[Math.floor(Math.random() * coin.length)]);
                console.log("toss");
                break;

            case "roll":
                message.channel.send(dice[Math.floor(Math.random() * dice.length)]);
                console.log("roll");
                break;
           
        }
    
});

bot.login(process.env.TOKEN);
