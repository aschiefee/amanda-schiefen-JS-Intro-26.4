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

// MESSAGE FORM

const messageForm = document.querySelector('form[name="leave_message"]');

// function every time the form is submitted
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

const usersName = event.target.usersName.value;
const usersEmail = event.target.usersEmail.value;
const usersMessage = event.target.usersMessage.value;

console.log(usersName, usersEmail, usersMessage);

const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");
newMessage.innerHTML = 
`<a href="mailto:${usersEmail}">${usersName}</a> <span> wrote: ${usersMessage}</span>`
;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
});


newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

event.target.reset();

});
