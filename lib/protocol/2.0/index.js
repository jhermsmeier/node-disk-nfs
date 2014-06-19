/**
 * NFS Constructor
 * @returns {NFS}
 */
function NFS( options ) {
  
  if( !(this instanceof NFS) )
    return new NFS( options )
  
  this.version = NFS.VERSION
  
}

/**
 * NFS Program Number (?!)
 * @type {Number}
 */
NFS.PROGRAM = 100003

/**
 * NFS version
 * @type {Number}
 */
NFS.VERSION = 2

/**
 * Size in bytes of the
 * opaque file handle
 * @type {Number}
 */
NFS.FHSIZE = 32

/**
 * Size in bytes of the opaque
 * "cookie" passed by READDIR
 * @type {Number}
 */
NFS.COOKIESIZE = 4

/**
 * Maximum number of bytes
 * of a file name argument
 * @type {Number}
 */
NFS.MAXNAMELEN = 255

/**
 * Maximum number of bytes
 * of a path name argument
 * @type {Number}
 */
NFS.MAXPATHLEN = 1024

/**
 * Maximum number of bytes
 * of data in a READ or WRITE request
 * @type {Number}
 */
NFS.MAXDATA = 8192

/**
 * Procedure Enumeration
 * @type {Object}
 */
NFS.PROC = {
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
 * Status Constructor
 * @type {Function}
 */
NFS.Status = require( './status' )

/**
 * File data structures
 * @type {Object}
 */
NFS.File = require( './file' )

/**
 * DirOp Structure
 * @return {DirOp}
 */
NFS.DirOp = function DirOp() {
  this.fhandle = new NFS.File.Handle()
  this.filename = ''
}

/**
 * NFS prototype
 * @type {Object}
 */
NFS.prototype = {
  
  /**
   * NFS Constructor
   * @type {Function}
   */
  constructor: NFS,
  
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
   * and is removed in the next NFS revision
   * @param  {Object}   readargs
   *   @property {FileHandle} fhandle
   *   @property {Number} offset
   *   @property {Number} count
   *   @property {Number} totalcount
   * @param  {Function} done( error, readres )
   *   @param {Object} readres
   *     @property {NFS.FileAttributes} attributes
   *     @property {Buffer} nfsdata
   */
  read: function( readargs, done ) {
    // -> readres
  },
  
  /**
   * WRITECACHE Write to Cache
   * NOTE: To be used in the next NFS revision
   * @param  {Function} done( error )
   */
  writecache: function( done ) {
    // -> void
  },
  
  /**
   * WRITE Write to File
   * NOTE: The arguments "beginoffset" and "totalcount" are
   * ignored and are removed in the next NFS revision
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
module.exports = NFS
