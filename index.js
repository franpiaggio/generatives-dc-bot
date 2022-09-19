require('dotenv').config();
const { Client, Intents, Message, MessageAttachment, MessageEmbed } = require('discord.js');
const Canvas = require('canvas');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS
	]
});


client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName == "elogiar") {
		let amor = [];
		amor.push("Te amo");
		amor.push("Sos lo mejor que me paso en la vida ");
		amor.push("Me encantaria pasar una noche romantica contigo");
		amor.push("Algo mas normal");
		let index = Math.floor(Math.random() * amor.length);
		await interaction.reply(amor[index] + "  " + interaction.user.username);
	} else if (commandName == "hacerarte") {
		interaction.reply({ files: [hacerArte1()] });
	} else if (commandName == "hacerarte2") {
		interaction.reply({ files: [hacerArteShader()] });
	} else if (commandName == "bienvenidatest") {
		interaction.reply({ files: [arteBienvenido(interaction.user.username)] });
	}
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.get('942834015063375882');
	const attachment = new MessageAttachment(arteBienvenido(member.user.username));

	channel.send('**' + member.user.username + '**,Bienvenidx al server grosx');
	channel.send({ files: [attachment] });
});



function hacerArte2() {
	let w = 1200;
	let h = 1200;

	const canvas = Canvas.createCanvas(w, h);
	const context = canvas.getContext('2d');

	let x2 = w * Math.random();
	let y2 = h * Math.random();
	let s2 = Math.random() * 150;

	let cnt = 8;
	let cnt2 = 8;
	let freq = Math.PI * (Math.random() * 15 + 2);



	let minr1 = Math.random();
	let ming1 = Math.random();
	let minb1 = Math.random();

	let sh = Math.random() * 20;


	let r1 = Math.floor(Math.random() * 255);
	let g1 = Math.floor(Math.random() * 255);
	let b1 = Math.floor(Math.random() * 255);


	let r2 = Math.floor(Math.random() * 255);
	let g2 = Math.floor(Math.random() * 255);
	let b2 = Math.floor(Math.random() * 255);


	for (let i = 0; i < cnt; i++) {
		for (let k = 0; k < cnt2; k++) {

			let amp = map_range(i, 0, cnt - 1, 0, w);
			let angulo = map_range(k, 0, cnt2 - 1, 0, freq);
			let x = w / 2 + Math.sin(angulo) * amp;
			let y = h / 2 + Math.cos(angulo) * amp;

			let r3 = Math.floor(map_range(k, 0, cnt2 - 1, r1, r2));
			let g3 = Math.floor(map_range(k, 0, cnt2 - 1, g1, g2));
			let b3 = Math.floor(map_range(k, 0, cnt2 - 1, b1, b2));

			let s = Math.random() * 150;

			drawCircle(context, x - sh, y - sh, s, "rgba(0,0,0,1.)");
			drawCircle(context, x, y, s, "rgba(" + r3 + "," + g3 + "," + b3 + ",1.0)");

		}
	}
	return canvas.toBuffer();
}

function arteBienvenido(_text) {
	let w = 800;
	let h = 800;

	const canvas = Canvas.createCanvas(w, h);
	const ctx = canvas.getContext('2d');
	let x2 = w * Math.random();
	let y2 = h * Math.random();

	let cnt = Math.floor(200 * Math.random());
	let r1 = Math.floor(255 * Math.random());
	let g1 = Math.floor(255 * Math.random());
	let b1 = Math.floor(255 * Math.random());

	r2 = 255 - r1;
	g2 = 255 - g1;
	b2 = 255 - b1;

	let s1 = 100;
	let s2 = 5;
	for (let i = 0; i < cnt; i++) {

		let x = w * Math.random();
		let y = h * Math.random();

		let r3 = Math.floor(map_range(i, 0, cnt - 1, r1, r2));
		let g3 = Math.floor(map_range(i, 0, cnt - 1, g1, g2));
		let b3 = Math.floor(map_range(i, 0, cnt - 1, b1, b2));

		let s = Math.random() * 80;
		s = Math.floor(map_range(i, 0, cnt - 1, s1, s2));
		drawCircle(ctx, x - 15, y - 15, s, "rgba(0,0,0,1.0)");
		drawCircle(ctx, x, y, s, "rgba(" + r3 + "," + g3 + "," + b3 + ",1.0)");

		drawCircle(ctx, x + s / 4 + s / 16, y - s / 4 - s / 16, Math.floor(s / 8), "rgba(255,255,255,.2)");
		drawCircle(ctx, x + s / 4, y - s / 4, Math.floor(s / 4), "rgba(255,255,255,.6)");
	}

	let finaltest = "Bienvenidx " + _text + "\n           a GenerativES";
	ctx.textAlign = "center";

	let fontsize1 = 65;
	let rw = w * .9;
	let rh = 250;
	var grd2 = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 200);
	grd2.addColorStop(0, "rgba(" + r2 + "," + g2 + "," + b2 + ",0.8)");
	grd2.addColorStop(1, "rgba(" + r1 + "," + g1 + "," + b1 + ",0.8)");

	ctx.beginPath();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "rgba(" + r1 + "," + g1 + "," + b1 + ",1.0)";
	ctx.rect(w / 2 - rw / 2, h / 2 - rh / 2, rw, rh);
	ctx.stroke();

	ctx.fillStyle = grd2;
	ctx.fillRect(w / 2 - rw / 2, h / 2 - rh / 2, rw, rh);
	var grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 200);
	grd.addColorStop(1, "rgba(255,255,255,0.5)");
	grd.addColorStop(1, "rgba(" + r2 + "," + g2 + "," + b2 + ",1.0)");

	let fs = fontsize1;
	ctx.fillStyle = "rgba(0,0,0,0.8)";
	ctx.font = fs * 1.0 + "px Arial";
	ctx.fillText(finaltest, w / 2 - 3, h / 2 - 3);


	ctx.fillStyle = "rgba(255,255,255,0.5)";
	ctx.font = fs * 1.0 + "px Arial";
	ctx.fillText(finaltest, w / 2 + 3, h / 2 + 3);

	ctx.fillStyle = grd;
	ctx.font = fs + "px Arial";
	ctx.fillText(finaltest, w / 2, h / 2);
	return canvas.toBuffer();
}

function hacerArte1() {
	let w = 800;
	let h = 800;

	const canvas = Canvas.createCanvas(w, h);
	const context = canvas.getContext('2d');

	let x2 = w * Math.random();
	let y2 = h * Math.random();
	let s2 = Math.random() * 150;

	let cnt = 20;
	let cnt2 = 20;


	for (let i = 0; i < cnt; i++) {
		for (let k = 0; k < cnt2; k++) {

			let x = w * Math.random();
			let y = h * Math.random();

			let r1 = Math.floor(255 * Math.random());
			let g1 = Math.floor(255 * Math.random());
			let b1 = Math.floor(255 * Math.random());

			let s = Math.random() * 150;

			drawCircle(context, x - 15, y - 15, s, "rgba(0,0,0,1.0)");
			drawCircle(context, x, y, s, "rgba(" + r1 + "," + g1 + "," + b1 + ",1.0)");
		}
	}
	return canvas.toBuffer();
}

function hacerArteShader() {
	const canvas = Canvas.createCanvas(w, h);
	return canvas.toBuffer();
}



function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
	if (fill) {
		ctx.fillStyle = fill
		ctx.fill()
	}
	if (stroke) {
		ctx.lineWidth = strokeWidth
		ctx.strokeStyle = stroke
		ctx.stroke()
	}
}

client.login(process.env.DC_TOKEN);

