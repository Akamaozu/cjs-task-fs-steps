var fs = require('fs'),
    path = require('path'),
    path_to_steps_dir = path.join( __dirname, '/steps' ),
    steps = fs.readdirSync( path_to_steps_dir ),
    api = {};

steps.forEach( function( path_to_step ){
  var api_key = path_to_step = path_to_step.replace( '.js', '' );
  api[ api_key ] = require( './steps/'+ path_to_step );
});

module.exports = api;