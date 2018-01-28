// TODO:
// - contact tovchluur darahad mail yawuulah ruu usreh
// huudas shiljihed lazy load hiih

import { featuredArticles } from './data.js'
import Parallax from 'parallax-js'

window.location.pathname == '/' ? featuredArticles.map((post, i) => {

  const item = `<article class="card"> 
  <figure> <img src="${post.img}" alt="" srcset=""></figure>
  <div class="card-description">
  <a href="/post/${post.id}">
  <h2>${post.title}</h2>
  </a><h3>${post.category}</h3></div></article>`

  document.getElementById('article-section').innerHTML += item
}) : console.log(window.location.pathname);

window.location.pathname == '/work' ? featuredArticles.map((post, i) => {

  const item = `<article class="card"> 
  <figure> <img src="${post.img}" alt="" srcset=""></figure>
  <div class="card-description">
  <a href="/post/${post.id}">
  <h2>${post.title}</h2>
  </a><h3>${post.category}</h3></div></article>`

  document.getElementById('article-section').innerHTML += item
}) : console.log(window.location.pathname);


if (window.location.pathname.indexOf('post') === 1) {
  let path = window.location.pathname
  let id = path.slice(-1)
  fetchArticle(id)
} else {
  null
}

function fetchArticle (id) {
  var article = featuredArticles[--id]
  document.getElementById('title').innerHTML = article.title
  document.getElementById('date').innerHTML = article.date
  document.getElementById('post-content').innerHTML = article.content
  document.getElementById('img').src = article.img
}

let menuToggler = document.getElementById('menuToggler')
let menuTogglerLabel = document.getElementById('menuTogglerLabel')
let sidebar = document.getElementById('sidebar')
let menuItems = document.getElementsByClassName('menu__link')

menuToggler.addEventListener('change', function () {
  if (menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true')
    sidebar.setAttribute('aria-hidden', 'false')
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false')
    sidebar.setAttribute('aria-hidden', 'true')
  }

  for (let menuItem of menuItems) {
    if (menuToggler.checked) {
      menuItem.setAttribute('tabindex', '0')
    } else {
      menuItem.setAttribute('tabindex', '-1')
    }
  }
})

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: false
});

parallaxInstance.limit(false, 0.1)
