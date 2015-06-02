"use strict";

var util = require("util"),
	Base = require("./base");

var Completed = function(params) {
	Base.call(this, params);
	
	this._params.event = "completed";
};

util.inherits(Completed, Base);

module.exports = Completed;