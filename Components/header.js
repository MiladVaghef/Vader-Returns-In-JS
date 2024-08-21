// Import utility functions from utility.js
import {
  appendChild,
  createElementWithClass,
  createElementWithID,
  prependChild,
} from "../utility.js";

// Function to create and append the header
export function header() {
  // Create a header element with class "row"
  let headerElement = createElementWithClass("header", "row");
  // Prepend the header element to the body
  prependChild(document.body, headerElement);
  // Add the lightsaber icon to the header
  swordIcon(headerElement);
  // Create an h1 element with ID "brandText"
  let DarthText = createElementWithID("h1", "brandText");
  // Set the inner text of the h1 element to "DARTH"
  DarthText.innerText = "DARTH";
  // Append the h1 element to the header
  appendChild(headerElement, DarthText);
}

// Function to create and append the sword icon
function swordIcon(append) {
  // Create a div element with ID "nav-container"
  let saberContainer = createElementWithID("div", "nav-container");
  // Toggle the "pushed" class on click
  saberContainer.addEventListener("click", () => {
    saberContainer.classList.toggle("pushed");
  });
  // Set the inner HTML of the div element to include the icon
  saberContainer.innerHTML = `
      <div class="toggle-icon">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    `;
  // Append the swordContainer to the provided element
  append.appendChild(saberContainer);
  return saberContainer; // Return the created saberContainer element
}
