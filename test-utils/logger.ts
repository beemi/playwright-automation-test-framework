import {createLogger, transports, format} from 'winston'

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${service} ${level}: ${message}`;
      })
  ),
});

module.exports = function (name: any) {
  return logger.child({ moduleName: name })
}


