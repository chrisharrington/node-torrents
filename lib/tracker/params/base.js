"use strict";

var _ = require("lodash");

module.exports = function(params) {
	_setDefaults(params);
	
	this._params = params || {};
	
	this._params.compact = "1";
	
	this.query = function() {
		var str = "?";
		_.each(this._params, function(param) {
			str += param + "=" + params[param] + "&";
		});
		return str.substring(0, str.length-1);
	};
	
	_validate(this._params);
};

function _setDefaults(params) {
	params.uploaded = params.uploaded || 0;
	params.downloaded = params.downloaded || 0;
}

function _validate(params) {
	if (!params.info_hash || params.info_hash.length !== 20)
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