'use strict';
const opn = require('opn');

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
  const appName = getChromeAppName();
  const app = args ? [appName, ...args] : appName;

  return opn(url, {app, wait})
}
