const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with your input!")
    .addStringOption((option) =>
      option.setName("input").setDescription("The input to echo back")
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    await interaction.reply({ content: input, ephemeral: true });
  },
};
