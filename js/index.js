// Create a new date object and store it in a variable named today
 const today = new Date();
// Retrieve the current year from your date object and store it in a variable named thisYear
 const thisyear = today.getFullYear();
// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
 const footer = document.querySelector("body > footer");
//  List your technical skills by creating an Array of String values and store it in a variable named skills
  const skills = ["Myspace HTML", "Digital Logos", "Instagram Curator", "Professional Mario Kart Racer"];
// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
  const skillsSection = document.querySelector("#skillsSection")
//  Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm
  let messageForm = document.querySelector("#messageForms")

// Create a new paragraph (p) element and store it in a variable named copyright
 let copyright = document.createElement('p');
 // Set the inner HTML of your copyright element to display your name and the current year
 copyright.innerHTML = "Samantha Escobar " + thisyear;
 //  Using "DOM Manipulation", append the copyright element to the footer
 footer.appendChild(copyright);

 // Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
 const skillsList = document.querySelector("#skillsSection > ul")
 // Create a for loop to iterate over your skills Array, starting at index 0
 // Inside the loop, create a new list item (li) element and store it in a variable named skill
 // On the next line, set the inner text of your skill variable to the value of the current Array element 
 // On the next line, append the skill element to the skillsList element
 for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  } 

// Add an event listener to the messageForm element that handles the "submit" event
// Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event 
// Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
// Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event  
// Inside the callback function, on the very last line, add a new line of code to clear the form  
  messageForm.addEventListener("submit", myFunction);
  function myFunction(){
    event.preventDefault();
    let name = event.target.name.value
    let email = event.target.email.value
    let message = event.target.message.value
    console.log(name)
    console.log(email)
    console.log(message)
// Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection
    const messageSection = document.querySelector("#messages")
// Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList
    const messageList = document.querySelector("#messages > ul")
//  Create a new list item (li) element and store it in a variable named newMessage
let newMessage = document.createElement("li");
// On the next line, set the inner HTML of your newMessage element with the following information:

// <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
// <span> element that displays the "message"
 newMessage.innerHTML = `<a href="mailto:${email}"> ${name} </a> <span>${message}</span>`
// Create a new <button> element and store it in a variable named removeButton
const removeButton = document.createElement("button");
// Set the inner text to "remove"
removeButton.innerText = "remove";
// Set the type attribute to "button"
removeButton.type = "button";
// Add an event listener to the removeButton element that handles the "click" event 
// Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
// Remove the entry element from the DOM (hint: remove method)
removeButton.addEventListener("click", function(){ 
 let entry = removeButton.parentNode;
 entry.remove()
});    

// Append the removeButton to the newMessage element 
newMessage.appendChild(removeButton);
//  Append the newMessage to the messageList element
messageList.appendChild(newMessage);

 messageForm.reset()  
  }

  // sticky navbar code
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var navbar = document.getElementById("myNavBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



// Create a new XMLHttpRequest object and store it in a variable named githubRequest
// Call the open method on your githubRequest object and pass the necessary arguments
// 1. method: the method of your request (in this case, "GET")
// 2. url: the url of your request (in this case, "https://api.github.com/users/{GITHUB_USERNAME}/repos")
// Finally, call the send method on your githubRequest object to actually send the request
const gitHubRequest = new XMLHttpRequest();
gitHubRequest.addEventListener("load", handleResponse)
gitHubRequest.open("GET", "https://api.github.com/users/Samdeplume/repos");
gitHubRequest.send();

function handleResponse(){
  const repositories = JSON.parse(this.response);
  const repoNames = repositories.map(repo => repo.name);
// Create a for loop to iterate over your repositories Array, starting at index 0
for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
  project.innerText = repositories[i].name;
  projectList.appendChild(project);
} 
}

//  Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
const projectSection = document.querySelector("#projects")
//  Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList
const projectList = document.querySelector("#projectList")
