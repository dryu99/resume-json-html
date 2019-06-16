/**
 * API Module
 * @desc basic jSON request API  
 * @note credit for code goes to Paul Salaets: https://paulsalaets.com/posts/json-api-with-github-pages
 */
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

