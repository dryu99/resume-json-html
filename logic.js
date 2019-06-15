

// Data Controller module
const dataController = (() => {
	const resume = data;

	const getResume = () => resume;

	/**
	 * maybe make more functions to access each part of the resume? 
	 */

	return { getResume };

})();

console.log(dataController.getResume().header.name);
