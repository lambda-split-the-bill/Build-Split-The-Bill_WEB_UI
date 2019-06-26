//navigation
class Dropdown {
    constructor(element) {
      this.element = element;  
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = element.querySelector(".dropdown-button");
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.item = element.querySelector(".dropdown-items");
      this.button.addEventListener('click', () => 
        this.toggleContent()
      )
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.item.classList.toggle("hidden");
    }
  }
  
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
  //.