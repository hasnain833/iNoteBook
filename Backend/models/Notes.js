const mongoose = require("mongoose");

const { Schema } = mongoose;

const notesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, default: "General" },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
