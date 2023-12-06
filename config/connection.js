const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/social-network")

// Logs mongo queries
mongoose.set("debug", true);

module.exports = mongoose.connection;