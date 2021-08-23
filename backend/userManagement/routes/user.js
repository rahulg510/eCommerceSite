const router = require("express").Router();
const User = require("../models/User");
// const redisClient = require('../config/redis');

// const redisMiddleware = (req,res,next) => {
// 	const id = req.user.sub;
// 	redisClient.get(`${id}-cart`, (err,data)=>{
// 		if(err || data === null){
// 			next();
// 		}
// 		else{
// 			let cart = JSON.parse(data);
// 			res.json(cart).status(200);
// 		}

// 	})
// }

router.get("/", async (req, res) => {
	//await Product.find({ owner: req.user.sub }).lean();
	return res.json([]);
});

router.get("/cart" ,async (req, res) => {
	try {
		let id = req.user.sub;
		let user = await User.findOneAndUpdate(
			{ id },
			{},
			{ upsert: true, new: true, setDefaultsOnInsert: true }
		).lean();
		// redisClient.setex(`${id}-cart`, 3600, JSON.stringify(user.cart));
		res.json(user.cart).status(200);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
});

router.post("/cart", async (req, res) => {
	try {
		const id = req.user.sub;
		let cart = req.body.cart;
		let user = await User.findOneAndUpdate(
			{ id },
			{ cart },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		).lean();
		// redisClient.setex(`${id}-cart`, 3600, JSON.stringify(user.cart));
		res.json(user.cart).status(201);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
});

router.get("/orders", async (req, res) => {
	try {
		let id = req.user.sub;
		let user = await User.findOneAndUpdate(
			{ id },
			{},
			{ upsert: true, new: true, setDefaultsOnInsert: true }
		).lean();
		res.json(user.orders).status(200);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
});

router.post("/orders", async (req, res) => {
	try {
		const id = req.user.sub;
		let order = req.body.order;
		let user = await User.findOneAndUpdate(
			{ id },
			{ $push: { orders: order } },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		).lean();
		res.json(user.orders).status(201);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
});

module.exports = router;
