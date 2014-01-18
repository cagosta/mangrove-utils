define( function() {

    return function( parent, son ) {

        var sonRatio = son[ 1 ] / son[ 0 ],
            parentRatio = parent[ 1 ] / parent[ 0 ],
            fitWidth = ( sonRatio >= parentRatio ),
            r,
            nwidth,
            nheight;

        if ( fitWidth )
            return [  parent[ 0 ], parent[ 0 ] * son[ 1 ] / son[ 0 ] ]
        else
            return [ parent[ 1 ] * son[ 0 ] / son[ 1 ] , parent[ 1 ] ]

    }

} )