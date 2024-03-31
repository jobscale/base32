# base32

## Examples

```
const { Base32 } = require('@jobscale/base32');

const logger = console;
const list = [
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
];
const match = [
  'AE=',
  'AEBA=',
  'AEBAG',
  'AEBAGBA=',
  'AEBAGBAF',
  'AEBAGBAFAY=',
  'AEBAGBAFAYDQ=',
  'AEBAGBAFAYDQQ',
  'AEBAGBAFAYDQQCI=',
  'AEBAGBAFAYDQQCIK',
  'AEBAGBAFAYDQQCIKBM=',
];

describe('test base32', () => {
  for (const [index, value] of list.entries()) {
    const data = {};
    describe(`test list base32 ${index}`, () => {
      it('encoded array toBe prompt', async () => {
        const base32 = new Base32();
        data.encoded = base32.encode(value);
        expect(data.encoded).toBe(match[index]);
      });

      it('decode toStrictEqual prompt', async () => {
        const base32 = new Base32();
        data.binary = base32.decode(data.encoded);
        data.decoded = Array.from(data.binary);
        logger.info(data.encoded, JSON.stringify(data.decoded));
        expect(data.decoded).toStrictEqual(value);
      });

      it('binary toBe prompt', async () => {
        const base32 = new Base32();
        data.encoded = base32.encode(data.binary);
        expect(data.encoded).toBe(match[index]);
      });
    });
  }
});
```
