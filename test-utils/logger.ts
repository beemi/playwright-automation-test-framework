import { createLogger, format, transports } from 'winston'

const logger = createLogger({
    level: 'info',
    transports: [new transports.Console()],

    format: format.combine(
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.printf(({ level, message, moduleName, timestamp }) => {
            return `${timestamp} [${moduleName}] ${level}: ${message}`
        })
    ),
})

module.exports = function (name: any) {
    return logger.child({ moduleName: name })
}
