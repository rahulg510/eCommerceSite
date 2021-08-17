const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		description: { type: String },
	}
);

module.exports = mongoose.model("Product", ProductSchema);
