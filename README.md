# ChatGPT-Discord-Bot

This is a very simple code to create a Discord bot that interact with ChatGPT API.

# Requirement

* Node.js
* Discord.js
* OpenAI
* Your own Discord server

# Installation

1. Login in to [Discord Developers Portal](https://discord.com/developers/applications) to create an application

2. Create a bot, get an invite URL, and save a token.

3. Paste the invite URL to add the bot to your server.

4. Get a client ID from OAuth2 section

5. Get a server ID from your Discord app. *You must enable the developer mode to get the server ID.

6. Login in to [OpenAI dashboard](https://platform.openai.com).

7. Create a API key and save the key.

8. Install Discord.js Node.js library

```bash
npm install discord.js
```

9. Install OpenAI Node.js library

```bash
npm installl openai
```

10. Install Dotenv Node.js library

```bash
npm install dotenv
```

# Usage

Please create .env file in the root directory and enter the bot token, client ID, server ID, and OpenAI API Key information to this file as below.

```
TOKEN=xxxx #Discord bot token
CLIENT_ID=xxxx #Discord client ID
GUILD_ID=xxxx #Discord server ID
OPENAI_API_KEY=xxx #OpenAI API key
```

Register slash commands

```bash
node deploy-command.js
```

Start a service.

```bash
node .
```

Now, go to Discord App and type /chat prompt to get a response from ChatGPT.
