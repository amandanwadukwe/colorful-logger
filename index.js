const fs = require('fs');

class ColorfulLogger {
  constructor(options = {}) {
    this.logLevel = options.logLevel || 'info';
    this.logLevels = ['info', 'warn', 'error'];
    this.logFile = options.logFile || null;
    this.timestamps = options.timestamps || false;

    this.setColors(options.colors || {});
  }

  setColors(colors) {
    this.colors = {
      info: colors.info || '\x1b[32m', // Green
      warn: colors.warn || '\x1b[33m', // Yellow
      error: colors.error || '\x1b[31m', // Red
      reset: '\x1b[0m', // Reset color
    };
  }

  log(level, message) {
    if (this.logLevels.includes(level) && this.logLevels.indexOf(level) >= this.logLevels.indexOf(this.logLevel)) {
      const color = this.colors[level] || '\x1b[37m'; // Default to white
      const resetColor = this.colors.reset || '\x1b[0m';
      const logMessage = `[${level.toUpperCase()}] ${this.timestamps ? `[${new Date().toISOString()}] ` : ''}${message}`;

      console.log(`${color}${logMessage}${resetColor}`);

      if (this.logFile) {
        this.writeToFile(logMessage);
      }
    }
  }

  writeToFile(logMessage) {
    fs.appendFileSync(this.logFile, logMessage + '\n', 'utf8');
  }

  info(message) {
    this.log('info', message);
  }

  warn(message) {
    this.log('warn', message);
  }

  error(message) {
    this.log('error', message);
  }

  setLogLevel(level) {
    if (this.logLevels.includes(level)) {
      this.logLevel = level;
    } else {
      throw new Error(`Invalid log level: ${level}`);
    }
  }

  enableTimestamps() {
    this.timestamps = true;
  }

  disableTimestamps() {
    this.timestamps = false;
  }
}

module.exports = ColorfulLogger;