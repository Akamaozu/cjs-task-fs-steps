var fs = require('fs'),
    steps = fs.readdirSync( './steps' ),
    api = {};

steps.forEach( function( path_to_step ){
  var api_key = path_to_step = path_to_step.replace( '.js', '' );
  api[ api_key ] = require( './steps/'+ path_to_step );
});

module.exports = api;