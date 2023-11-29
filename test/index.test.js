const { Base32 } = require('..');

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
];

describe('test base32', () => {
  describe('step1', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[0];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[1];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[2];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[3];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[4];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[5];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[6];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });

  describe('step2', () => {
    it('toStrictEqual prompt', async () => {
      const data = list[7];
      const base32 = new Base32();
      const encoded = base32.encode(data);
      const decodedBuffer = base32.decode(encoded);
      const res = Array.from(decodedBuffer);
      logger.info(encoded, JSON.stringify(res));
      expect(res).toStrictEqual(data);
    });
  });
});
