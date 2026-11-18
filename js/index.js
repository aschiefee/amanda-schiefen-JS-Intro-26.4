// FOOTER

const body = document.body;
const newFooter = document.createElement("footer");
body.appendChild(newFooter);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Amanda Schiefen ${thisYear}`;
footer.appendChild(copyright);

// SKILLS

const skills = ["HTML", "CSS", "JavaScript"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

