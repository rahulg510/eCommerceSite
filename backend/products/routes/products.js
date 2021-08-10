const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
	const products = [
		{
			id: "recZkNf2kwmdBcqd0",
			name: "accent chair",
			price: 25999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
			colors: ["#ff0000", "#00ff00", "#0000ff"],
			company: "marcos",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
			shipping: true,
		},
		{
			id: "recEHmzvupvT8ZONH",
			name: "albany sectional",
			price: 109999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
			colors: ["#000", "#ffb900"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
		},
		{
			id: "rec5NBwZ5zCD9nfF0",
			name: "albany table",
			price: 309999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
			colors: ["#ffb900", "#0000ff"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "kitchen",
		},
		{
			id: "recd1jIVIEChmiwhe",
			name: "armchair",
			price: 12599,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
			colors: ["#000", "#00ff00", "#0000ff"],
			company: "marcos",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "bedroom",
			shipping: true,
		},
		{
			id: "recoM2MyHJGHLVi5l",
			name: "bar stool",
			price: 4099,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
			colors: ["#000"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "dining",
			shipping: true,
		},
		{
			id: "recotY5Nh00DQFdkm",
			name: "dining table",
			price: 42999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960",
			colors: ["#00ff00", "#0000ff", "#ff0000"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "dining",
			shipping: true,
		},
		{
			id: "rec1Ntk7siEEW9ha1",
			name: "emperor bed",
			price: 23999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
			colors: ["#0000ff", "#000"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "bedroom",
			shipping: true,
		},
		{
			id: "recNZ0koOqEmilmoz",
			name: "entertainment center",
			price: 59999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
			featured: true,
			colors: ["#000", "#ff0000"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
			shipping: true,
		},
		{
			id: "recrfxv3EwpvJwvjq",
			name: "high-back bench",
			price: 39999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
			featured: true,
			colors: ["#000", "#00ff00"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
			shipping: true,
		},
		{
			id: "recoW8ecgjtKx2Sj2",
			name: "leather chair",
			price: 20099,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
			colors: ["#ff0000", "#ffb900", "#00ff00"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "bedroom",
		},
		{
			id: "recEOA6qtDag1hRbU",
			name: "leather sofa",
			price: 99999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31",
			colors: ["#00ff00", "#0000ff"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
		},
		{
			id: "recoAJYUCuEKxcPSr",
			name: "modern bookshelf",
			price: 31999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
			featured: true,
			colors: ["#ffb900", "#ff0000", "#00ff00"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "kids",
		},
		{
			id: "recQ0fMd8T0Vk211E",
			name: "modern poster",
			price: 3099,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359",
			colors: ["#000"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
			shipping: true,
		},
		{
			id: "rec7CjDWKRgNQtrKe",
			name: "shelf",
			price: 30999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507",
			colors: ["#00ff00"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
		},
		{
			id: "recF0KpwlkF7e8kXO",
			name: "simple chair",
			price: 109999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8",
			colors: ["#0000ff"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
			shipping: true,
		},
		{
			id: "recs5BSVU3qQrOj4E",
			name: "sofa set",
			price: 129999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4",
			colors: ["#00ff00", "#ffb900"],
			company: "marcos",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
			shipping: true,
		},
		{
			id: "recroK1VD8qVdMP5H",
			name: "suede armchair",
			price: 15999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7",
			colors: ["#ffb900"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
		},
		{
			id: "rec7JInsuCEHgmaGe",
			name: "utopia sofa",
			price: 79999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
			featured: true,
			colors: ["#ff0000", "#00ff00"],
			company: "liddy",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "living room",
		},
		{
			id: "rec3jeKnhInKHJuz2",
			name: "vase table",
			price: 120999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
			featured: true,
			colors: ["#ff0000"],
			company: "marcos",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
		},
		{
			id: "recv2ohxljlK2FZO7",
			name: "wooden bed",
			price: 250099,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771",
			colors: ["#000", "#ffb900"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "bedroom",
		},
		{
			id: "recJIjREF3dlFi3sR",
			name: "wooden desk",
			price: 150999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e",
			colors: ["#000"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
			shipping: true,
		},
		{
			id: "recm7wC8TBVdU9oEL",
			name: "wooden desk",
			price: 40099,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
			colors: ["#0000ff", "#00ff00"],
			company: "ikea",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "office",
		},
		{
			id: "rectfNsySwAJeWDN2",
			name: "wooden table",
			price: 234999,
			image:
				"https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
			featured: true,
			colors: ["#ffb900", "#ff0000"],
			company: "caressa",
			description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
			category: "kitchen",
			shipping: true,
		},
	];
	//await Product.find({ owner: req.user.sub }).lean();
	return res.json(products);
});

router.get("/single-product", (req, res) => {
	const id = req.query.id;
	let p = products.find(i=>i.id === id);
	let product = {
		id: id,
		name: "wooden desk",
		price: 40099,
		images: [
			{
				id: "attphTeTAnYbUm6rp",
				url:
					"https://dl.airtable.com/.attachments/a92996b7e7a4cb9910fc339b5a014118/a66b3afa/0-product.jpg",
				filename: "0-product.jpg",
				size: 124724,
				type: "image/jpeg",
				thumbnails: {
					small: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/cc488041707a4a1269a56227c0ce45fa/30628b25",
						width: 54,
						height: 36,
					},
					large: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
						width: 766,
						height: 512,
					},
					full: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/f9ef644a4541fe930744c2b3c20c62ed/676b5bca",
						width: 3000,
						height: 3000,
					},
				},
			},
			{
				id: "attOsR2TGiQrBkKFS",
				url:
					"https://dl.airtable.com/.attachments/8c3762845d4b38db7ebf17b02bbadb5b/cd57d4dd/z-extra-1.jpeg",
				filename: "z-extra-1.jpeg",
				size: 102108,
				type: "image/jpeg",
				thumbnails: {
					small: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/46790cc7f3c67de10417eb81d4efe212/6b7979ff",
						width: 54,
						height: 36,
					},
					large: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/b8a9a1172c09b644ade0ec69a3c6833b/d82035f9",
						width: 768,
						height: 512,
					},
					full: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/b1d9334b825e457fb6eaa13b73b3e7b6/69fd7980",
						width: 3000,
						height: 3000,
					},
				},
			},
			{
				id: "attEcDXd9fnEao99y",
				url:
					"https://dl.airtable.com/.attachments/74ea6193cf016745cfeb9330514204c6/605b9d83/z-extra-2.jpeg",
				filename: "z-extra-2.jpeg",
				size: 84418,
				type: "image/jpeg",
				thumbnails: {
					small: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/6f935d791da78ad69bcd9367f1d3a60b/9bb69f10",
						width: 50,
						height: 36,
					},
					large: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/05c6f09d9f751d5d6ae8c6440b8871df/d2b346e4",
						width: 717,
						height: 512,
					},
					full: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/873094cfe6decb3a90899c8ad3ac92f0/dd07c763",
						width: 3000,
						height: 3000,
					},
				},
			},
			{
				id: "att5tSN2fEHkzO4nr",
				url:
					"https://dl.airtable.com/.attachments/5c2ccd609f06a36e6f45c4829709e57b/0df280ac/z-extra-3.jpeg",
				filename: "z-extra-3.jpeg",
				size: 107838,
				type: "image/jpeg",
				thumbnails: {
					small: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/845896552b141263986dfea22ac0893b/8892a66f",
						width: 55,
						height: 36,
					},
					large: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/a6d896fc55dbfd0ba40c4df60450cd78/b4b49951",
						width: 788,
						height: 512,
					},
					full: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/22640d75975587be6792066f56522a2e/2a916408",
						width: 3000,
						height: 3000,
					},
				},
			},
			{
				id: "attnAuvy9H4WkEiqj",
				url:
					"https://dl.airtable.com/.attachments/61094f141375a8816f23597abe5e811f/3d95a7fb/z-extra-4.jpeg",
				filename: "z-extra-4.jpeg",
				size: 99481,
				type: "image/jpeg",
				thumbnails: {
					small: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/3401d89411f9d33d2ead652ad2e312be/d34dc2c6",
						width: 54,
						height: 36,
					},
					large: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/a76fb4ef6b98865d835d3d28ea554466/17693f74",
						width: 768,
						height: 512,
					},
					full: {
						url:
							"https://dl.airtable.com/.attachmentThumbnails/4136e72803af3532dde831ea3405660d/cb37636b",
						width: 3000,
						height: 3000,
					},
				},
			},
		],
		description:
			"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
		colors: ["#0000ff", "#00ff00"],
		company: "ikea",
		stock: 33,
		stars: 3.2,
		reviews: 14,
		category: "office",
	};
	if(p){
		product.id = p.id;
		product.name = p.name;
		product.category = p.category;
		product.colors = p.colors;
		product.company = p.company;
		product.description = p.description;
		product.featured = p.featured;
		product.images[0].url = p.image;
		product.stock = Date.now()%15;
		product.price = p.price;
	}
	res.json(product);
});

router.post("/", async (req, res) => {
	try {
		let product = await Product.create({
			name: req.body.name,
			description: req.body.description,
			owner: req.user.sub,
		});
		res.json(product);
	} catch (error) {
		console.error(error);
	}
});

router.delete("/", async (req,res) => {
	const {id} = req.body;
	const user = req.user.sub;
	try{
		let product = await Product.findOneAndDelete({_id:id, owner: user}).lean();
		if(product){
			res.json(product);
		}
		else{
			res.json({status: "404"});
		}
	}catch(err){
		console.error(err);
		res.json({status: "error"});
	}
});

router.put("/", async (req,res) => {
	const {_id, ...rest} = req.body;
	const user = req.user.sub;
	console.log(_id, rest);
	try{
		let product = await Product.findOneAndUpdate({_id, owner: user},{
			...rest
		}).lean();
		if(product){
			res.json(product);
		}
		else{
			res.json({status: "404"});
		}
	}catch(err){
		console.error(err);
		res.json({status: "error"});
	}
});

module.exports = router;
