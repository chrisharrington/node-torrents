"use strict";

var EventEmitter = require("events").EventEmitter,
	
	request = require("./request");

module.exports = function(announce) {
	this._emitter = new EventEmitter();
	
	this.on = function(event, callback) {
		this._emitter.on(event, callback);
	};
	
	this._get = function(announce) {
		
	};
	
	this._get(announce);
};