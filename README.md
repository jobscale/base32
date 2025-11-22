# base32

## Examples

```
const logger = console;
const list = [
  { blob: [0], encoded: 'AA======' },
  { blob: [1, 0], encoded: 'AEAA====' },
  { blob: [1, 2, 0], encoded: 'AEBAA===' },
  { blob: [1, 2, 3, 0], encoded: 'AEBAGAA=' },
  { blob: [1, 2, 3, 4, 0], encoded: 'AEBAGBAA' },
  { blob: [1, 2, 3, 4, 5, 0], encoded: 'AEBAGBAFAA======' },
  { blob: [1, 2, 3, 4, 5, 6, 0], encoded: 'AEBAGBAFAYAA====' },
  { blob: [1, 2, 3, 4, 5, 6, 7, 0], encoded: 'AEBAGBAFAYDQA===' },
  { blob: [1, 2, 3, 4, 5, 6, 7, 8, 0], encoded: 'AEBAGBAFAYDQQAA=' },
  { blob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], encoded: 'AEBAGBAFAYDQQCIA' },
  { blob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0], encoded: 'AEBAGBAFAYDQQCIKAA======' },
  { blob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0], encoded: 'AEBAGBAFAYDQQCIKBMAA====' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0], encoded: 'AEBAGBAFAYAAAAAAAAAAA===' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0], encoded: 'AEBAGBAFAYAAAAAAAAAA====' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0], encoded: 'AEBAGBAFAYAAAAAAAA======' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0, 0, 0], encoded: 'AEBAGBAFAYAAAAAA' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0, 0], encoded: 'AEBAGBAFAYAAAAA=' },
  { blob: [1, 2, 3, 4, 5, 6, 0, 0], encoded: 'AEBAGBAFAYAAA===' },
];

describe('test base32', () => {
  const data = {};
  for (const { blob, encoded } of list) {
    describe(`test list base32 ${blob.length}`, () => {
      it('encoded array toBe prompt', async () => {
        const base32 = new Base32();
        data.encoded = base32.encode(blob);
        expect(data.encoded).toBe(encoded);
      });

      it('decode toStrictEqual prompt', async () => {
        const base32 = new Base32();
        data.binary = base32.decode(data.encoded);
        data.decoded = Array.from(data.binary);
        logger.info(data.encoded, JSON.stringify(data.decoded));
        expect(data.decoded).toStrictEqual(blob);
      });

      it('binary toBe prompt', async () => {
        const base32 = new Base32();
        data.encoded = base32.encode(data.binary);
        expect(data.encoded).toBe(encoded);
      });
    });
  }
});
```
