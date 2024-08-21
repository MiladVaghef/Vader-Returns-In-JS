// Import utility functions from utility.js
import { addImage, appendChild, createElementWithID } from "../utility.js";

// Function to display background elements
export function displayBackground() {
  // Select the main element from the document
  let main = document.querySelector("main");

  // Create a div element with ID "displayContainer"
  let displayContainer = createElementWithID("div", "displayContainer");
  // Append the displayContainer to the main element
  appendChild(main, displayContainer);

  // Create an image element for the Death Star and set its ID
  let deathStar = addImage("../Images/death-star.png");
  deathStar.id = "deathStarImg";
  // Append the Death Star image to the displayContainer
  appendChild(displayContainer, deathStar);

  // Create an image element for Darth Vader and set its ID
  let darthVader = addImage("../Images/darth-vader.png");
  darthVader.id = "darthVaderImg";
  // Append the Darth Vader image to the displayContainer
  appendChild(displayContainer, darthVader);

  // Create an h2 element with ID "displayText"
  let displayText = createElementWithID("h2", "displayText");
  // Set the inner HTML of the h2 element
  displayText.innerHTML = "ANAKIN<br>SKYWALKER";
  // Append the displayText to the displayContainer
  appendChild(displayContainer, displayText);
}
