const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017/iNoteBook"

const connectToMongo = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("Connected to MongoDB successfully") })
        .catch(err => console.error("Could not connect to MongoDB", err));
}

module.exports = connectToMongo;