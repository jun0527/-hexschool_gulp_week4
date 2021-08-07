"use strict";

var menuItem = document.querySelectorAll('.js-menu a');
var productsNav = document.querySelector('.js-productsNav');
var productsNavItem = document.querySelectorAll('.js-productsNav a');
var productsPages = document.querySelectorAll('.js-productsPages .js-page');
var main = document.querySelector('main'); //在menu加上active

function getActiveData() {
  menuItem.forEach(function (item) {
    if (item.getAttribute('data-current') === item.getAttribute('data-name')) {
      item.setAttribute('class', 'active');
    }
  });
}

getActiveData(); //產品業分頁切換

if (main.getAttribute('class') === 'products') {
  productsNav.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.getAttribute('data-btnName') === null) {
      return;
    }

    productsNavItem.forEach(function (item) {
      if (item.getAttribute('data-btnName') === e.target.getAttribute('data-btnName')) {
        item.setAttribute('class', 'active');
      } else {
        item.setAttribute('class', '');
      }
    });
    productsPages.forEach(function (item) {
      if (e.target.getAttribute('data-btnName') === item.getAttribute('data-pageName')) {
        item.setAttribute('class', 'js-page show');
      } else {
        item.setAttribute('class', 'js-page hide');
      }
    });
  });
}
//# sourceMappingURL=all.js.map
