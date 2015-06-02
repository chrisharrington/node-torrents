"use strict";

var util = require("util"),
	Base = require("./base");

var Stop = function(params) {
	Base.call(this, params);
	
	this._params.event = "stop";
};

util.inherits(Stop, Base);

module.exports = Stop;