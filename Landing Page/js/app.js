// Navigation bar with links to sections

const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("section");

sections.forEach(e => {

   const navList = "<li><a onclick='scrollToSection(" + e.id + ")'>" + e.dataset.nav + "</a></li>";

   navBar.innerHTML += navList;

})


// Hamburger icon displays or hides the navigation menu

activeMenu = () => {

    const theNavBar = document.getElementById('navbar__list');

    if(theNavBar.style.display === 'block') {

        theNavBar.style.display = 'none';

    } else {

        theNavBar.style.display = 'block';

    }

}


// The section that is active in the viewport/closest to the top is distinguished from the other sections.

window.addEventListener("scroll", function() {

    const sectione = document.querySelectorAll("section");

    for (var i = sectione.length - 1; i >= 0; i--) {

        const sectionPosition = sectione[i].getBoundingClientRect();
        let currentSec = sectione[i].id;
        let midView = window.innerHeight / 2;
        let topTwenty = window.innerHeight * 0.2;

        if (sectionPosition.top < midView) {

            document.getElementById(currentSec).classList.add('activeArea');

        }

        if (sectionPosition.top > midView) {

            document.getElementById(currentSec).classList.remove('activeArea');

        }

        if (sectionPosition.bottom < topTwenty) {

            document.getElementById(currentSec).classList.remove('activeArea');

        }
    
    }

});


// Scrolls to the top of selected section

scrollToSection = (whatSection) => {

    const theId = "#" + whatSection.id;
    const theSection = document.querySelector(theId);
    const sectionPosition = theSection.getBoundingClientRect();

    window.scroll({

        top: sectionPosition.top,
        behavior: 'smooth'

    })

}
