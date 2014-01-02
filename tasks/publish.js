module.exports = function( grunt ) {



    grunt.registerTask( 'publish', function() {


        grunt.config.set( 'exec.bower_register', {
            command: 'bower register mangrove-utils git://github.com/cagosta/mangrove-utils'
        } )

        grunt.config.set( 'exec.npm_publish', {
            command: 'npm publish'
        } )

        grunt.task.run( [ 'build', 'test', 'exec:bower_register', 'exec:npm_publish' ] )

    } )


}