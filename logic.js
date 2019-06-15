

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
			<b>${project.name}</b> (${project.description}) ${project.startDate}-${project.endDate}
			<ul>
				${project.highlights.map(_highlight).join("")}
			</ul>
		</div>
		`
	};

	const job = (job) => {
		return `
			<div class="job">
				<b>${job.position}</b>, (${job.organization}), ${job.location} ${job.startDate}-${job.endDate}
				<ul>
					${job.highlights.map(_highlight).join("")}
				</ul>
			</div>		
		`
	};

	const award = (award) => {
		return `<span>${award.title}, ${award.date} (${award.summary})</span>`
	};

	const course = (course) => {
		return `<span>${course.name} (${course.grade}%)</span>`
	};

	// produce <li> that represents given highlight 
	const _highlight = (highlight) => {
		if (highlight.subs === undefined) return `<li>${highlight}</li>`

		return `
		<li>${highlight.main}
				${highlight.subs !== undefined && highlight.subs.length !== 0 ?
						_highlightSubs(highlight.subs) : ""}
		</li>
		`
	};

	// produce <ul> that represents given highlight subs 
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
		course
	 };

})();


// Display Controller module
const displayController = (() => {
	const _resume = dataController.getResume();

	const render = () => {
		_renderHeader();
		_renderSkills();
		_renderProjects();
		_renderWork();
		_renderEducation();
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
			${skills.map(template.skill).join("")} 			
			<span class="footnote">*currently acquiring</span>
			`
		);
	};

	const _renderProjects = () => {
		const projects = _resume.projects; 

		$(".projects").html(`
			${_renderTitle("TECHNICAL PROJECTS")}
			${projects.map(template.project).join("")} 			
			`
		);
	};

	const _renderWork = () => {
		const work = _resume.work; 

		$(".work").html(`
			${_renderTitle("WORK EXPERIENCE")}
			${work.map(template.job).join("")} 			
			`
		);
	};

	const _renderEducation = () => {
		const education = _resume.education; 

		$(".education").html(`
			${_renderTitle("EDUCATION")}
			<div class="ed-summary"><b>${education.degree}</b>, <i>${education.school}</i>, ${education.location} ${education.endDate}</div>
			<div class="ed-spec-gpa"><b>Specialization</b>: ${education.specialization} <span>Accumulated GPA: ${education.gpa}</span></div>
			<div class="ed-awards"><b>Awards and Scholarships:</b> ${education.awards.map(template.award).join(", ")}</div>			
			<div class="ed-courses"><b>Key Courses:</b> ${education.courses.map(template.course).join(", ")}</div>			
			`
		);
	};


	const _renderTitle = (title) => {
		return `<div class="section-title">${title}</div>`;
	};
	
	return { render };
})();

displayController.render();
