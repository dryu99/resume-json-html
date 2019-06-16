const api = (() => {

	const requestJSON = (url, callback) => {
		let req = new XMLHttpRequest();
	
		req.addEventListener("load", onLoad);
		req.addEventListener("error", onFail);
		req.addEventListener("abort", onFail);
		req.open("GET", url);
		req.send();
	
		function onLoad(e) {
			if (req.status >= 400) {
				onFail(e);
			} else {
				let json = JSON.parse(this.responseText);
				callback(null, json);
			}
		}

		function onFail(e) {
			callback(new Error(""));
		}
	}

	return { requestJSON }
})();

