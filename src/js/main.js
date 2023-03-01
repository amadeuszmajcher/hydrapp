"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const buttonAdd = document.querySelector('.button--add__js');
const buttonDelete = document.querySelector('.button--delete__js');
const counter = document.querySelector('.glass--number__js');
const key = new Date().toISOString().slice(0,10);


if(!localStorage.getItem(key)){
  localStorage.setItem(key, 0);
  counter.innerHTML = "0";
} else{
  counter.innerHTML = localStorage.getItem(key);
}


buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
})

buttonDelete.addEventListener('click', (e) => {
  const counterValue = parseInt(counter.innerHTML);
  if (counterValue > 0){
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
  counter.innerHTML = counterValue - 1;
  }
})
