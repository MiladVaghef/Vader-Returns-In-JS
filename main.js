// Import utility functions and component functions
import { createElementWithClass, prependChild } from "./utility.js";
import { header } from "./Components/header.js";
import { footer } from "./Components/footer.js";

// Main function to set up the page
function main() {
  // Reference to the body element
  let body = document.body;
  // Create main element with class "column"
  let main = createElementWithClass("main", "column");
  // Add main element as the first child of the body
  prependChild(body, main);
  // Call function to display background
  displayBackground();
}

// Call functions to setup the page components
footer();
main();
header();
