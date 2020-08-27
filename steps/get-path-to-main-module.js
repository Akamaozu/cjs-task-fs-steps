var path = require('path');

module.exports = function( task ){

  task.step( 'get main module path', function(){
    var dir_separator = path.sep,
        main_module_filepath = process.mainModule.filename.split( dir_separator ),
        main_module_dir = main_module_filepath.splice( 0, main_module_filepath.length - 1 ).join( dir_separator );

    task.set( 'path-to-main-module', main_module_dir );
    task.next();
  });
}