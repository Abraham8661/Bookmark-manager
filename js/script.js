window.addEventListener('scroll', function() {
    const triggerSection = document.getElementById('features-section');
    const animatedElement = document.getElementById('feature-image1');
    const panel_one = document.getElementById('feature-text');

    const faq_section = document.getElementById('faq_section');
    const faq_accordion = document.getElementById('faq-accordion');

    // Get the top position of the section relative to the viewport
    const sectionTop = triggerSection.getBoundingClientRect().top;
    // Check if the section is visible in the viewport
    if (sectionTop < window.innerHeight) {
        // User has scrolled to the section, so add the animation class
        animatedElement.classList.add('animate-scale-in');
        panel_one.classList.add('animate-scale-in');
    }

    // Get the top position of the section relative to the viewport
    const sectionTop2 = triggerSection.getBoundingClientRect().top;
    // Check if the section is visible in the viewport
    if (sectionTop2 < window.innerHeight) {
        // User has scrolled to the section, so add the animation class
        faq_accordion.classList.add('animate-scale-in');
    }
});

window.addEventListener('scroll', function() {
    const faq_section = document.getElementById('faq_section');
    const faq_accordion = document.getElementById('faq-accordion');
    
    // Get the top position of the section relative to the viewport
    const sectionTop = triggerSection.getBoundingClientRect().top;
    // Check if the section is visible in the viewport
    if (sectionTop < window.innerHeight) {
        // User has scrolled to the section, so add the animation class
        faq_accordion.classList.add('animate-scale-in');
    }
});

window.addEventListener('scroll', function() {
    const faq_section = document.getElementById('download-section');
    const download_card = document.getElementById('download-card');
    
    // Get the top position of the section relative to the viewport
    const sectionTop = triggerSection.getBoundingClientRect().top;
    // Check if the section is visible in the viewport
    if (sectionTop < window.innerHeight) {
        // User has scrolled to the section, so add the animation class
        download_card.classList.add('animate-scale-in');
    }
});






const panel_1 = document.getElementById('panel-1')
const panel_2 = document.getElementById('panel-2')
const panel_3 = document.getElementById('panel-3')


// Tabs menu event listener
panel_1.addEventListener('click', FirstOnTabClick)

function FirstOnTabClick() {
  // Deactivate all tabs
    panel_2.classList.add("hidden");
    panel_3.classList.add("hidden");
}

panel_2.addEventListener('click', SecondOnTabClick)

function SecondOnTabClick() {
  // Deactivate all tabs
    panel_2.classList.remove("hidden");
    panel_2.classList.add("flex");
    panel_1.classList.remove("flex");
    panel_1.classList.add("hidden");
    panel_3.classList.add("hidden");
}


//Menu Script

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}



