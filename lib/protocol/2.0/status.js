
const NAME = {
   0: 'OK',
   1: 'ERR_PERM',
   2: 'ERR_NOENT',
   5: 'ERR_IO',
   6: 'ERR_NXIO',
  13: 'ERR_ACCES',
  17: 'ERR_EXIST',
  19: 'ERR_NODEV',
  20: 'ERR_NOTDIR',
  21: 'ERR_ISDIR',
  27: 'ERR_FBIG',
  28: 'ERR_NOSPC',
  30: 'ERR_ROFS',
  63: 'ERR_NAMETOOLONG',
  66: 'ERR_NOTEMPTY',
  69: 'ERR_DQUOT',
  70: 'ERR_STALE',
  99: 'ERR_WFLUSH',
}

const MESSAGE = {
   0: 'OK',
   1: 'Not owner',
   2: 'No such file or directory',
   5: 'IO Error',
   6: 'No such device or address',
  13: 'Permission denied',
  17: 'File exists',
  19: 'No such device',
  20: 'Not a directory',
  21: 'Is a directory',
  27: 'File too large',
  28: 'No space left on device',
  30: 'Read-only filesystem',
  63: 'File name too long',
  66: 'Directory not empty',
  69: 'Disk quota exceeded',
  70: 'Invalid file handle',
  99: 'Cache flushed',
}

/**
 * Status constructor
 * @returns {Status}
 */
function Status( code ) {
  
  if( !(this instanceof Status) )
    return new Status( code )
  
  this.code = code || 0
  this.name = NAME[ this.code ] || 'UNKNOWN'
  this.message = MESSAGE[ this.code ] || ''
  
}

// NFS 2.0 Status codes
Status.OK = 0
Status.ERR_PERM = 1
Status.ERR_NOENT = 2
Status.ERR_IO = 5
Status.ERR_NXIO = 6
Status.ERR_ACCES = 13
Status.ERR_EXIST = 17
Status.ERR_NODEV = 19
Status.ERR_NOTDIR = 20
Status.ERR_ISDIR = 21
Status.ERR_FBIG = 27
Status.ERR_NOSPC = 28
Status.ERR_ROFS = 30
Status.ERR_NAMETOOLONG = 63
Status.ERR_NOTEMPTY = 66
Status.ERR_DQUOT = 69
Status.ERR_STALE = 70
Status.ERR_WFLUSH = 99

/**
 * Status prototype
 * @type {Object}
 */
Status.prototype = {
  
  constructor: Status,
  
  toString: function() {
    return this.name +
      '(' + this.code + '): ' +
      this.message
  }
  
}

// Exports
module.exports = Status
