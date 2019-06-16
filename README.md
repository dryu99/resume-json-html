# Resume > jSON > HTML 

**Encoded my resume into jSON, then parsed the jSON into HTML. Wild. </br> 
[View HTML version here](https://dryu99.github.io/resume-json-html/) and [pdf version here](https://dryu99.github.io/resume-json-html/Daniel_Ryu_Resume.pdf).** </br>
*Created for [Aimsio's](https://aimsio.com/) Intern Assignment*

</br>

**Languages/Technologies/Libraries used:**
- JavaScript
- HTML
- CSS
- jQuery
- Bootstrap (1st time)
- AJAX (1st time)

</br>

**Key Learning Highlights:**
- Figuring out how to represent my resume as jSON
- jSON parsing 
- Sending asynchronous server requests using AJAX techniques
- Using modules to create more cohesive code
- Figuring out how to oragnize resume HTML 
- base64 representation 
- Using Bootstap's library for styling 
- Lots and lots of HTML, CSS, and DOM manipulation practice

</br>

**Assignment Assumptions**
- Assumed using manually coded jSON was appropriate opposed to implementing a script that converts a PDF/Word file into jSON, as the purpose of the assignment seemed to focus on jSON manipulation, not generation. 
- Assumed we did not have to implement a script that would encode images to base64. 

</br>

**Technical Problems I faced:**
- Figuring out how to organize my code (primarily with JS modules and HTML)
- Had a lot of trouble with accessing jSON in the beginning, thought I could just hook it up to JavaScript locally. Turns out you can   only access jSON where certain protocol schemes are fulfilled. 
  - Initially used "fake" jSON by using an identical JavaScript object to figure out HTML rendering first
  - Eventually found out I could access directory files through github pages, built a simple API to retrieve requested jSON 
- Figuring out the most intuitive way to parse jSON into HTML 
  - Using Array.prototype.map() was incredibly useful for generating HTML for repetitive data.
- Dealing with asynchronous code, my webpage had to wait for server to send jSON before parsing it into HTML with JavaScript 
- Resume styling was quite tricky   
  - Had a lot of trouble figuring out how to indent wrapped text for list tags (used a cheeky method with padding/text-indent props)
  - Struggled with setting proper sizes/margins for containers and fonts that best replicated original resume  
  - God bless float properties 
  
</br>
</br>

This assignment was challenging as heck, but holy I learned so much. Great front-end experience. 




