const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export class Base32 {
  constructor() {
    this.base32 = this;
    this.Base32 = Base32;
  }

  encode(buffer) {
    const bytes = new Uint8Array(buffer);
    let bits = '';
    for (let i = 0; i < bytes.length; i++) {
      bits += bytes[i].toString(2).padStart(8, '0');
    }

    const chunks = bits.match(/.{1,5}/g) || [];
    let output = chunks.map(chunk => base32Chars[parseInt(chunk.padEnd(5, '0'), 2)]).join('');

    // RFC4648 padding: 出力長を8の倍数に揃える
    while (output.length % 8 !== 0) {
      output += '=';
    }
    return output;
  }

  decode(encoded, type) {
    const base32Lookup = {};
    for (let i = 0; i < base32Chars.length; i++) {
      base32Lookup[base32Chars[i]] = i;
    }

    const clean = encoded.replace(/=+$/, '').toUpperCase();
    let bits = '';
    for (let i = 0; i < clean.length; i++) {
      const val = base32Lookup[clean[i]];
      if (val === undefined) {
        throw new Error(`Invalid character in Base32 string: ${clean[i]}`);
      }
      bits += val.toString(2).padStart(5, '0');
    }

    const byteChunks = bits.match(/.{1,8}/g) || [];
    const bytes = new Uint8Array(byteChunks.filter(c => c.length === 8).map(c => parseInt(c, 2)));

    if (type === 'utf-8') {
      return new TextDecoder('utf-8').decode(bytes);
    }
    return bytes;
  }
}

export const base32 = new Base32();
export default {
  Base32,
  base32,
};
