var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var lib = require('../lib/index.js');

describe('keystorage-lib tests', function(){
  it('should be JSON', function(){
    expect(lib.get('88a23fc8-09fa-4cd5-a3a4-0d4f3a496602')
      .end((err, res) => res.should.be.json));
  })
})
