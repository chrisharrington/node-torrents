"use strict";

var EventEmitter = require("events").EventEmitter,
	request = require("request"),
    config = include("config"),
    
    Start = require("./params/start");

module.exports = function(peerId, torrent, announce) {
	this._emitter = new EventEmitter();
	
	this.on = function(event, callback) {
		this._emitter.on(event, callback);
	};
    
    this.start = function() {
        console.log(this._buildParams(torrent, 0, 0, torrent.length));
        this._get(new Start(this._buildParams(torrent, 0, 0, torrent.length)));
    };
	
	this._get = function(params) {
		request.get(params.query(), function(error, response, body) {
            if (error)
                console.log(error);
            else
                console.log("success");
        });
	};
    
    this._buildParams = function(torrent, uploaded, downloaded, left) {
        return {
            info_hash: torrent.infoHash,
            peer_id: peerId,
            port: config.client.port,
            uploaded: uploaded,
            downloaded: downloaded,
            left: left
        };
    };
};