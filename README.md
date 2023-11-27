# PicDiscordBot

## Description

PicDiscordBot is a simple Discord bot that allows users to send images from a designated folder on your local machine to a Discord channel of your choice. The project includes a launcher script (`launcher.bat`) for easy bot startup.

## Features

- **Image Sharing:** Send images from a specified folder to a Discord channel.
- **User-Friendly:** Utilize the straightforward `launcher.bat` script to start the bot effortlessly.
- **Customizable:** Configure the bot to use your preferred Discord channel and image folder.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/PicDiscordBot.git
   ```

2. **Setup Discord Bot:**
   - Create a new Discord bot and obtain the token. You can do this through the [Discord Developer Portal](https://discord.com/developers/applications).
   - Add the bot to your Discord server.

3. **Configure Bot Settings:**
   - Open the `config.json` file and replace `PUT_YOUR_TOKEN_HERE` with the actual token you obtained in step 2.
   - Set the `channelID` to the ID of the Discord channel where you want the bot to send images.

4. **Add Images:**
   - Place the images you want to share in the designated folder (default: `pic/`).

5. **Run the Bot:**
   - Double-click on `launcher.bat` to start the bot.


## Dependencies

- [discord.js](https://discord.js.org/) - Discord API library for Node.js.

## Disclaimer

This project is provided as-is. Ensure that you comply with Discord's [Terms of Service](https://discord.com/terms) and [Developer Terms](https://discord.com/developers/docs/legal).

Feel free to customize and enhance the project according to your needs. Contributions are welcome!

---

**Note:** Make sure you have Node.js installed on your machine before running the bot. If not, you can download it from [here](https://nodejs.org/).
