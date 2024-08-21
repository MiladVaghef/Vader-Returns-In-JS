// Import utility functions from utility.js
import {
  appendChild,
  createElement,
  createElementWithClass,
  createElementWithID,
  prependChild,
} from "../utility.js";

// Function to create and append the footer
export function footer() {
  // Get the body element
  let body = document.body;

  // Create a footer element with class "row"
  let footer = createElementWithClass("footer", "row");
  // Prepend the footer to the body
  prependChild(body, footer);

  // Create a section element with ID "description"
  let descriptionContainer = createElementWithID("section", "description");
  // Append the descriptionContainer to the footer
  appendChild(footer, descriptionContainer);

  // Create a div element with ID "descriptionText"
  let descriptionText = createElementWithID("div", "descriptionText");
  // Append the descriptionText to the descriptionContainer
  appendChild(descriptionContainer, descriptionText);

  // Create an h3 element for the title
  let title = createElement("h3");
  // Set the inner text of the h3 element
  title.innerText = "SITH LORD DARTH VADER";
  // Append the title to the descriptionText
  appendChild(descriptionText, title);

  // Create a p element for the paragraph
  let paragraph = createElement("p");
  // Set the inner text of the p element
  paragraph.innerText =
    "Born as Anakin Skywalker a slave on the desert planet Tatooine who became a Jedi.";
  // Append the paragraph to the descriptionText
  appendChild(descriptionText, paragraph);
}
