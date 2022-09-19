
require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
//const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('elogiar').setDescription('El bot te elogia'),
	new SlashCommandBuilder().setName('hacerarte').setDescription('El bot es un artista y genera una obra de arte'),
	new SlashCommandBuilder().setName('hacerarte2').setDescription('El bot es un artista y genera una segunda obra de arte'),
	new SlashCommandBuilder().setName('bienvenidatest').setDescription('Format mensaje bienvenida'),
	new SlashCommandBuilder().setName('pruebashader').setDescription('Format mensaje bienvenida'),
	new SlashCommandBuilder().setName('generarprompt').setDescription('Genera un prompt de inteligencia artificial')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.DC_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);