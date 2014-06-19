/**
 * Protocol Constructor
 * @returns {Protocol}
 */
function Protocol( options ) {
  
  if( !(this instanceof Protocol) )
    return new Protocol( options )
  
  this.version = Protocol.VERSION
  
}

/**
 * Protocol Program Number (?!)
 * @type {Number}
 */
Protocol.PROGRAM = 100003

/**
 * Protocol version
 * @type {Number}
 */
Protocol.VERSION = 2

/**
 * Size in bytes of the
 * opaque file handle
 * @type {Number}
 */
Protocol.FHSIZE = 32

/**
 * Size in bytes of the opaque
 * "cookie" passed by READDIR
 * @type {Number}
 */
Protocol.COOKIESIZE = 4

/**
 * Maximum number of bytes
 * of a file name argument
 * @type {Number}
 */
Protocol.MAXNAMELEN = 255

/**
 * Maximum number of bytes
 * of a path name argument
 * @type {Number}
 */
Protocol.MAXPATHLEN = 255

/**
 * Maximum number of bytes
 * of data in a READ or WRITE request
 * @type {Number}
 */
Protocol.MAXDATA = 8192

/**
 * Procedure Enumeration
 * @type {Object}
 */
Protocol.PROC = {
  NULL:       0,
  GETATTR:    1,
  SETATTR:    2,
  ROOT:       3,
  LOOKUP:     4,
  READLINK:   5,
  READ:       6,
  WRITECACHE: 7,
  WRITE:      8,
  CREATE:     9,
  REMOVE:     10,
  RENAME:     11,
  LINK:       12,
  SYMLINK:    13,
  MKDIR:      14,
  RMDIR:      15,
  READDIR:    16,
  STATFS:     17,
}

/**
 * Status Code Enumeration
 * @type {Object}
 */
Protocol.STAT = {
  OK:              0,
  ERR_PERM:        1,
  ERR_NOENT:       2,
  ERR_IO:          5,
  ERR_NXIO:        6,
  ERR_ACCES:       13,
  ERR_EXIST:       17,
  ERR_NODEV:       19,
  ERR_NOTDIR:      20,
  ERR_ISDIR:       21,
  ERR_FBIG:        27,
  ERR_NOSPC:       28,
  ERR_ROFS:        30,
  ERR_NAMETOOLONG: 63,
  ERR_NOTEMPTY:    66,
  ERR_DQUOT:       69,
  ERR_STALE:       70,
  ERR_WFLUSH:      99,
}

/**
 * DirOp Structure
 * @return {DirOp}
 */
Protocol.DirOp = function DirOp() {
  this.fhandle = new Protocol.FileHandle()
  this.filename = ''
}

/**
 * FileHandle Structure
 * NOTE: File handles can be anything
 * represented by 32 bytes (server-chosen)
 * @return {FileHandle}
 */
Protocol.FileHandle = function FileHandle() {
  this.buffer = new Buffer( Protocol.FHSIZE )
}

/**
 * FileType Enum
 * @type {Object}
 */
Protocol.FileType = {
  NON: 0,
  REG: 1,
  DIR: 2,
  BLK: 3,
  CHR: 4,
  LNK: 5,
}

/**
 * FileAttributes Structure
 * @return {FileAttributes}
 */
Protocol.FileAttributes = function FileAttributes() {
  this.type = Protocol.FileType.NON
  this.mode = null
  this.nlink = null
  this.uid = null
  this.gid = null
  this.size = null
  this.blocksize = null
  this.rdev = null
  this.blocks = null
  this.fsid = null
  this.fileid = null
  this.atime = null
  this.mtime = null
  this.ctime = null
}

/**
 * Protocol prototype
 * @type {Object}
 */
