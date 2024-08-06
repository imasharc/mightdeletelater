function greet() {
  // Create a new paragraph element
  const newText = document.createElement("p");
  // Set the text content of the new paragraph
  newText.textContent = "JavaScript is working";
  // Append the new paragraph to the body or another container element
  document.body.appendChild(newText);
}
