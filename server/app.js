// Load Path
const path = require( 'path' );
// Load express
const express = require( 'express' );
const app = express();
// Load bodyParser
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );
// Set Port
const port = process.env.PORT || 4242;

// Require and setup Mongoose
const mongoURI = 'mongodb://localhost:27017/co-heroes';
const mongoose = require('mongoose');
const MongoDB = mongoose.connect( mongoURI ).connection;

// If there is an error connecting, let us know
MongoDB.on( 'error', ( err ) => {
    console.log( 'mongodb connection error:', err);
});

// Open the connection and start the server listening!
MongoDB.once( 'open', () => {
    console.log( 'mongodb is open!' );
    app.listen( port, () => {
    	console.log( 'App is running at http://localhost:' + port + '/' );
    } );
} );

// Make bower components public
app.use( express.static( './bower_components' ) );

// Make public, er... public
app.use( express.static( './public' ) );

// Server index.html
const index = require( __dirname + '/routes/index' );
app.use( '/', index );

// Hero API Router
const hero = require( __dirname + '/routes/hero' );
app.use( '/hero', hero );