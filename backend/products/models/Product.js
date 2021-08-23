const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
	name: { type: String, required: true, trim: true },
	price: { type: Number },
	images: [],
	description: { type: String },
	colors: [{ type: String }],
	company: { type: String },
	stock: { type: Number },
	stars: { type: Number },
	reviews: { type: Number },
	category: { type: String },
	featured: { type: Boolean },
	shipping: { type: Boolean },
});

module.exports = mongoose.model("Product", ProductSchema);
