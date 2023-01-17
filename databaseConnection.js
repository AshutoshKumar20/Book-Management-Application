const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection Error: "));
    db.once("open", function () {
        console.log("Db Connected: ...");
    });
}

module.exports = DbConnection;