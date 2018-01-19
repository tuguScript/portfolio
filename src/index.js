import { featuredArticles } from "./data.js";



window.location.pathname == '/' ? featuredArticles.map((post, i) => {
    
  const item = `<article class="card"> 
  <figure> <img src="${post.img}" alt="" srcset=""></figure>
  <div class="card-description">
  <a href="/post/${post.id}">
  <h2>${post.title}</h2>
  </a><h3>${post.category}</h3></div></article>`
  
  document.getElementById('article-section').innerHTML += item;
}) : null;

let menuToggler = document.getElementById('menuToggler')
let menuTogglerLabel = document.getElementById('menuTogglerLabel');
let sidebar = document.getElementById('sidebar');
let menuItems = document.getElementsByClassName('menu__link');

menuToggler.addEventListener('change', function() {
  if(menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true');
    sidebar.setAttribute('aria-hidden', 'false');    
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }
  
  for(let menuItem of menuItems) {
    if(menuToggler.checked) {
      menuItem.setAttribute('tabindex', '0');
    } else {
      menuItem.setAttribute('tabindex', '-1');
    }
  }  
});


function hi() {
  console.log('loaded');
}