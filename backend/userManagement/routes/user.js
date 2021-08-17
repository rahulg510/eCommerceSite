const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
	//await Product.find({ owner: req.user.sub }).lean();
	return res.json([]);
});

router.get("/cart", async (req, res) => {
	try{
		let id = req.user.sub;
		let user = await User.findOneAndUpdate({id}, {}, {upsert:true, new: true, setDefaultsOnInsert: true}).lean();
		res.json(user.cart);
	}
	catch(error){
		console.error(error);
		res.status(404);
	}
});

router.post("/cart", async (req, res) => {
	try {
		const id = req.user.sub;
		let cart = req.body.cart;
		let user = await User.findOneAndUpdate({id}, {cart}, {new: true, upsert: true, setDefaultsOnInsert: true} ).lean();
		res.json(user.cart);
	} catch (error) {
		console.error(error);
		res.status(404);
	}
});

router.delete("/", async (req, res) => {
	const { id } = req.body;
	const user = req.user.sub;
	try {
		let product = await Product.findOneAndDelete({
			_id: id,
			owner: user,
		}).lean();
		if (product) {
			res.json(product);
		} else {
			res.json({ status: "404" });
		}
	} catch (err) {
		console.error(err);
		res.json({ status: "error" });
	}
});

router.put("/", async (req, res) => {
	const { _id, ...rest } = req.body;
	const user = req.user.sub;
	console.log(_id, rest);
	try {
		let product = await Product.findOneAndUpdate(
			{ _id, owner: user },
			{
				...rest,
			}
		).lean();
		if (product) {
			res.json(product);
		} else {
			res.json({ status: "404" });
		}
	} catch (err) {
		console.error(err);
		res.json({ status: "error" });
	}
});

module.exports = router;
