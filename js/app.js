/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navLinks() {
  let navLi = "";
  sections.forEach(function (section) {
    let sectionId = section.id;
    let sectionData = section.dataset.nav;
    navLi += `<li><a class="navLink" href="#${sectionId}">${sectionData}</a></li>`;
  });
  nav.innerHTML = navLi;
}
navLinks();
// Add class 'active' to section when near top of viewport
// on window scroll
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const topView = section.getBoundingClientRect().top;
    if (topView > 0 && topView < 100) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

// Scroll to anchor ID using scrollTO event
let navEl = document.querySelectorAll(".navLink");

for (let i = 0; i < navEl.length; i++) {
  let linkTop = navEl.getBoundingClientRect().top;
  let linkLeft = navEl.getBoundingClientRect().left;
  navEl[i].scrollTo({
    top: linkTop,
    left: linkLeft,
    behavior: "smooth",
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
