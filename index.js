const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

class Base32 {
  encode(buffer) {
    const binaryString = Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(2).padStart(8, '0'))
    .join('');
    const bitsPerChar = 5;
    const length = Math.ceil(binaryString.length / bitsPerChar);
    const padding = [1, 2, 3].includes(binaryString.length % bitsPerChar) ? '=' : '';
    const paddedBinaryString = binaryString.padEnd(length * bitsPerChar, '0');
    const chunks = paddedBinaryString.match(/.{1,5}/g);
    const strArr = chunks.map(chunk => base32Chars[parseInt(chunk, 2)]);
    if (padding) {
      strArr.push(padding);
    }
    return strArr.join('');
  }

  decode(encoded) {
    const base32Lookup = {};
    for (let i = 0; i < base32Chars.length; i++) {
      base32Lookup[base32Chars[i]] = i;
    }
    const base32String = encoded.replace(/=+$/, '').toUpperCase();
    const bitsPerChar = 5;
    let binaryString = '';
    for (let i = 0; i < base32String.length; i++) {
      const char = base32String[i];
      if (base32Lookup[char] === undefined) {
        throw new Error(`Invalid character in Base32 string: ${char}`);
      }
      const binaryValue = base32Lookup[char].toString(2).padStart(bitsPerChar, '0');
      binaryString += binaryValue;
    }
    const chunks = binaryString.match(/.{1,8}/g).filter(v => v.length === 8);
    return new Uint8Array(chunks.map(chunk => parseInt(chunk, 2)));
  }
}

if (typeof window === 'object') {
  window.Base32 = Base32;
} else {
  module.exports = { Base32 };
}
