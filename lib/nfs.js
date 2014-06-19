/**
 * NFS constructor
 * @returns {NFS}
 */
function NFS( options ) {
  
  if( !(this instanceof NFS) )
    return new NFS( options )
  
}

// NFS.Server = require( './server' )
// NFS.Client = require( './client' )

/**
 * UDP port number
 * @type {Number}
 */
NFS.UDP = 2049

NFS.Protocol = {
  2.0: require( './protocol/version-2.0' ),
  // 3.0: require( './protocol/version-3.0' ),
  // 4.0: require( './protocol/version-4.0' ),
  // 4.1: require( './protocol/version-4.1' ),
}

/**
 * NFS prototype
 * @type {Object}
 */
NFS.prototype = {
  
  constructor: NFS,
  
}

// Exports
module.exports = NFS
