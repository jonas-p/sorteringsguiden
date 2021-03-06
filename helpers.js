Array.prototype.diff = function(a) {
	return this.filter(function(i) { return a.indexOf(i) < 0; });
};

Array.prototype.toUpper = function() {
	return this.map(function(x) { return x.toUpperCase(); });
}

exports.distance = function(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180;
	var radlat2 = Math.PI * lat2/180;
	var radlon1 = Math.PI * lon1/180;
	var radlon2 = Math.PI * lon2/180;
	var theta = lon1-lon2;
	var radtheta = Math.PI * theta/180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	return dist * 1.609344;
}  
