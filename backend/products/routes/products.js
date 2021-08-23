const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
	try {
		let products = await Product.find(
			{},
			{ images: { $slice: [0, 1] } }
		).lean();
		return res.json(products).status(200);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
});

router.get("/single-product", async (req, res) => {
	try {
		const id = req.query.id;
		let product = await Product.findById(id).lean();
		res.json(product).status(200);
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
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
