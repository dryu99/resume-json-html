let resume;

$.ajax({
	url: "./resume.json",
	method: "GET",
	success: function (response) {
		resume = JSON.parse(response);
	}
});

console.log(resume.basics.name);