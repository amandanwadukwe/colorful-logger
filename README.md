# Colorful Logger

A lightweight npm package for logging with colorful output, providing improved readability in the console. Developers can customize log levels, colors, and other settings.

## Installation

```bash
npm install @amandanwadukwe/colorfullogger
```
## Usage

```javascript
const ColorfulLogger = require('@amandanwadukwe/colorfullogger');

// Create a new ColorfulLogger instance with optional configuration
const logger = new ColorfulLogger({
  logLevel: 'info', // Set the log level (info, warn, error)
  colors: {
    info: 'blue',    // Customize colors for each log level
    warn: 'yellow',
    error: 'red',
  },
  logFile: 'app.log',  // Log messages to a file (optional)
  timestamps: true,    // Include timestamps in log messages (optional)
});

// Log messages with different levels
logger.info('This is an informative message.');
logger.warn('Be cautious! This is a warning.');
logger.error('Houston, we have a problem!');

// Additional features
logger.setLogLevel('warn');           // Set log level dynamically
logger.enableTimestamps();            // Enable timestamps in log messages
logger.disableTimestamps();           // Disable timestamps in log messages
```

## Configuration

`logLevel`
Set the default log level. Available levels: info, warn, error. Default is info.

`colors`
Customize colors for each log level. Use valid chalk colors(https://www.npmjs.com/package/chalk). Default colors are used if not provided.

`logFile`
Specify a file to log messages. If provided, logs will be appended to this file.

`timestamps`
Enable or disable timestamps in log messages. Default is false.

## License
This project is licensed under the MIT License - see the LICENSE file for details.