"use strict";

var _ = require("lodash"),
	
	Torrent = require("./torrent"),
	Tracker = require("./tracker");

module.exports = function() {
	this.add = function(url) {
		Torrent.read(url).then(function(torrent) {
			var tracker = new Tracker(torrent.announce[0]);
			tracker.on("peers", function(peers) {
				console.log(peers);
			});
		});
	}
};