Protocol.prototype = {
  
  /**
   * Protocol Constructor
   * @type {Function}
   */
  constructor: Protocol,
  
  /**
   * NULL Do Nothing
   * @param  {Function} done( error )
   */
  noop: function( done ) {
    // -> void
  },
  
  /**
   * GETATTR Get File Attributes
   * @param  {FileHandle}   fhandle
   * @param  {Function} done( error, attrstat )
   */
  getattr: function( fhandle, done ) {
    // -> attrstat
  },
  
  /**
   * SETATTR Set File Attributes
   * @param  {Object}   sattrargs
   *   @property {FileHandle} fhandle
   *   @property {Object} attributes
   * @param  {Function} done( error, attrstat )
   */
  setattr: function( sattrargs, done ) {
    // -> attrstat
  },
  
  /**
   * ROOT Get Filesystem Root [Obsolete]
   * @param  {Function} done( error )
   */
  root: function( done ) {
    // -> void
  },
  
  /**
   * LOOKUP Look Up File Name
   * @param  {Object}   diropargs
   * @param  {Function} done( error )
   */
  lookup: function( diropargs, done ) {
    // -> diropres
  },
  
  /**
   * READLINK Read From Symbolic Link
   * @param  {File}     fhandle
   * @param  {Function} done( error, readlinkres )
   *   @param {String} path
   */
  readlink: function( fhandle, done ) {
    // -> readlinkres
  },
  
  /**
   * READ Read From File
   * NOTE: The argument "totalcount" is unused,
   * and is removed in the next protocol revision
   * @param  {Object}   readargs
   *   @property {FileHandle} fhandle
   *   @property {Number} offset
   *   @property {Number} count
   *   @property {Number} totalcount
   * @param  {Function} done( error, readres )
   *   @param {Object} readres
   *     @property {Protocol.FileAttributes} attributes
   *     @property {Buffer} nfsdata
   */
  read: function( readargs, done ) {
    // -> readres
  },
  
  /**
   * WRITECACHE Write to Cache
   * NOTE: To be used in the next protocol revision
   * @param  {Function} done( error )
   */
  writecache: function( done ) {
    // -> void
  },
  
  /**
   * WRITE Write to File
   * NOTE: The arguments "beginoffset" and "totalcount" are
   * ignored and are removed in the next protocol revision
   * @param  {Object}   writeargs
   *   @property {FileHandle} fhandle
   *   @property {Number} beginOffset
   *   @property {Number} offset
   *   @property {Number} totalcount
   *   @property {Buffer} data
   * @param  {Function} done( error, attrstat )
   */
  write: function( writeargs, done ) {
    // -> attrstat
  },
  
  /**
   * CREATE Create File
   * NOTE: This routine should pass an exclusive create flag,
   * meaning "create the file only if it is not already there"
   * @param  {Object}   createargs
   *   @property {DirOp} diropargs where
   *   @property {FileAttributes} attributes
   * @param  {Function} done( error, diropres )
   */
  create: function( createargs, done ) {
    // -> diropres
  },
  
  /**
   * REMOVE Remove File
   * @param  {DirOp}   diropargs
   * @param  {Function} done( error, stat )
   */
  remove: function( diropargs, done ) {
    // -> stat
  },
  
  /**
   * RENAME Rename File
   * NOTE: Possibly non-idempotent operation
   * @param  {Object}   renameargs
   *   @property {DirOp} from
   *   @property {DirOp} to
   * @param  {Function} done( error, stat )
   */
  rename: function( renameargs, done ) {
    // -> stat
  },
  
  /**
   * LINK Create Link to File
   * NOTE: Possibly non-idempotent operation
   * @param  {Object}   linkargs
   *   @property {FileHandle} from
   *   @property {DirOp} to
   * @param  {Function} done( error, stat )
   */
  link: function( linkargs, done ) {
    // -> stat
  },
  
  /**
   * SYMLINK Create Symbolic Link
   * NOTE: On UNIX servers the attributes are never used,
   * since symbolic links always have mode 0777
   * @param  {Object}   symlinkargs
   *   @property {DirOp} from
   *   @property {String} path to
   *   @property {FileAttributes} attributes
   * @param  {Function} done( error, stat )
   */
  symlink: function( symlinkargs, done ) {
    // -> stat
  },
  
  /**
   * MKDIR Create Directory
   * NOTE: Possibly non-idempotent operation
   * @param  {Object}   createargs
   * @param  {Function} done( error, diropres )
   */
  mkdir: function( createargs, done ) {
    // -> diropres
  },
  
  /**
   * RMDIR Remove Directory
   * NOTE: Possibly non-idempotent operation
   * @param  {DirOp}   diropargs
   * @param  {Function} done( error, stat )
   */
  rmdir: function( diropargs, done ) {
    // -> stat
  },
  
  /**
   * READDIR Read From Directory
   * @param  {Object}   readdirargs
   *   @property {FileHandle} dir
   *   @property {Cookie} cookie
   *   @property {Number} count
   * @param  {Function} done( error, readdirres )
   */
  readdir: function( readdirargs, done ) {
    // -> readdirres
  },
  
  /**
   * STATFS Get Filesystem Attributes
   * NOTE: This call does not work well if
   * a filesystem has variable size blocks
   * @param  {FileHandle}   fhandle
   * @param  {Function} done( error, statfsres )
   */
  statfs: function( fhandle, done ) {
    // -> statfsres
  },
  
}

// Exports
module.exports = Protocol
