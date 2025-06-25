let navItems = document.querySelectorAll(".navigation__link");
const sectionAbout = document.querySelector("#section-about");
const sectionAdventure = document.querySelector("#section-adventure");
const sectionTour = document.querySelector("#section-tour");
const sectionFeedback = document.querySelector("#section-feedback");
const sectionBook = document.querySelector("#section-book");
const navToggle = document.querySelector("#navi-toggle");

navItems.forEach(item => {
item.addEventListener('click', function(){
    if (navToggle.checked){
        navToggle.checked = false;
    } else {
        navToggle.checked = true;
    }
});
});