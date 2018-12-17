const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const assessmentSchema = new Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, unique: false, required: true},
	name: { type: String, unique: false, required: true },
	teamMembers: Schema.Types.Mixed, // Schema.Types.Mixed is lazy. Look into other solutions.
	proximity: { type: String, unique: false, required: true},
	bureaucracy: { type: String, unique: false, required: true},
	cultureQuestions: Schema.Types.Mixed,
	methods: Schema.Types.Mixed,
	legacy: Schema.Types.Mixed,
    architecture: { type: String, unique: false, required: true },
    reusability: { type: String, unique: false, required: true },
    futureProofing: { type: String, unique: false, required: true }
})

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment;