'use strict'
const Promise = require('bluebird')

const crypto = Promise.promisifyAll(require('crypto'))

exports = module.exports = nonce
exports._sanitize = sanitize

/**
 * Generate a random alphanumerical string with a specified length.
 *
 * @param {Number} [len=32]
 * @param {Number} [_numberOfBytes] Only here for testing purposes.
 * @return {Promise}
 */
function nonce(len, _numberOfBytes) {
  if (len == null) len = 32
  if (_numberOfBytes == null) _numberOfBytes = len

  // Strictly speaking, if we want a nonce with length len, we only need
  // to generate 3/4 that many bytes. However, since we don't actually
  // want base64 but base62, we'd also have to compensate for that to
  // avoid additional runs. In the end, it's easier to just generate a
  // little too much random data.
  return crypto.randomBytesAsync(_numberOfBytes)
    .then((buf) => sanitize(buf.toString('base64'), len))
}

/**
 * Strip invalid characters from the nonce.
 *
 * @param {String} chars
 * @param {Number} len
 * @return {Promise|String}
 */
function sanitize(chars, len) {
  chars = chars.replace(/[^A-Za-z0-9]/g, '')

  let diff = len - chars.length
  if (diff <= 0) {
    // Since this function is only ever called from within a .then, we
    // don't need to return a promise. We may also return a value.
    return chars.substring(0, len)
  }

  return nonce(diff)
    .then((newChars) => chars + newChars)
}
