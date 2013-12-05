module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
  			combine: {
    			files: {
      				'assets/css/all.min.css': [
      					'assets/css/normalize.css', 
      					'assets/css/font-awesome.min.css',
      					'assets/css/syntax.css',
      					'assets/css/site.css'
      				]
    			}
  			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', 'cssmin');
}