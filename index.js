// Require the necessary discord.js classes
const { Client, Intents, Message, MessageAttachment, MessageEmbed   } = require('discord.js');
const { token } = require('./config.json');
const Canvas = require('canvas');
// Create a new client instance
//const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


//const myIntents = new Intents();
//myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS //also enable in discord developer portal
	]  });


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	console.log("INTERACTION ");

	console.log(interaction);
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
		await interaction.reply(amor[index] +"  "+ interaction.user.username);
	} else if (commandName == "hacerarte") {
		interaction.reply({ files: [hacerArte1()] });
	} else if (commandName == "hacerarte2") {
		interaction.reply({ files: [hacerArte2()] });
	} else if (commandName == "bienvenidatest") {
		interaction.reply({ files: [arteBienvenido(interaction.user.username)] });
	}

});

client.on('guildMemberAdd', member => {


	console.log(member);
	const channelId = "942834015063375882";
	const message = "Please welceome <@${member.id}> to the server !"
	const channel = member.guild.channels.cache.get('942834015063375882')
	const attachment = new MessageAttachment(arteBienvenido(member.user.username));

	channel.send('**' + member.user.username + '**,Bienvenidx al server grosx');
	channel.send({ files: [attachment] });


	// inside a command, event listener, etc.
	/*const exampleEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/AfFp7pu.png')
		.setTimestamp()
		.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
	*/
	//channel.send('**' + member.user.username + '**,Bienvenidx al server grosx');
	//channel.send(files: [attachment]  );
	//channel.send({ embeds: [exampleEmbed] });
	//member.guild.channels.cache.get('942834015063375882').reply({ files: [hacerArte1()] });

	/*const channelId = "942834015063375882";
	console.log(member);
	const message = 'Please welcome <@${memberid}> to the server';
	const channel = member.guild.channels.cache.get(channelId);
	channel.send(message);
	member.reply({ files: [hacerArte1()] });
	//role = member.guild.roles.find('name', 'Beginner role name'); // Variable to get channel ID
	//member.addRole(role); // Adds the default role to members
	member.guild.channels.get(942834015063375882).send({
	embed: {
		color: 3447003,
		title: "**SERVER NAME** Welcome Bot!",
		url: "WEBSITE URL",
		description: "Welcome *" + member + "* to the **Server name** discord server!",
		fields: [{
			name: "Information",
			value: "Some info on the server"
		}
		],
		timestamp: new Date(),
		footer: {
			icon_url: client.user.avatarURL,
			text: "© NAME OF SERVER 2018 - 2019"
		}
	}
	});*/

});



function hacerArte2() {
	let w = 1200;
	let h = 1200;

	const canvas = Canvas.createCanvas(w, h);
	const context = canvas.getContext('2d');

	//const background = await Canvas.loadImage('./background.png');


	let x2 = w * Math.random();
	let y2 = h * Math.random();
	let s2 = Math.random() * 150;


	//drawCircle(context, x, y, s, "rgba(200,100,100,1.0)");
	//drawCircle(context, x-50, y-50, s, "rgba(50,20,80,1.0)");

	let cnt = 8;
	let cnt2 = 8;
	let freq = Math.PI *( Math.random() * 15+2);



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


			/*let amp = map_range(i, 0, cnt - 1, 0, w);
			let angulo = map_range(k, 0, cnt2 - 1, 0, Math.PI * 2.);
			let x = w / 2 + Math.sin(angulo)*amp;
			let y = h / 2 + Math.cos(angulo) * amp;
			let r1 = map_range(i, 0, cnt - 1, 0, 255);
			let g1 = map_range(i, 0, cnt - 1, 255,0);
			let b1 = map_range(k, 0, cnt2 - 1, 255, 0);*/


			let amp = map_range(i, 0, cnt - 1, 0, w);
			let angulo = map_range(k, 0, cnt2 - 1, 0, freq);
			let x = w / 2 + Math.sin(angulo) *amp;
			let y = h / 2 + Math.cos(angulo) * amp;
			/*let r1 = Math.floor(map_range(i, 0, cnt - 1, 24, 255));
			let g1 = Math.floor(map_range(i, 0, cnt - 1, 35, 255));
			let b1 = Math.floor(map_range(k, 0, cnt2 - 1, 70, 255));
			*/

			let r3 = Math.floor(map_range(k, 0, cnt2 - 1, r1, r2));
			let g3 = Math.floor(map_range(k, 0, cnt2 - 1, g1, g2));
			let b3 = Math.floor(map_range(k, 0, cnt2 - 1, b1, b2));

			let s = Math.random() * 150;

			drawCircle(context, x - sh, y - sh, s, "rgba(0,0,0,1.)");
			drawCircle(context, x, y, s, "rgba(" + r3 + "," + g3 + "," + b3 + ",1.0)");
			//drawCircle(context, x, y, s, "rgba(" + r1.toString() + ", " + g1.toString() + ", " + r1.toString() + ", 1.0)");
		}
	}
	return canvas.toBuffer();
}

