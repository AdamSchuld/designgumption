module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js' : ['_/components/js/*.js']
                } // files
            } // my_target
        }, //uglify
        watch: {
            files : ['_/components/js/*.js'],
            tasks : ['uglify']
        }
    }) //initConfig
    grunt.registerTask('default', 'watch');

} //exports
