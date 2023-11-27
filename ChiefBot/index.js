const {Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { pic } = require('./pic.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

var guild = 0;
var channel = 0;

function sendRImage(){
    let qty = 31;
    var RND = Math.floor(Math.random() * qty);
    if(RND = pic[RND].id){
       return pic[RND].url;

    }
}

client.once(Events.ClientReady, () => {
    console.log('Logged in!');
    client.guilds.cache.forEach(g => {
        if (g.id === "1147234922076049429") {
            channel = g.channels.cache.get('1147234923040755895');
            guild = g;
            var a = sendRImage();
            console.log("sent message! " + a);
            channel.send({
                files: [{
                    attachment: a,
                }]
            });
            client.destroy();
        }
    })
});

client.login(token);

