# node-nonce

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Generate a random alphanumerical string with a specified length.

##  Installation
`npm install @rdcl/nonce`

## Usage
```javascript
const nonce = require('@rdcl/nonce')
nonce(27).then(function (nonce) {
  // ...
})
```

## Tests
`npm test`


[npm-image]: https://img.shields.io/npm/v/@rdcl/nonce.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rdcl/nonce
[travis-image]: https://img.shields.io/travis/rudiculous/node-nonce/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/rudiculous/node-nonce
[coveralls-image]: https://img.shields.io/coveralls/rudiculous/node-nonce/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/rudiculous/node-nonce?branch=master
