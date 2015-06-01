require("./lib/globals");

var Start = include("tracker/params/start"),
	start = new Start({ blah: "boo" });

start.query();