define( [
    'mangrove-utils/mangrove-utils'
 ], function( mangroveUtils ) {

    describe( 'mangrove-utils/mangrove-utils', function() {

        it( 'should load without blowing', function() {

            expect( mangroveUtils ).to.exist

        } )

        it( 'should be an object of helpers', function() {

            expect( mangroveUtils.extend ).to.exist
            expect( mangroveUtils.merge ).to.exist

        } )

        describe( 'extend', function() {

            var extend = require( 'mangrove-utils/extend' )

            it( 'should extend correctly', function() {

                expect( extend( {
                    yo: 'mother'
                }, { 
                    yo: 'daugther'
                } ).yo ).to.equal( 'daugther' )

            } )

        } )

        describe( 'dom', function() {


            if ( typeof window === 'undefined' )
                return

            it( 'should load without blowing', function( done ) {

                var domUtils = require( [ 'mangrove-utils/dom/all' ], function( dom ) {

                    expect( dom ).to.exist
                    expect( dom.addEventListener ).to.exist
                    done()
                    
                } )

            } )

        } )

    } )

} )