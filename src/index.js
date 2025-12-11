import './style.css';
import Logo from './assets/restaurant-logo.png';
import loadHome from "./init-page.js";
import loadMenu from "./menu-page.js";
import loadAbout from "./about-page.js"

// Set the logo
const navLogo = document.querySelector('.logo img');
navLogo.src = Logo;


function loadPage(tab) {
  if (tab.toLowerCase() === 'home') {
    loadHome();

    const viewMenuBtn = document.querySelector('.headline > div > button:last-child');
    if (viewMenuBtn) {
      viewMenuBtn.addEventListener('click', () => loadPage('menu'));
    }

  } else if (tab.toLowerCase() === 'menu') {
    loadMenu();

  } else if (tab.toLowerCase() === 'about') {
    loadAbout();
  }

  const orderNowBtn = document.querySelector('.order-btn');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      window.open('https://www.ubareats.com', '_blank');
    });
  }
}

// Event listeners for nav buttons
const homeBtn = document.querySelector('#nav-btn > button:first-child');
if (homeBtn) homeBtn.addEventListener('click', () => loadPage('home'));

const menuBtn = document.querySelector('#nav-btn > button:nth-child(2)');
if (menuBtn) menuBtn.addEventListener('click', () => loadPage('menu'));

const aboutBtn = document.querySelector('#nav-btn > button:last-child');
if (aboutBtn) aboutBtn.addEventListener('click', () => loadPage('about'));

// Load Home by default
loadPage('home');

console.log("Hello, world!!");
