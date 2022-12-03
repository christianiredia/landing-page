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
const navs = document.querySelector("#navbar__list");
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
  let navList = "";
  sections.forEach(function (section) {
    let sectionId = section.id;
    let sectionData = section.dataset.nav;
    navList += `<li><a class="menu__link" href="#${sectionId}">${sectionData}</a></li>`;
  });
  navs.innerHTML = navList;
}
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
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navLinks();

// Scroll to section on link click

// Set sections as active
