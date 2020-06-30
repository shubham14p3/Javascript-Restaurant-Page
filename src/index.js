import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  console.log("Hello World");
// TOGGLE SECTIONS
// querySelector, jQuery style
var $ = function (selector) {
  return document.querySelectorAll(selector);
};


// Define tabs, write down them classes
var tabs = [
  '.tabbed-section__selector-tab-1',
  '.tabbed-section__selector-tab-2',
  '.tabbed-section__selector-tab-3'
];

// Create the toggle function
var toggleTab = function(element) {
  var parent = element.parentNode;
  
  // Do things on click
  $(element)[0].addEventListener('click', function(){
    // Remove the active class on all tabs.
    // climbing up the DOM tree with `parentNode` and target 
    // the children ( the tabs ) with childNodes
    this.parentNode.childNodes[1].classList.remove('active');
    this.parentNode.childNodes[3].classList.remove('active');
    this.parentNode.childNodes[5].classList.remove('active');

    // Then, give `this` (the clicked tab), the active class
    this.classList.add('active');
    
    // Check if the clicked tab contains the class of the 1 or 2
    if(this.classList.contains('tabbed-section__selector-tab-1')) {
      // and change the classes, show the first content panel
      $('.tabbed-section-1')[0].classList.remove('hidden');
      $('.tabbed-section-1')[0].classList.add('visible');
      
      // Hide the second
      $('.tabbed-section-2')[0].classList.remove('visible');
      $('.tabbed-section-2')[0].classList.add('hidden');
       $('.tabbed-section-3')[0].classList.remove('visible');
      $('.tabbed-section-3')[0].classList.add('hidden');
    }

    if(this.classList.contains('tabbed-section__selector-tab-2')) {
      // and change the classes, show the second content panel
      $('.tabbed-section-2')[0].classList.remove('hidden');
      $('.tabbed-section-2')[0].classList.add('visible');
      // Hide the first
      $('.tabbed-section-1')[0].classList.remove('visible');
      $('.tabbed-section-1')[0].classList.add('hidden');
      $('.tabbed-section-3')[0].classList.remove('visible');
      $('.tabbed-section-3')[0].classList.add('hidden');
    }
    
    if(this.classList.contains('tabbed-section__selector-tab-3')) {
      // and change the classes, show the second content panel
      $('.tabbed-section-3')[0].classList.remove('hidden');
      $('.tabbed-section-3')[0].classList.add('visible');
      // Hide the first
      $('.tabbed-section-1')[0].classList.remove('visible');
      $('.tabbed-section-1')[0].classList.add('hidden');
      $('.tabbed-section-2')[0].classList.remove('visible');
      $('.tabbed-section-2')[0].classList.add('hidden');
    }
  });
};

// Then finally, iterates through all tabs, to activate the 
// tabs system.
for (var i = tabs.length - 1; i >= 0; i--) {
  toggleTab(tabs[i])
};
  return element;
}

document.body.appendChild(component());
