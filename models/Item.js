const mongoose = require("mongoose");

const Item = mongoose.Schema({
	name: String,
	checkTask: String
});

module.exports = mongoose.model("Item", Item);
