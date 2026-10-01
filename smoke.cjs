const main = async () => {
  const { createLogger } = await import('@jobscale/create-logger');
  const { base32 } = await import('./index.js');

  const logger = createLogger({ level: 'info', timestamp: true });

  const encoded = base32.encode('@jobscale/base32');
  const decoded = base32.decode(encoded);
  logger.info({
    encoded,
    decoded,
    decodedText: Buffer.from(decoded).toString('utf-8'),
  });
};

main();
