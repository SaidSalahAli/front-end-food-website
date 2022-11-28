let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');
let menuBtn= document.querySelector('#menu-btn');
let userBtn = document.querySelector('#user-btn');

menuBtn.onclick = function (){
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

userBtn.onclick = function (){
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = function (){
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;

function searchData(value){
   console.log(value)

}