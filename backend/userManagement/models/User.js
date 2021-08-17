const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		id: { type: String, required: true, trim: true },
		orders: {
			type: [{}],
		},
		cart:{
			type: [{}],
		}
	}
);

module.exports = mongoose.model("User", UserSchema);
