var greet = require('../greet');
var chai = require('chai');
var expect = chai.expect;

describe('greet', function(){
	it('should return your name', function(){
		expect(greet('bob')).to.eql('hello bob')
	})
	it('should return your true nature if a name is not given', function(){
		expect(greet()).to.eql('hello anonymous coward')
	})
})