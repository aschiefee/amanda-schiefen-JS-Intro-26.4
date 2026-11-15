// FOOTER

//Make footer element and put it on the page
//Footer should exist in DOM first
// create footer here

const body = document.body;
const newFooter = document.createElement("footer");
body.appendChild(newFooter);

// date right now
const today = new Date();

// just the year
const thisYear =today.getFullYear();

//DOM selection - footer
const footer = document.querySelector("footer");

//create new paragraph for copyright text
const copyright = document.createElement("p");

//fill paragraph
copyright.innerText = `\u00A9 Amanda Schiefen ${thisYear}`

// DOM manipulate
footer.appendChild(copyright);

// SKILLS ----

// Array of strings
const skills =  ["HTML", "CSS", "JavaScript"];

// select skills section by ID
const skillsSection = document.getElementById("skills");

// search inside skillsSection only
const skillsList = skillsSection.querySelector("ul");

// Loop over every item in the array
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

#skills ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
}

#skills li {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}