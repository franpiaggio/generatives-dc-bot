require('dotenv').config();
const { Client, Intents, Message, MessageAttachment, MessageEmbed } = require('discord.js');
const {registerFont, createCanvas} = require('canvas');
registerFont('roboto.ttf', { family: 'Roboto' })
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
	} else if (commandName == "generarprompt") {
			await interaction.reply(generateName());
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

	const canvas = createCanvas(w, h);
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

	const canvas = createCanvas(w, h);
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
	ctx.font = fs * 1.0 + "px Roboto";
	ctx.fillText(finaltest, w / 2 - 3, h / 2 - 3);


	ctx.fillStyle = "rgba(255,255,255,0.5)";
	ctx.font = fs * 1.0 + "px Roboto";
	ctx.fillText(finaltest, w / 2 + 3, h / 2 + 3);

	ctx.fillStyle = grd;
	ctx.font = fs + "px Roboto";
	ctx.fillText(finaltest, w / 2, h / 2);
	return canvas.toBuffer();
}

function hacerArte1() {
	let w = 800;
	let h = 800;

	const canvas = createCanvas(w, h);
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
	const canvas = createCanvas(w, h);
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




function generateName(){
	let st ="";
	
	let genst = ["generative system","generator","generative art"]

  let adjetivos = ["black","green","red","blue","yellow","white","multicolor","HSB based",
				   "vibrant","mystical","abstract","unique","intuitive","audiorhymic",
				   "flowing","swirling","dramatic","primitive","strong","sublime","elegant",
				   "sophisticated","beautiful","cute","enchanting","brilliant","logical","captivating",
				"extraordinary","expressive","calming","inspiring","contemplative","colorful","passionate","planned","emotional",
			"suggestive","decadent","irrational","poetic","moving","meditative","mesmerizing","monumental","mysterious","gorgeous",
			"relevant","important","raw","indulgent","delicate","simple","bold","subtle","coonstrating","rough","uneven",
			"organic","curvaceous","geometric","angular","intimate","strong","naturalistic",
			"distorted","brash","bright","clear","cool","dull","exciting","garish","grayed","pale","polychromed","primary","saccharine"
		,"sweet","warm"]

   let palabra1 = ["dogs","cats","birds","chair","table","people",
   "history","exams","universitys",
   "meaning","blood","hearts",
   "photo","coocking recipes",
   "alcohol bottles","steaks","fire","wind","water","earth",
   "guitar","violin","piano","lab","police","restaurant","vehicle","airport","farmer","revolution","grocery store",
   "honey","salad","apple","diamond","hat","shirts","surgery","money",
   "books","markets","school","bosses","sports","answers",
   "gardens","president","senator",
   "construction worker","proletariat","elite","oligarchy","poor","rich",
   "robot","android","cyborg","teacher",
   "accountant","actor","actress","astronomer"
   ,"baker","bricklayer","bus driver","butcher","carpenter",
   "chef","cook","cleaner","dentist","designer","doctor","dustman","engineer","factory worker",
   "farmer","firefighter","fisherman","florist","gardener"
   ,"hairdresser","journalist","judge","lawyer","lecturer","librarian","lifeguard","mechanic"
   ,"model","nurse","optician","painter","pharmacist","photographer","pilot","plumber",
 "politician","policeman","policewoman","postman","real estate agent"
 ,"recepcionist","scientist","secretary","shop assistant","soldier","translator","veterinary"
 ,"window cleaner","ship","water","rose","hydrangea","bleeding-heart",
 "cherry blossom","orchid","tulip","peony","lily","freesia","lotus flower","spikenard","dahlia",
 "chrysanthemum","carnation","morning glory","gardenias","sunflowers","daffodils","lantanas",
"marigolds","poppies","magnolias","zinnias","ulmus americana","nothofagus moorei",
"argania spinosa","aspen tree","Taxodium distichum","poaceae","adansonia","fagus","jacaranda",
"camel thorn","cannonball tree","ginkgo","dracanea cinnabari","flamboyant","giant sequioa","pinus logaeva",
"acer palmatum","prunus cerasus","juniperus","ceiba pentandra","rhizophora","abies religiosa",
"populus tremuloides","pinus pinoideae","pinus ponderosa","eucalyptus deglupta","ericaceae","ceiba pentandra",
"quercus virginiana","ficus","acer psuedoplatanus","tibetan cherry tree","fabaceae leguminosae","asparagaceae",
"prunus serrula","fabaceae geuminosae","baby","woman","man","businessman","businesswoman","photograph",
"cold","heat","morning","afternoon","kid","child","van","taxi","police car","bus","ambulance","skateboard","baby carriage","bicyble","mountain bike",
"scooter","fire engine","crane","forklift","tractor","recycling truck","cementmixer","dump truck","subway","aerial tramway","helipcoter","airplane","ballon","tram",
"carriage","rowboat","boat","train","Hammer","Screwdriver","Mallet","Axe","Saw","Scissors","Chisel","Pliers","Drill","Tape measure","Electric drill","Circular saw",
"soldering iron","electric screwdriver","chainsaw","nail gun","hammer"]


   let palabra2w = ["a hat","a dress","a bottle","a dog","a cat","a shoe","a shirt"];

   let animal = ["Aardvark","Alpaca","Alligator","Albatross","Anaconda","Ant",
				 "Axolotl","Armadillo","Baboon","Bee","Bat",
				 "Bird","Bear","Bongo","Capybara","Camel","Chihuaha",
				 "Chicken","Chameleon","Ferret","Crab","Cow","Cricket","Cockroach",
				 "Crow","Deer","Dodo","Dinosaur","Wolf","Duck","Gecko","Giraffe","Gorilla","Grasshopper","Hamster",
				 "Hyena","Iguana","Jaguar","Lemur","Lobster","Maggot","Ostrich","Pangolin",
				 "Pelican","Pig","Pug","Rabbit","Rhino","Shrimp","Squirrel","Squid","Terrier","Tortoise","Worm","Yak",
				 "Zebra","Nicobar Pigeon","Golden Pheasant","Scarlet Macaw","Bluebird of Paradise","Flamingo","Red-necked Tanager","Blue Jay","Mandarin Duck",
				 "Peacock","Blue Crowned Pigeon","Red Crested Turaco","Horned Sungem","Snowy Owl","Keel-billed Toucan","Atlantic Puffin","Blue/Azure Kingfisher",
				 "Painted Bunting","Gouldian Finch","Cockatoo","Bohemian Waxwing","Wood Duck","Paradise Tanager","Hyacinth Macaw","Rainbow Lorikeet","Purple Gallinule"]

	let sujetofinal = palabra1.concat(animal);
   
	let materials = ["chalk","colored pencil","conte","egg tempera","found materials",
					 "ink","oil","pastel","pencil","photograph","print","tempera","vine charcoal","watercolor"]
	
	let time = ["60's","70's","80's","90's","medieval"]

	let place = ["the lake","the mountains","a kitchen","a living room","a fairy tale world",
				"Capadocia","buenos aires","the forest" ,"the beach","Buenos Aires","New York","Europe"
				,"Asia","China","Japan","Mongolia","Peru","Bolivia","Mexico","the caribe","a pirate ship","the moon","Jupiter",
				"in Antartica","a stage set","a tv set","a domestic interior","a comercial interior","a public building","a inflatable",
				"parade floats","a hot air ballon","installation","a theme park","a educational space"]

	let monumentos = ["Hagia Sophia","The guggenheim","Taj Mahal"," Château de Chenonceau","Niterói Contemporary Art Museum",
						"acropolis","Musée d’Orsay ","The Gherkin","Metropolitan Cathedral of Brasília",
						"Mosque of Córdoba ","Westminster Abbey "," The Colosseum","One World Trade Center ",
						"The Lotus Temple ","St. Basil’s Cathedral ","Dome of the Rock","Casa Milà","Forbidden City",
						"Sagrada Família Barcelona Spain","Bran Castle"," Angkor Wat","Sultan Ahmed Mosque",
						"Konark Sun Tower ","Sacré-Coeur","Potala Palace","Musée du Louvre","Fallingwater",
						"The Pantheon","Space Needle","Villa Savoye","Burj Khalifa","Leaning Tower of Pisa",
						"The Flatiron Building","The Sistine Chapel"];


	let cameraangle = ["extreme close up","close up","medium Shot",
						"long shot","extreme long shot","overhead view","low angle","aerial view","tilted frame","over the shoulder shot"];
	
	let camerasettigns = ["fast shutter speed","slow shutter speed","bokeh",
						"tilt shift","motion blur","telephoto lens","macro lens",
						"macro photo","wide angle lens","fish eye lens","deep depth of field"];
	let luzprompt = ["golden hour","blue hour","midday","overcast","warm lighting","cold","flash photography","colourful lighting",
					 "high-key lightining","low key lighting","backlighting","backlit","Studio lightning"]

	let photoprocess = ["kodachrome","autochrome","lomography","polaroid","cameraphone","CCTV","disposable camera","daguerrotype",
					 "camera obscura","double exposure","cyanotype","redscale photography","infrared photography","bleach bypass",
					 "instagram","hipstamatic","colour splash","solarised","anaglyph"]
	
	let ilustration = ["Stencil","street art","backsy","ballpoint pen art",
						"pencil sketch","pencil drawing","charcoal sketch","woodcut","field jornal line art","colouring in sheet","etching ilustration",
						"crayon","child drawing","acrylic on canvas","watercolor",
						"coloured pencil","oil painting","ukiyo","chinese watercolor","pastels","airbrush","collage","magazine collage",
						"photocollage","vector art","screen painting","low poly","layered paper","sticker illustration","storybook","digital painting",
					"blueprint","patent drawing","cutaway","IKEA","instruction manual","botanical illustration","mythological map","voynich manuscript",
					"scientific diagram","voroni diagram","Isometric 3D","3D render","houdini 3D","octane 3D","claymation","Aardman animation","felt pieces",
					"fabric pattern","black velvet","scratch art","foil art","gold on black","perler beads","tatto","comic book art","pixar"
					,"studio ghibli","vintage disney","pixel art","1990 disney","1970s grainy vintage"]

	let arthistory1 = ["cave paintings","ancient egyptian mural","ancient egypt papyrus","fayum portrait","decorative minoan mural","roman mosaic",
					  "ancient roman painting","nurember chronicle","byzantine icon"
					  ,"giilded codex","renaissance painting","mannerism","manerist","baroque","rococo","neoclassicism","realism","art nouveau",
					  "impressionism","post-impressionism","symbolist painting","art deco","abstract expressionisim",
					  "colour field painting","cubism","constructivist","dada","de stijl","expressionism","fauvism"
					  ,"futurism","metaphysical painting","surrealism","pop art","street art","suprematism","mexican muralism","neo-expressionism","oprhism"]
	
	let statue = ["bronze statue","marble statue","terracotta warriors","jade sculpture",
				   "gold","silver","butter sculpture","sand sculpture","topiary","ice carving","ice carving","plastic","fibergrass"]

	let wave = ["cyberpunk","synthwave","windows 98","steampunk","solarpunk","cybercity"]
	st+=adjetivos[floor(genR(adjetivos.length-1))] +" ";
	if(genR(1) < .3){
		st+="and "+adjetivos[floor(genR(adjetivos.length-1))] + " " ;    
	}

	if(genR(1) < .5){
		st+=time[floor(genR(time.length-1))]+" ";
	} 
	st+=sujetofinal[floor(genR(sujetofinal.length-1))];

	if(genR(1) < .25){

		let st2 = materials[floor(genR(materials.length-1))];
		if(st2){
		st+=" in " + st2+" technique";
		}
	}

	if(genR(1) < .5){
		let st2 =place[floor(genR(place.length-1))]
		
		if(st2)   st+=" in "+st2;
	}
	if(genR(1) < .15){
		let st2 = camerasettigns[floor(genR(place.length-1))];
	 
		if(st2) st+=", " + st2;
	}
	if(genR(1) < .15){

		let st2 = luzprompt[floor(genR(luzprompt.length-1))];
	   
		if(st2)  st+=", " + st2;
	}
	if(genR(1) < .15){
		let st2 = photoprocess[floor(genR(photoprocess.length-1))];
		
		if(st2)st+=", " + st2;
	}
	if(genR(1) < .15){

		let st2 =  ilustration[floor(genR(ilustration.length-1))];
		
		if(st2) st+=", " + st2;
	}
	if(genR(1) < .15){
		let st2 = arthistory1[floor(genR(arthistory1.length-1))];
		if(st2)  st+=", " + st2;
	}
	if(genR(1) < .15){
		let st2 = statue[floor(genR(statue.length-1))];
		if(st2)  st+=", " + st2;
	}
	if(genR(1) < .5){
		let st2 = wave[floor(genR(wave.length-1))];
		if(st2)  st+=", " + st2;
	}
	//st+=" " + genst[floor(genR(genst.length-1))];
	st+="."

	st.toLowerCase();
	st = capitalizeFirstLetter(st);
	return st;
}

function floor(v){
	return Math.floor(v);
}
function genR(min, max) {
	let result = 0;
	if (!max) { result = Math.random() * (min - 0) + 0; } else { result = Math.random() * (max - min) + min; }
	return result;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

client.login(process.env.DC_TOKEN);