function arteBienvenido(_text) {
	let w = 800;
	let h = 800;

	const canvas = Canvas.createCanvas(w, h);
	const ctx = canvas.getContext('2d');

	//const background = await Canvas.loadImage('./background.png');


	let x2 = w * Math.random();
	let y2 = h * Math.random();
	


	//drawCircle(context, x, y, s, "rgba(200,100,100,1.0)");
	//drawCircle(context, x-50, y-50, s, "rgba(50,20,80,1.0)");



	let cnt = Math.floor(200 * Math.random());
	let r1 = Math.floor(255 * Math.random());
	let g1 = Math.floor(255 * Math.random());
	let b1 = Math.floor(255 * Math.random());
	/*let r2 = Math.floor(255 * Math.random());
	let g2 = Math.floor(255 * Math.random());
	let b2 = Math.floor(255 * Math.random());
	*/

	r2 = 255 - r1;
	g2 = 255 - g1;
	b2 = 255 - b1;

	let s1 = 100;
	let s2 = 5;
	for (let i = 0; i < cnt; i++) {
		
		let x = w * Math.random();
		let y = h * Math.random();
		/*let r3 = Math.floor(100 * Math.random());
		let g3 = Math.floor(100 * Math.random());
		let b3 = Math.floor(100 * Math.random());**/

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

	let finaltest = "Bienvenidx " + _text + "\n           a GNTFS";
	ctx.textAlign = "center";

	let fontsize1 = 65;
	let cnt3 = 3;



	let rw = w*.9;
	let rh = 250;
	// Red rectangle


	//var my_gradient = ctx.createLinearGradient(0, 0, 0, w);
	var grd2 = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 200);
	grd2.addColorStop(0, "rgba(" + r2 + "," + g2 + "," + b2 + ",0.8)");
	grd2.addColorStop(1, "rgba(" + r1 + "," + g1 + "," + b1 + ",0.8)");
	

	//doiqwdqwjmipfjqw fmpoaiwemf iop
	ctx.beginPath();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "rgba(" + r1 + "," + g1 + "," + b1 + ",1.0)";
	ctx.rect(w / 2 - rw / 2, h / 2 - rh / 2 , rw, rh);
	ctx.stroke();

	ctx.fillStyle = grd2;
	//ctx.fillStyle = "rgba(255,255,255,1.0)";
	ctx.fillRect(w / 2 - rw / 2, h / 2 - rh / 2, rw, rh);
	//ctx.fillStyle = "rgba(" + r1 + "," + g1 + "," + b1 + ",1.0)";



	//var my_gradient = ctx.createLinearGradient(0, 0, 0, w);
	var grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, 200);
	//grd.addColorStop(0, "rgba(" + r1 + "," + g1 + "," + b1 + ",1.0)");
	grd.addColorStop(1, "rgba(255,255,255,0.5)");
	grd.addColorStop(1, "rgba(" + r2 + "," + g2 + "," + b2 + ",1.0)");
	
	let fs = fontsize1;
	ctx.fillStyle = "rgba(0,0,0,0.8)";
	ctx.font = fs*1.0 + "px Arial";
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

	//const background = await Canvas.loadImage('./background.png');


	let x2 = w * Math.random();
	let y2 = h * Math.random();
	let s2 = Math.random() * 150;


	//drawCircle(context, x, y, s, "rgba(200,100,100,1.0)");
	//drawCircle(context, x-50, y-50, s, "rgba(50,20,80,1.0)");

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
			//drawCircle(context, x, y, s, "rgba(" + r1.toString() + ", " + g1.toString() + ", " + r1.toString() + ", 1.0)");
		}
	}
	return canvas.toBuffer();
}


function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
//UTILS
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
function createRemap(inMin, inMax, outMin, outMax) {
	return function remaper(x) {
		return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	};
}



// Login to Discord with your client's token
client.login(token);