var ts = require('./lib/ts-bytearray');
module.exports = {
	ByteArray: ts.nid.utils.ByteArray,
	UInt64: ts.ctypes.UInt64,
	Int64: ts.ctypes.Int64,
	LzmaDecoder: ts.nid.utils.LzmaDecoder,
	RangeDecoder: ts.nid.utils.RangeDecoder,
	BitTreeDecoder: ts.nid.utils.BitTreeDecoder,
	MEMORY: ts.nid.utils.MEMORY,
	LenDecoder: ts.nid.utils.LenDecoder,
	OutWindow: ts.nid.utils.OutWindow,
	LZMA: ts.nid.utils.LZMA,
	LZMAHelper: ts.nid.utils.LZMAHelper,
	CompressionAlgorithm: ts.nid.utils.CompressionAlgorithm
}