"use strict";

var _ = require("lodash"),
	encode = require("./encode");

module.exports = function(params) {
	_setDefaults(params);
	
	this._params = params || {};
	
	this._params.compact = "1";
	this._params.info_hash = encode(this._params.info_hash);
	
	this.query = function() {
		var str = "?";
		for (var name in this._params)
			str += name + "=" + this._params[name] + "&";
		return str.substring(0, str.length-1);
	};
	
	_validate(this._params);
};

function _setDefaults(params) {
	params.uploaded = params.uploaded || 0;
	params.downloaded = params.downloaded || 0;
}

function _validate(params) {
	if (!params.info_hash)
		throw new Error("The info hash is invalid.");
	if (!params.peer_id || params.peer_id.length !== 20)
		throw new Error("The peer ID is invalid.");
	
	var numberPort = parseInt(params.port || "");
	if (!params.port || isNaN(numberPort) || numberPort < 0 || numberPort > 65535)
		throw new Error("The port is invalid.");
	
	var numberUploaded = parseInt(params.uploaded);
	if (isNaN(numberUploaded) || numberUploaded < 0)
		throw new Error("The uploaded byte count is invalid.");
	
	var numberDownloaded = parseInt(params.downloaded);
	if (isNaN(numberDownloaded) || numberDownloaded < 0)
		throw new Error("The downloaded byte count is invalid.");
	
	var numberLeft = parseInt(params.left || "");
	if (!params.left || isNaN(numberLeft) || numberLeft < 0)
		throw new Error("The left byte count is invalid.");
}