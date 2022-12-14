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
const scrollToTop = document.querySelector(".scroll-to-top");
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
    navLi += `<li><a class="menu__link" href="#${sectionId}">${sectionData}</a></li>`;
  });
  nav.innerHTML = navLi;
}

// Add class 'active' to section when near top of viewport
// on window scroll
//Styling the nav bar if section is active
function activeAtTop() {
  window.addEventListener("scroll", function () {
    let navHref = document.querySelectorAll("a");
    sections.forEach((section) => {
      let sectionData = section.dataset.nav;
      const topView = section.getBoundingClientRect().top;
      if (topView >= 0 && topView <= 150) {
        section.classList.add("active");
        navHref.forEach(function (nav) {
          if (nav.textContent === sectionData) {
            nav.style.textDecoration = "underline";
            nav.style.color = "rgb(136 203 171)";
            nav.style.fontSize = "1.2rem";
          } else {
            nav.style.textDecoration = "";
            nav.style.color = "";
            nav.style.fontSize = "";
          }
        });
      } else {
        section.classList.remove("active");
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Function to scroll back to to the top if user desires
scrollToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navLinks();

activeAtTop();

scrollToAnchor();
