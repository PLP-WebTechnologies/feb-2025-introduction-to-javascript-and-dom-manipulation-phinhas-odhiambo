// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("dynamic-text").textContent = "The text has been updated!";
  });
  
  // Modify CSS styles dynamically
  document.getElementById("change-style-btn").addEventListener("click", function () {
    const title = document.getElementById("page-title");
    title.style.color = "tomato";
    title.style.fontSize = "2.5rem";
  });
  
  // Add and remove elements dynamically
  const container = document.getElementById("element-container");
  
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new element!";
    newElement.className = "dynamic";
    container.appendChild(newElement);
  });
  
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    const dynamicElements = container.getElementsByClassName("dynamic");
    if (dynamicElements.length > 0) {
      container.removeChild(dynamicElements[dynamicElements.length - 1]);
    }
  });
  