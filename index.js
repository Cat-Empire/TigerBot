const dotenv = require("dotenv");

dotenv.config();

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "%";

client.once("ready", () => {
  console.log("Ready!");
});
data = {};
client.on("message", (message) => {
  if (message.content === `${prefix}ping`) {
    if (data[message.author.username] !== undefined)
      data[message.author.username] += 1;
    else data[message.author.username] = 1;

    message.channel.send(
      `You ${message.author.username} issued ping for ${
        data[message.author.username]
      } times.`
    );
  } else if (message.content === `${prefix}beep`) {
    message.channel.send("Boop!!");
  } else if (message.content === `${prefix}cat`) {
    message.channel.send("cat back!!");
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`this server's name is: ${message.guild.name}`);
  } else if (message.content === `${prefix}hi`) {
    message.channel.send(`Hello dear ${message.author.username}`);
  }
});

client.login(process.env.TOKEN);
