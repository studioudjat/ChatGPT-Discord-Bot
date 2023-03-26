const { SlashCommandBuilder } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const { Client } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Display response from ChatGPT")
    .addStringOption((option) =>
      option.setName("input").setDescription("Enter your prompt")
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
    });
    const replyText = response.data.choices[0].text;
    await interaction.reply({ content: replyText, ephemeral: true });
  },
};
