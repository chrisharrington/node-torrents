"use strict";

var Start = include("tracker/params/start");

describe("tracker", function() {
    describe("params", function() {
        describe("start", function() {
            it("should set event to 'start'", function() {
                new Start(_buildParams())._params.event.should.equal("start");
            });
            
            function _buildParams() {
				return {
					info_hash: "12345678901234567890",
					peer_id: "09876543211234567890",
					port: 6881,
					uploaded: 0,
					downloaded: 0,
					left: 10000
				}
			}
        });
    });
});