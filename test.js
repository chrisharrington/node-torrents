require("./lib/globals");

//var Torrent = include("torrent");
//
//Torrent.read("http://releases.ubuntu.com/15.04/ubuntu-15.04-desktop-amd64.iso.torrent").then(function(torrent) {
//	console.log(torrent);
//});


//http://torrent.ubuntu.com:6969/announce?info_hash=%fc%8a%15%a2%fa%f2sM%bb%1d%c5%f7%af%dc%5c%9b%ea%eb%1fY&peer_id=-UT3430-j%9da~GN%b8%1d%f2%82y%2a&port=61941&uploaded=0&downloaded=28835840&left=1111179264&corrupt=0&key=41176B15&event=stopped&numwant=0&compact=1&no_peer_id=1

//fc8a15a2faf2 734d bb1dc5f7afdc5c9beaeb1f59
//fc8a15a2faf2 sM%  bb1dc5f7afdc5c9beaeb1fY
//
//123456789abcdef123456789abcdef123456789a
//124Vx   9a%bc%de%f1%23Eg%89%ab%cd%ef%124Vx%9a

//var h = 'fc8a15a2faf2734dbb1dc5f7afdc5c9beaeb1f59';
//h = h.replace(/.{2}/g, function(m) {
//  var v = parseInt(m, 16);
//  if (v <= 127) {
//    m = encodeURIComponent(String.fromCharCode(v));
//    if (m[0] === '%')
//      m = m.toLowerCase();
//  } else
//    m = '%' + m;
//  return m;
//});
//console.log(h);

console.log(include("tracker/encode")("fc8a15a2faf2734dbb1dc5f7afdc5c9beaeb1f59"));