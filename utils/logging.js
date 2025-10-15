const winston = require('winston');

/**
 * Logger instance configured with Winston.
 * 
 * On Vercel, writing to files is not supported (read-only filesystem),
 * so we only use the Console transport.
 */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

module.exports = logger;
