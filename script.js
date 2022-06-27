var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

var card = document.querySelector(".first-card")
var verify = document.querySelector(".verify")
function commande(){
  card.classList.add("active")
  verify.classList.add("active")
}

var count = document.getElementById("count")
let i = 5

function counter (){

  i++
  count.innerHTML = i
}