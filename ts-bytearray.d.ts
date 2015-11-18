declare module 'ts-bytearray' {
    class ByteArrayBase {
        private bitsPending;
        readBits(bits: number, bitBuffer?: number): number;
        writeBits(bits: number, value: number): void;
        resetBitsPending(): void;
        calculateMaxBits(signed: boolean, values: Array<number>): number;
        static BIG_ENDIAN: string;
        static LITTLE_ENDIAN: string;
        static SIZE_OF_BOOLEAN: number;
        static SIZE_OF_INT8: number;
        static SIZE_OF_INT16: number;
        static SIZE_OF_INT32: number;
        static SIZE_OF_INT64: number;
        static SIZE_OF_UINT8: number;
        static SIZE_OF_UINT16: number;
        static SIZE_OF_UINT32: number;
        static SIZE_OF_UINT64: number;
        static SIZE_OF_FLOAT32: number;
        static SIZE_OF_FLOAT64: number;
        private BUFFER_EXT_SIZE;
        array: Uint8Array;
        data: DataView;
        private _position;
        write_position: number;
        endian: string;
        constructor(buffer?: ArrayBuffer, offset?: number, length?: number);
        buffer: ArrayBuffer;
        dataView: DataView;
        phyPosition: number;
        bufferOffset: number;
        position: number;
        length: number;
        bytesAvailable: number;
        clear(): void;
        getArray(): Uint8Array;
        setArray(array: Uint8Array): void;
        setBuffer(buffer: ArrayBuffer, offset?: number, length?: number): void;
        /**
         * Reads a Boolean value from the byte stream. A single byte is read,
         * and true is returned if the byte is nonzero,
         * false otherwise.
         * @return	Returns true if the byte is nonzero, false otherwise.
        */
        readBoolean(): boolean;
        /**
         * Reads a signed byte from the byte stream.
         * The returned value is in the range -128 to 127.
         * @return	An integer between -128 and 127.
         */
        readByte(): number;
        /**
         * Reads the number of data bytes, specified by the length parameter, from the byte stream.
         * The bytes are read into the ByteArrayBase object specified by the bytes parameter,
         * and the bytes are written into the destination ByteArrayBase starting at the _position specified by offset.
         * @param	bytes	The ByteArrayBase object to read data into.
         * @param	offset	The offset (_position) in bytes at which the read data should be written.
         * @param	length	The number of bytes to read.  The default value of 0 causes all available data to be read.
         */
        readBytes(_bytes?: ByteArrayBase, offset?: number, length?: number, createNewBuffer?: boolean): ByteArrayBase;
        /**
         * Reads an IEEE 754 double-precision (64-bit) floating-point number from the byte stream.
         * @return	A double-precision (64-bit) floating-point number.
         */
        readDouble(): number;
        /**
         * Reads an IEEE 754 single-precision (32-bit) floating-point number from the byte stream.
         * @return	A single-precision (32-bit) floating-point number.
         */
        readFloat(): number;
        /**
         * Reads a signed 32-bit integer from the byte stream.
         *
         *   The returned value is in the range -2147483648 to 2147483647.
         * @return	A 32-bit signed integer between -2147483648 and 2147483647.
         */
        readInt(): number;
        /**
         * Reads a signed 64-bit integer from the byte stream.
         *
         *   The returned value is in the range −(2^63) to 2^63 − 1
         * @return	A 64-bit signed integer between −(2^63) to 2^63 − 1
         */
        readInt64(): ByteArrayBase.Int64;
        /**
         * Reads a multibyte string of specified length from the byte stream using the
         * specified character set.
         * @param	length	The number of bytes from the byte stream to read.
         * @param	charSet	The string denoting the character set to use to interpret the bytes.
         *   Possible character set strings include "shift-jis", "cn-gb",
         *   "iso-8859-1", and others.
         *   For a complete list, see Supported Character Sets.
         *   Note: If the value for the charSet parameter
         *   is not recognized by the current system, the application uses the system's default
         *   code page as the character set. For example, a value for the charSet parameter,
         *   as in myTest.readMultiByte(22, "iso-8859-01") that uses 01 instead of
         *   1 might work on your development system, but not on another system.
         *   On the other system, the application will use the system's default code page.
         * @return	UTF-8 encoded string.
         */
        readMultiByte(length: number, charSet?: string): string;
        /**
         * Reads a signed 16-bit integer from the byte stream.
         *
         *   The returned value is in the range -32768 to 32767.
         * @return	A 16-bit signed integer between -32768 and 32767.
         */
        readShort(): number;
        /**
         * Reads an unsigned byte from the byte stream.
         *
         *   The returned value is in the range 0 to 255.
         * @return	A 32-bit unsigned integer between 0 and 255.
         */
        readUnsignedByte(): number;
        /**
         * Reads an unsigned 32-bit integer from the byte stream.
         *
         *   The returned value is in the range 0 to 4294967295.
         * @return	A 32-bit unsigned integer between 0 and 4294967295.
         */
        readUnsignedInt(): number;
        /**
         * Reads a variable sized unsigned integer (VX -> 16-bit or 32-bit) from the byte stream.
         *
         *   A VX is written as a variable length 2- or 4-byte element. If the index value is less than 65,280 (0xFF00),
         *   then the index is written as an unsigned two-byte integer. Otherwise the index is written as an unsigned
         *   four byte integer with bits 24-31 set. When reading an index, if the first byte encountered is 255 (0xFF),
         *   then the four-byte form is being used and the first byte should be discarded or masked out.
         *
         *   The returned value is in the range  0 to 65279 or 0 to 2147483647.
         * @return	A VX 16-bit or 32-bit unsigned integer between 0 to 65279 or 0 and 2147483647.
         */
        readVariableSizedUnsignedInt(): number;
        /**
         * Fast read for WebGL since only Uint16 numbers are expected
         */
        readU16VX(): number;
        /**
         * Reads an unsigned 64-bit integer from the byte stream.
         *
         *   The returned value is in the range 0 to 2^64 − 1.
         * @return	A 64-bit unsigned integer between 0 and 2^64 − 1
         */
        readUnsignedInt64(): ByteArrayBase.UInt64;
        /**
         * Reads an unsigned 16-bit integer from the byte stream.
         *
         *   The returned value is in the range 0 to 65535.
         * @return	A 16-bit unsigned integer between 0 and 65535.
         */
        readUnsignedShort(): number;
        /**
         * Reads a UTF-8 string from the byte stream.  The string
         * is assumed to be prefixed with an unsigned short indicating
         * the length in bytes.
         * @return	UTF-8 encoded  string.
         */
        readUTF(): string;
        /**
         * Reads a sequence of UTF-8 bytes specified by the length
         * parameter from the byte stream and returns a string.
         * @param	length	An unsigned short indicating the length of the UTF-8 bytes.
         * @return	A string composed of the UTF-8 bytes of the specified length.
         */
        readUTFBytes(length: number): string;
        readStandardString(length: number): string;
        readStringTillNull(keepEvenByte?: boolean): string;
        /**
         * Writes a Boolean value. A single byte is written according to the value parameter,
         * either 1 if true or 0 if false.
         * @param	value	A Boolean value determining which byte is written. If the parameter is true,
         *   the method writes a 1; if false, the method writes a 0.
         */
        writeBoolean(value: boolean): void;
        /**
         * Writes a byte to the byte stream.
         * The low 8 bits of the
         * parameter are used. The high 24 bits are ignored.
         * @param	value	A 32-bit integer. The low 8 bits are written to the byte stream.
         */
        writeByte(value: number): void;
        writeUnsignedByte(value: number): void;
        /**
         * Writes a sequence of length bytes from the
         * specified byte array, bytes,
         * starting offset(zero-based index) bytes
         * into the byte stream.
         *
         *   If the length parameter is omitted, the default
         * length of 0 is used; the method writes the entire buffer starting at
         * offset.
         * If the offset parameter is also omitted, the entire buffer is
         * written. If offset or length
         * is out of range, they are clamped to the beginning and end
         * of the bytes array.
         * @param	bytes	The ByteArrayBase object.
         * @param	offset	A zero-based index indicating the _position into the array to begin writing.
         * @param	length	An unsigned integer indicating how far into the buffer to write.
         */
        writeBytes(_bytes: ByteArrayBase, offset?: number, length?: number): void;
        /**
         * Writes an IEEE 754 double-precision (64-bit) floating-point number to the byte stream.
         * @param	value	A double-precision (64-bit) floating-point number.
         */
        writeDouble(value: number): void;
        /**
         * Writes an IEEE 754 single-precision (32-bit) floating-point number to the byte stream.
         * @param	value	A single-precision (32-bit) floating-point number.
        */
        writeFloat(value: number): void;
        /**
         * Writes a 32-bit signed integer to the byte stream.
         * @param	value	An integer to write to the byte stream.
        */
        writeInt(value: number): void;
        /**
         * Writes a multibyte string to the byte stream using the specified character set.
         * @param	value	The string value to be written.
         * @param	charSet	The string denoting the character set to use. Possible character set strings
         *   include "shift-jis", "cn-gb", "iso-8859-1", and others.
         *   For a complete list, see Supported Character Sets.
         */
        writeMultiByte(value: string, charSet: string): void;
        /**
         * Writes a 16-bit integer to the byte stream. The low 16 bits of the parameter are used.
         * The high 16 bits are ignored.
         * @param	value	32-bit integer, whose low 16 bits are written to the byte stream.
         */
        writeShort(value: number): void;
        writeUnsignedShort(value: number): void;
        /**
         * Writes a 32-bit unsigned integer to the byte stream.
         * @param	value	An unsigned integer to write to the byte stream.
         */
        writeUnsignedInt(value: number): void;
        /**
         * Writes a UTF-8 string to the byte stream. The length of the UTF-8 string in bytes
         * is written first, as a 16-bit integer, followed by the bytes representing the
         * characters of the string.
         * @param	value	The string value to be written.
         */
        writeUTF(value: string): void;
        /**
         * Writes a UTF-8 string to the byte stream. Similar to the writeUTF() method,
         * but writeUTFBytes() does not prefix the string with a 16-bit length word.
         * @param	value	The string value to be written.
         */
        writeUTFBytes(value: string): void;
        toString(): string;
        /****************************/
        /****************************/
        /**
         * Writes a Uint8Array to the byte stream.
         * @param	value	The Uint8Array to be written.
         */
        writeUint8Array(_bytes: Uint8Array): void;
        /**
         * Writes a Uint16Array to the byte stream.
         * @param	value	The Uint16Array to be written.
         */
        writeUint16Array(_bytes: Uint16Array): void;
        /**
         * Writes a Uint32Array to the byte stream.
         * @param	value	The Uint32Array to be written.
         */
        writeUint32Array(_bytes: Uint32Array): void;
        /**
         * Writes a Int8Array to the byte stream.
         * @param	value	The Int8Array to be written.
         */
        writeInt8Array(_bytes: Int8Array): void;
        /**
         * Writes a Int16Array to the byte stream.
         * @param	value	The Int16Array to be written.
         */
        writeInt16Array(_bytes: Int16Array): void;
        /**
         * Writes a Int32Array to the byte stream.
         * @param	value	The Int32Array to be written.
         */
        writeInt32Array(_bytes: Int32Array): void;
        /**
         * Writes a Float32Array to the byte stream.
         * @param	value	The Float32Array to be written.
         */
        writeFloat32Array(_bytes: Float32Array): void;
        /**
         * Writes a Float64Array to the byte stream.
         * @param	value	The Float64Array to be written.
         */
        writeFloat64Array(_bytes: Float64Array): void;
        /**
         * Read a Uint8Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Uint8Array.
         */
        readUint8Array(length: number, createNewBuffer?: boolean): Uint8Array;
        /**
         * Read a Uint16Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Uint16Array.
         */
        readUint16Array(length: number, createNewBuffer?: boolean): Uint16Array;
        /**
         * Read a Uint32Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Uint32Array.
         */
        readUint32Array(length: number, createNewBuffer?: boolean): Uint32Array;
        /**
         * Read a Int8Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Int8Array.
         */
        readInt8Array(length: number, createNewBuffer?: boolean): Int8Array;
        /**
         * Read a Int16Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Int16Array.
         */
        readInt16Array(length: number, createNewBuffer?: boolean): Int16Array;
        /**
         * Read a Int32Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Int32Array.
         */
        readInt32Array(length: number, createNewBuffer?: boolean): Int32Array;
        /**
         * Read a Float32Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Float32Array.
         */
        readFloat32Array(length: number, createNewBuffer?: boolean): Float32Array;
        /**
         * Read a Float64Array from the byte stream.
         * @param	length An unsigned short indicating the length of the Float64Array.
         */
        readFloat64Array(length: number, createNewBuffer?: boolean): Float64Array;
        validate(len: number): boolean;
        compress(): void;
        uncompress(): void;
        toBuffer(): Buffer;
        fromBuffer(buff: Buffer): void;
        /**********************/
        /**********************/
        private validateBuffer(len);
        /**
         * UTF-8 Encoding/Decoding
         */
        private encodeUTF8(str);
        private decodeUTF8(data);
        private encoderError(code_point);
        private decoderError(fatal, opt_code_point?);
        private EOF_byte;
        private EOF_code_point;
        private inRange(a, min, max);
        private div(n, d);
        private stringToCodePoints(string);
    }
    module ByteArrayBase {
        class Int64 {
            low: number;
            high: number;
            _value: number;
            constructor(low?: number, high?: number);
            value(): number;
        }
        class UInt64 {
            low: number;
            high: number;
            _value: number;
            constructor(low?: number, high?: number);
            value(): number;
        }
    }
    export = ByteArrayBase;
}
