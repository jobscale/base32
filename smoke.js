import { createLogger } from '@jobscale/create-logger';
import { base32 } from './index.js';

const logger = createLogger({ level: 'info', timestamp: true });

const encoded = base32.encode('@jobscale/base32');
const decoded = base32.decode(encoded);
logger.info({
  encoded,
  decoded,
  decodedText: Buffer.from(decoded).toString('utf-8'),
});
