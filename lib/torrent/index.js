"use strict";

var readTorrent = require("read-torrent"),
	Promise = require("bluebird");

module.exports = {
	read: function(url) {
		return new Promise(function(resolve, reject) {
			if (!url || url.length === 0)
				reject("The torrent url is invalid.");
			else
				readTorrent.call(this, url, function(err, torrent) {
					if (err) reject(err);
					else resolve(torrent);
				});
		});
	}
};