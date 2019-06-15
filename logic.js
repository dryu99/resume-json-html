

// Data Controller module
const dataController = (() => {
	const _resume = data; // parsing would happen here

	const getResume = () => _resume;

	/**
	 * maybe make more functions to access each part of the resume? 
	 */

	return { getResume };

})();


// Display Controller module
const displayController = (() => {
	const _resume = dataController.getResume();

	const render = () => {
		_renderHeader();
	};

	const _renderHeader = () => {
		const header = _resume.header; // maybe make a getHeader method in data control?

		// use bootstrap for left, mid, right justified
		$(".header").html(`
			<div class="header-name">${header.name}</div>
			<div class="header-title">${header.title}</div>
			<div class="header-row-1">Ph: ${header.phone} ${header.websites.github} ${header.email}</div> 
			<div class="header-row-2">${header.websites.github}</div>
			`
		);
	}

	const _renderTitle = () => {
		
	};
	
	return { render };
})();

displayController.render();

