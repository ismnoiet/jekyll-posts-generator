const assert = require('assert');
const utilities = require('../others/utilities.js');

describe('Test utilities',function(){
	it('toFrontMatterBlock',function(){
		// assert.equal(utilities.toFrontMatterBlock)
	});

	it('convert string to camelCase',function(){
		assert.equal(utilities.toCamelCase(''),'','empty string should return empty string');
		assert.equal(utilities.toCamelCase(true),'','boolean should return empty string');
		assert.equal(utilities.toCamelCase([]),'','array should return empty string');
		assert.equal(utilities.toCamelCase({}),'','object should return empty string');
		assert.equal(utilities.toCamelCase(undefined),'','object should return empty string');
		assert.equal(utilities.toCamelCase(null),'','object should return empty string');
		// assert.equal('','',' string should return empty string');

	})
});
