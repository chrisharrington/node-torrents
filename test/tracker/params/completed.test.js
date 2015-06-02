"use strict";

var Completed = include("tracker/params/completed");

describe("tracker", function() {
    describe("params", function() {
        describe("completed", function() {
            it("should set event to 'completed'", function() {
                new Completed(_buildParams())._params.event.should.equal("completed");
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