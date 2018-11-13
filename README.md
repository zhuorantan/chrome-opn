# chrome-opn

A wrapper of [opn](https://github.com/sindresorhus/opn). Opens URLs in Chrome.

On macOS, an Applescript is used to close duplicate tabs.

## Install

```
npm install chrome-opn --save
```

## Usage

```
const chromeOpn = require('chromeOpn');

// Opens the url in Chrome
chromeOpn('http://www.google.com');

// Specify the Chrome arguments
chromeOpn('http://www.google.com', ['--incognito']);

// Don't wait the opening of Chrome and fulfill the promise immediately
chromeOpn('http://www.google.com', null, false);
```

## License

[MIT](https://github.com/JeromeTan1997/chrome-opn/blob/master/LICENSE)
