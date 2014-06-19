var File = module.exports

// Non-file
File.NON = 0
// Regular file
File.REG = 1
// Directory
File.DIR = 2
// Block-special device
File.BLK = 3
// Character-special device
File.CHR = 4
// Synmbolic link
File.LNK = 5

/**
 * File Attributes Structure
 * NOTE: Value of (-1) indicates a field that should be ignored
 * @return {FileAttributes}
 */
File.Attributes = function FileAttributes() {
  
  if( !(this instanceof File.Attributes) )
    return new File.Attributes()
  
  // ftype
  this.type = -1
  // unsigned int32
  this.mode = -1
  this.nlink = -1
  this.uid = -1
  this.gid = -1
  this.size = -1
  this.blocksize = -1
  this.rdev = -1
  this.blocks = -1
  this.fsid = -1
  this.fileid = -1
  // timeval
  this.atime = -1
  this.mtime = -1
  this.ctime = -1
  
}

/**
 * FileHandle Structure
 * NOTE: File handles can be anything
 * represented by 32 bytes (server-chosen)
 * @return {FileHandle}
 */
File.Handle = function FileHandle( fh ) {
  
  if( !(this instanceof File.Handle) )
    return new File.Handle( fh )
  
  this.buffer = fh
  // this.buffer = new Buffer( NFS.FHSIZE )
  // this.buffer.fill( 0 )
  
}
