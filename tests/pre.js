var assert = require('assert');
var package = require('../package.json');


describe('Inspire Me', function() {
  describe('Author Verification', function() {
    it('should return name of author', function() {
      assert.equal(package.author, "Vinit Shahdeo <vinitshahdeo@gmail.com>");
    });
  });
  describe('Git URL Verification', function() {
    it('should return GitHub repository link', function() {
      assert.equal(package.repository.url, "git+https://github.com/vinitshahdeo/InspireMe.git");
    });
  });
  describe('License Verification', function() {
    it('should return license contained', function() {
      assert.equal(package.license, "MIT");
    });
  });
});