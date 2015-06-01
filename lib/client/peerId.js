"use strict";

var config = include("config");

module.exports = {
	generate: function() {
		return "-" + config.clientCode + config.version + "-" + _getRandomNumbers(12);
	}
};
	
function _getRandomNumbers(length) {
	var random = _getRandomString();
	while (random.length < length)
		random += _getRandomString();
	return random.substring(0, length);
}
	
function _getRandomString() {
	return Math.random().toString().replace("0.", "");
}