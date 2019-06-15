

// Data Controller module
const dataController = (() => {
	const _resume = data; // parsing would happen here

	const getResume = () => _resume;

	/**
	 * maybe make more functions to access each part of the resume? 
	 */

	return { getResume };

})();

// Template module
const template = (() => {
	
	const skillRow = (skill) => {
		return `<div class="skill-row">
							<b>${skill.type}</b>: ${skill.names.join(" | ")}
						</div>`
	};

	return { skillRow };

})();


// Display Controller module
const displayController = (() => {
	const _resume = dataController.getResume();

	const render = () => {
		_renderHeader();
		_renderSkills();
	};

	const _renderHeader = () => {
		const header = _resume.header; // maybe make a getHeader method in data control?

		// use bootstrap for left, mid, right justified of rows 
		$(".header").html(`
			<div class="my-name">${header.name}</div>
			<div class="my-title">${header.title}</div>
			<div class="header-row-1">Ph: ${header.phone} ${header.websites.github} ${header.email}</div> 
			<div class="header-row-2">${header.websites.github}</div>
			`
		);
	}

	const _renderSkills = () => {
		const skills = _resume.skills; 

		$(".skills").html(`
			${_renderTitle("SKILLS")}
			${skills.map(template.skillRow).join("")} 			
			<span class="footnote">*currently acquiring</span>
			`
		);
	};

	const _renderTitle = (title) => {
		return `<div class="section-title">${title}</div>`;
	};
	
	return { render };
})();

displayController.render();
console.log($(".projects").index());
