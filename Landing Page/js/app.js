// Insert sections in main

function buildSection(quantity) {

  let theMain = document.querySelector('main');

  let sectionList = "";
  let headline = "";
  let i = "1";

  while (quantity > 0) {

    if(i == "1") {headline = "One";}
    if(i == "2") {headline = "Two";}
    if(i == "3") {headline = "Three";}
    if(i == "4") {headline = "Four";}
    if(i == "5") {headline = "Five";}
    if(i == "6") {headline = "Six";}
    if(i == "7") {headline = "Seven";}
    if(i == "8") {headline = "Eight";}

    sectionList = "<section id='section" + i + "' data-nav='" + headline + "'><div class='landing__container'><h2>" + headline + "</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>";

    theMain.innerHTML += sectionList;

    i++;

    quantity--;

  } 

}

document.addEventListener("DOMContentLoaded", function() {

    buildSection('4');

});


// Navigation bar with links to sections

document.addEventListener("DOMContentLoaded", function() {

    const navBar = document.querySelector('#navbar__list');
    const sections = document.querySelectorAll("section");

    sections.forEach(e => {

       const navList = "<li><a onclick='scrollToSection(" + e.id + ")'>" + e.dataset.nav + "</a></li>";

       navBar.innerHTML += navList;

    })

});


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

    for (let i = sectione.length - 1; i >= 0; i--) {

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
