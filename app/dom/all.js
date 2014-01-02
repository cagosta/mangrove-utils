define( [
    './addEventListener',
    './keyCodes',
    './ready',
    './removeEventListener'
 ], function( addEventListener, keyCodes, ready, removeEventListener ) {

    console.log('dom all')

    return {
        addEventListener: addEventListener,
        keyCodes: keyCodes,
        ready: ready,
        removeEventListener: removeEventListener
    }

} )