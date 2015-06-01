"use strict";

var _ = require("lodash"),
	
	Torrent = include("torrent"),
	Tracker = include("tracker"),
	PeerId = require("./peer-id");

module.exports = function() {
	this._peerId = PeerId.generate();
	
	this.add = function(url) {
		Torrent.read(url).then(function(torrent) {
			var tracker = new Tracker(this._peerId, torrent, torrent.announce[0]);
			tracker.on("peers", function(peers) {
				console.log(peers);
			});
		}.bind(this));
	}.bind(this);
};