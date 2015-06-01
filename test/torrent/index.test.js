var should = require("should"),
	sinon = require("sinon"),
	
	Promise = require("bluebird"),
	readTorrent = require("read-torrent");
	
	sut = require("../../lib/torrent");

describe("torrent", function() {
	describe("read", function() {
		it("should fail with missing url", function(done) {
			var fail = false;
			sut.read().catch(function() {
				fail = true;
			}).done(function() {
				fail.should.equal(true);
				done();
			});
		});
		
		it("should fail with empty url", function(done) {
			var fail = false;
			sut.read("").catch(function() {
				fail = true;
			}).done(function() {
				fail.should.equal(true);
				done();
			});
		});
		
		it("should call readTorrent", function(done) {
			sinon.stub(readTorrent, "call", function(context, url, callback) { callback(); });
			
			var url = "the url";
			sut.read(url).done(function() {
				readTorrent.call.called.should.equal(true);
				done();
			});
		});
		
		it("should fail when readTorrent returns an error", function(done) {
			var error = "oh noes! an error!";
			
			sinon.stub(readTorrent, "call", function(context, url, callback) { callback(error); });
			
			var url = "the url";
			sut.read(url).catch(function(e) {
				e.should.equal(error);
				done();
			});
		});
		
		it("should succeed when readTorrent returns torrent info", function(done) {
			var torrent = { infoHash: "the info hash" };
			
			sinon.stub(readTorrent, "call", function(context, url, callback) { callback(null, torrent); });
			
			var url = "the url";
			sut.read(url).then(function(t) {
				t.should.equal(torrent);
				done();
			});
		});
		
		afterEach(function() {
			if (readTorrent.call.restore)
				readTorrent.call.restore();
		});
	});
	
});