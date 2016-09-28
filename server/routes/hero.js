// Setup express and router
const express = require( 'express' );
const hero = express.Router();
// Mongoose
const mongoose = require('mongoose');

// Hero Model
const Hero = require( '../models/hero' );

// Set the Hero API Routes
hero.route( '/:id?' )

// GET at /hero
.get( ( req, res ) => {

	console.log( 'GET /hero' );

	// Find all heroes, send them along
	Hero.find( ( err, result ) => {

		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );

	});

} )

// POST at /hero
.post( ( req, res ) => {

	console.log( 'POST /hero' );

	// Create a new hero
	var newHero = new Hero( {

		alias: req.body.alias,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		city: req.body.city,
		power_name: req.body.power_name

	} );

	// Save the new hero
	newHero.save( ( err, result ) => {

		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );

	} );

} )
// DELETE at /hero
.delete( ( req, res ) => {

	console.log( 'DELETE /hero' );

	Hero.find( { _id: req.params.id }).remove( ( err, result ) => {

		if( err )
			return console.log( 'Mongoose Err:', err );

		res.send( result );

	} );

} );

module.exports = hero;