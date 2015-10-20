'use strict'

const expect = require('chai').expect
const nonce = require('..')

describe('#nonce', function () {
  it('should return a promise, which yields a string with a specified length', function (done) {
    let len = 17
    nonce(len)
      .then(function (chars) {
        expect(chars.length).to.equal(len)
        done()
      })
  })

  it('should default to a length of 32 when no length is specified', function (done) {
    nonce()
      .then(function (chars) {
        expect(chars.length).to.equal(32)
        done()
      })
  })

  it('should call itself recursively if not enough random bytes were generated', function (done) {
    let len = 32
    nonce(len, 2)
      .then(function (chars) {
        expect(chars.length).to.equal(len)
        done()
      })
  })

  it('should strip non-alphanumerical characters', function () {
    expect(nonce._sanitize('==/=/==14oz', 4)).to.equal('14oz')
  })
})
