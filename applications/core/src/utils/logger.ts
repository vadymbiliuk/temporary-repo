import path from 'path';
import winston from 'winston';

const configureLogger = () => {
  const CONFIGURATION = winston.createLogger ({
    level: 'info',
    format: winston.format.json (),
    transports:
      process.env.NODE_ENV === 'production'
        ? [
            new winston.transports.File ({
              filename: path.join (__dirname, '', '', 'logs/error.log'),
              level: 'error',
            }),
            new winston.transports.File ({
              filename: path.join (__dirname, '', '', 'logs/combined.log'),
            }),
          ]
        : [],
  });

  if (process.env.NODE_ENV !== 'production') {
    CONFIGURATION.add (
      new winston.transports.Console ({
        format: winston.format.simple (),
      }),
    );
  }

  return CONFIGURATION;
};

export const logger = configureLogger ();
