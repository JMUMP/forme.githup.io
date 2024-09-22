
// JavaScript to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
}







// for cursor

const customCursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.custom-cursor-trail');

// Track mouse movement for the main cursor
document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Track mouse movement for the trail effect
document.addEventListener('mousemove', (e) => {
    cursorTrail.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// Smooth animation for cursor trail
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;
const delay = 0.05;

function animateTrail() {
    trailX += (mouseX - trailX) * delay;
    trailY += (mouseY - trailY) * delay;
    cursorTrail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
    requestAnimationFrame(animateTrail);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Initialize animation
animateTrail();







// Function to detect when the About section is in view
function handleScroll() {
    const aboutSection = document.querySelector('#about');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight / 1.2;

    if (sectionTop < triggerHeight) {
        aboutSection.classList.add('visible');
    } else {
        aboutSection.classList.remove('visible');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);






// for trigrring animation in services container 
document.addEventListener('scroll', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
    const section = document.querySelector('.services-container');
    
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Slightly earlier trigger
    
    if (sectionTop < screenPosition) {
        serviceBoxes.forEach(box => box.classList.add('show'));
    }
});






// For portfolio section

function showProjects(type) {
    // Hide all project card groups
    const allCards = document.querySelectorAll('.project-cards');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.portfolio-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the relevant project cards
    if (type === 'all') {
        document.querySelector('.project-cards.all').classList.add('active');
    } else {
        document.querySelector(`.project-cards.${type}`).classList.add('active');
    }

    // Set active class on the clicked button
    const activeButton = document.querySelector(`.portfolio-btn[onclick*="${type}"]`);
    activeButton.classList.add('active');
}

// Initialize by showing all projects
document.addEventListener('DOMContentLoaded', () => {
    showProjects('all');
});







