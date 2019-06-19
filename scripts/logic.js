/**
 * Display Controller Module
 * @desc included fns directly render html for primary resume sections  
 */
const displayController = (() => {

	const render = (resume) => {
		_renderImages(resume.images);
		_renderHeader(resume.header);
		_renderSkills(resume.skills);
		_renderProjects(resume.projects);
		_renderWork(resume.work);
		_renderEducation(resume.education);
	};

	const _renderImages = (images) => {
		$(".me-img").attr("src", images.selfImage);
		$(".coop-img").attr("src", images.headerImage);
	}

	const _renderHeader = (header) => {
		$("#header").html(`
			<div class="name-container">
				<div class="my-name font-weight-bold">${header.name}</div>
				<div class="my-title">${header.title}</div>
			</div>			
			<div>
				<span class="float-left">Ph: ${header.phone}</span>
				<span>${header.websites.github}</span>
				<span class="float-right">${header.email}</span>
			</div>
			<div>${header.websites.linkedin}</div>
			`
		);
	}

	const _renderSkills = (skills) => {
		$("#skills").html(`
			${template.title("TECHNICAL SKILLS")}
			${skills.map(template.skill).join("")} 			
			<span class="footnote float-right">*currently acquiring</span>
			`
		);
	};

	const _renderProjects = (projects) => {
		$("#projects").html(`
			${template.title("TECHNICAL PROJECTS")}
			${projects.map(template.project).join("")} 			
			`
		);
	};

	const _renderWork = (work) => {
		$("#work").html(`
			${template.title("WORK EXPERIENCE")}
			${work.map(template.job).join("")} 			
			`
		);
	};

	const _renderEducation = (education) => {		
		$("#education").html(`
			${template.title("EDUCATION")}
			<div class="ed-summary">
				<span><b>${education.degree}</b>, <i>${education.school}</i>, ${education.location}</span> 
				<span class="float-right">Completion: ${dateHandler.formatYear(education.endDate)}</span>
			</div>
			<ul>
				<li>
					<b>Specialization</b>: ${education.specialization}</span> 
					<span class="float-right">Accumulated GPA: ${education.gpa}</span>
				</li>
				<li><b>Awards and Scholarships:</b> ${education.awards.map(template.award).join(", ")}</li>
				<li><b>Key Courses:</b> ${education.courses.map(template.course).join(", ")}</li>
			</ul>			
			`
		);
	};
	
	return { render };
})();


/**
 * Template Module
 * @desc included fns produce html for redundant JS objects
 */
const template = (() => {
	
	const skill = (skill) => {
		return `
		<div class="skill">
			<b>${skill.type}</b>: ${skill.names.join(" | ")}
		</div>
		`
	};

	const project = (project) => {
		return `
		<div class="project"> 
			<span><b>${project.name}</b> (${project.description})</span> 
			<span class="float-right">${dateHandler.formatBegToEnd(project.startDate,project.endDate)}</span>
				<ul>
					${project.highlights.map(_highlight).join("")}
				</ul>
		</div>
		`
	};

	const job = (job) => {
		return `
			<div class="job">
				<span><b>${job.position}</b>, <i>${job.organization}</i>, ${job.location}</span> 
				<span class="float-right">${dateHandler.formatBegToEnd(job.startDate,job.endDate)}</span>
				<ul>
					${job.highlights.map(_highlight).join("")}
				</ul>
			</div>		
		`
	};

	const award = (award) => {
		return `<span>${award.title}, ${dateHandler.formatYear(award.date)} (${award.summary})</span>`
	};

	const course = (course) => {
		return `<span>${course.name} (${course.grade}%)</span>`
	};

	const title = (title) => {
		return `<div class="section-title font-weight-bold text-center">${title}<hr></div>`;
	};


	const _highlight = (highlight) => {
		if (highlight.subs === undefined) return `<li>${highlight}</li>`

		return `
		<li>${highlight.main}
				${highlight.subs !== undefined && highlight.subs.length !== 0 ?
						_highlightSubs(highlight.subs) : ""}
		</li>
		`
	};

	const _highlightSubs = (hlSubs) => {
		return `
		<ul>
			${hlSubs.map(sub => {
				return `<li>${sub}</li>`
			}).join("")}
		</ul>
		`				
	};

	return { 
		skill,
		project,
		job,
		award,
		course,
		title
	 };

})();


/**
 * Date Handler Module
 * @desc included fns deal with date formatting 
 * @note all fns expect date strings in yyyy-mm-dd format 
 */
const dateHandler = (() => {

	const formatBegToEnd = (startDate, endDate) => {
		let months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
		
		function formatDate(date) { // helper fn, returns formatted version of single date
			return months[date.getMonth()] + " " + date.getFullYear();
		}

		let formattedStartDate = formatDate(new Date(...startDate.split("-")));
		let formattedEndDate = endDate !== "" ? formatDate(new Date(...endDate.split("-"))) : "";

		return endDate === "" ? `${formattedStartDate}-Present` : 				// {startDate}-Present 
			formattedStartDate === formattedEndDate ? formattedStartDate : 	// {date} (months are same) 
			`${formattedStartDate}-${formattedEndDate}`; 										// {startDate}-{endDate}
	}

	const formatYear = (date) => {
		return `${date.split("-")[0]}`
	}

	return { formatBegToEnd, formatYear };
})();


// asynchronous jSON request, page doesn't load until jSON is fully parsed
api.requestJSON("https://dryu99.github.io/resume-json-html/resume.json", 
	(error, data) => {
		if (error) {
			console.log("There was an error :(, render mock data");

			// if error occurs, render backup JS object === to jSON 
			displayController.render(mockData);					
		} else {
			console.log("JSON retrieved successfully! :)");
			displayController.render(data);
		}
	});


