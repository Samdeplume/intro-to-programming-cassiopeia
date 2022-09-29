 // Create a new date object and store it in a variable named today
 const today = new Date();
// Retrieve the current year from your date object and store it in a variable named thisYear
 const thisyear = today.getFullYear();
// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
 const footer = document.querySelector("body > footer");
  //  List your technical skills by creating an Array of String values and store it in a variable named skills
  const skills = ["Myspace HTML", "Digital Logos", "Instagram Curator", "Professional Mario Kart Racer"];
  // Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
  const skillsSection = document.querySelector("body > section:nth-child(4)")

// Create a new paragraph (p) element and store it in a variable named copyright
 let copyright = document.createElement('p');
 // Set the inner HTML of your copyright element to display your name and the current year
 copyright.innerHTML = "Samantha Escobar " + thisyear;
 //  Using "DOM Manipulation", append the copyright element to the footer
 footer.appendChild(copyright);

 // Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
 const skillsList = document.querySelector("body > section:nth-child(4) > ul")
 // Create a for loop to iterate over your skills Array, starting at index 0
 // Inside the loop, create a new list item (li) element and store it in a variable named skill
 // On the next line, set the inner text of your skill variable to the value of the current Array element 
 // On the next line, append the skill element to the skillsList element
 for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  } 