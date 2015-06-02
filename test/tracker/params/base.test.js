"use strict";

var Base = include("tracker/params/base"),
	
	should = require("should");

describe("tracker", function() {
	describe("params", function() {
		describe("base", function() {
			var _params;
			
			beforeEach(function() {
				_params = _buildParams();
			});
			
			it("should throw error when info_hash is missing", function() {
				delete _params.info_hash;
				_shouldThrow("The info hash is invalid.");
			});
			
			it("should throw error when peer_id is missing", function() {
				delete _params.peer_id;
				_shouldThrow("The peer ID is invalid.");
			});
			
			it("should throw error when peer_id is missing", function() {
				_params.peer_id = "blah";
				_shouldThrow("The peer ID is invalid.");
			});
			
			it("should throw error when port is missing", function() {
				delete _params.port;
				_shouldThrow("The port is invalid.");
			});
			
			it("should throw error when port is not a number", function() {
				_params.port = "not a number";
				_shouldThrow("The port is invalid.");
			});
			
			it("should throw error when port is less than zero", function() {
				_params.port = -1;
				_shouldThrow("The port is invalid.");
			});
			
			it("should throw error when port is greater than 65535", function() {
				_params.port = 65536;
				_shouldThrow("The port is invalid.");
			});
			
			it("should set uploaded to zero if not provided", function() {
				delete _params.uploaded;
				new Base(_params)._params.uploaded.should.equal(0);
			});
			
			it("should throw error when uploaded is not a number", function() {
				_params.uploaded = "invalid";
				_shouldThrow("The uploaded byte count is invalid.");
			});
			
			it("should throw error when uploaded is less than zero", function() {
				_params.uploaded = -1;
				_shouldThrow("The uploaded byte count is invalid.");
			});
			
			it("should set downloaded to zero if not provided", function() {
				delete _params.downloaded;
				new Base(_params)._params.downloaded.should.equal(0);
			});
			
			it("should throw error when downloaded is not a number", function() {
				_params.downloaded = "invalid";
				_shouldThrow("The downloaded byte count is invalid.");
			});
			
			it("should throw error when downloaded is less than zero", function() {
				_params.downloaded = -1;
				_shouldThrow("The downloaded byte count is invalid.");
			});
			
			it("should throw error when left is missing", function() {
				delete _params.left;
				_shouldThrow("The left byte count is invalid.");
			});
			
			it("should throw error when left is not a number", function() {
				_params.left = "not a number";
				_shouldThrow("The left byte count is invalid.");
			});
			
			it("should throw error when left is less than zero", function() {
				_params.left = -1;
				_shouldThrow("The left byte count is invalid.");
			});
			
			it("should set compact to 1", function() {
				new Base(_params)._params.compact.should.equal("1");
			});
							 
			function _shouldThrow(message) {
				(function() { new Base(_params); }).should.throw(message);
			}

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