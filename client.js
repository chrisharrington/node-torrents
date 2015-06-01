require("./lib/globals");

var Client = include("client");

var url = "http://releases.ubuntu.com/15.04/ubuntu-15.04-desktop-amd64.iso.torrent";

var client = new Client();

client.add(url);