'use strict';
const chromeOpn = require('./index')

function testChromeOpn () {
  chromeOpn('https://www.google.com')
  chromeOpn('https://www.google.com')
}

testChromeOpn()
