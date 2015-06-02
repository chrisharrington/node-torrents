"use strict";

var util = require("util"),
	Base = require("./base");

var Start = function(params) {
	Base.call(this, params);
	
	this._params.event = "started";
};

util.inherits(Start, Base);

module.exports = Start;