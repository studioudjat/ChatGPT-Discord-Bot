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
    try {
      await interaction.deferReply();
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 1000,
        //n: 1,
        //stop: "\n",
        //temperature: 0.7,
      });

      //Uncomment here for debugging
      //console.log(completion.data.choices[0].text);

      const replyText = completion.data.choices[0].text;
      await interaction.editReply({ content: replyText, ephemeral: true });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  },
};
