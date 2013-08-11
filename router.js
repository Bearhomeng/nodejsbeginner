function route (pathname, handle) {
	console.log("About to route request for "+pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("Could not find handler for "+pathname);
	}
}

exports.route = route;