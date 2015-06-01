var sut = include("client/peerId"),
	
	config = include("config"),
	
	should = require("should");

describe("client", function() {
	describe("peerId", function() {
		describe("generate", function() {
			it("should generate a non-empty string", function() {
				sut.generate().should.not.be.empty;
			});
			
			it("should generate a string of length 20", function() {
				sut.generate().length.should.equal(20);
			});
			
			it("should generate a string that begins with a '-'", function() {
				sut.generate().substring(0, 1).should.equal("-");
			});
			
			it("should generate a string that contains the client code in the first and second positions", function() {
				sut.generate().substr(1, 2).should.equal(config.clientCode);
			});
			
			it("should generate a string that contains the client version in the third to sixth positions", function() {
				sut.generate().substr(3, 4).should.equal(config.version);
			});
			
			it("should generate a string that contains a '-' in the eighth position", function() {
				sut.generate().substr(7, 1).should.equal("-");
			});
			
			it("should generate a string that contains random numbers in the ninth to twentieth positions", function() {
				isNaN(parseFloat(sut.generate().substr(8, 11))).should.equal(false);
			});
			
			it("should generate a string whose random numbers don't match a previous generation", function() {
				var first = parseFloat(sut.generate().substr(8, 11)),
					second = parseFloat(sut.generate().substr(8, 11));
				(first === second).should.equal(false);
			});
		});
	});
});