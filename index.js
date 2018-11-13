'use strict';
const opn = require('opn');
const execSync = require('child_process').execSync;

function getChromeAppName() {
  switch (process.platform) {
    case "darwin":
      return "google chrome";
    case "win32":
      return "chrome";
    default:
      return "google-chrome";
  }
}

module.exports = (url, args, wait) => {
  if (process.platform === 'darwin') {
    try {
      // Close duplicate tabs in macOS
      execSync('osascript closeChromeTab.applescript ' + url, {
        cwd: __dirname,
        stdio: 'ignore',
      });
    } catch (err) {
      // Ignore errors.
    }
  }

  const appName = getChromeAppName();
  const app = args ? [appName, ...args] : appName;

  return opn(url, {app, wait})
}
