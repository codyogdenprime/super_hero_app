// Require Mongoose
const mongoose = require( 'mongoose' );

// Setup new schema
const Schema = mongoose.Schema;

// Setup assignment schema
const hero = new Schema({
	alias: { type: String, required: true },
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	city: { type: String, required: true },
	power_name: ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity']
});

// Create a mongo model
const Hero = mongoose.model( 'heroes', hero );

// Send that back
module.exports = Hero;

