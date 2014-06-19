/**
 * Server constructor
 * @returns {Server}
 */
function Server( options ) {
  
  if( !(this instanceof Server) )
    return new Server( options )
  
}

/**
 * Server prototype
 * @type {Object}
 */
Server.prototype = {
  
  constructor: Server,
  
}

// Exports
module.exports = Server
