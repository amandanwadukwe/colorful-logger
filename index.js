import chalk from 'chalk';
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
      info: colors.info || 'green',
      warn: colors.warn || 'yellow',
      error: colors.error || 'red',
    };
  }

  log(level, message) {
    if (this.logLevels.includes(level) && this.logLevels.indexOf(level) >= this.logLevels.indexOf(this.logLevel)) {
      const color = this.colors[level] || 'white';
      const logMessage = `[${level.toUpperCase()}] ${this.timestamps ? `[${new Date().toISOString()}] ` : ''}${message}`;

      console.log(chalk[color](logMessage));

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
