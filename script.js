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

var image = document.querySelector(".image")
var frame = document.querySelector(".frame")
function video () {
  image.classList.toggle("active")
  frame.classList.toggle("active")
}

var count = document.getElementById("count")
let i = 5

function counter (){

  i++
  count.innerHTML = i
}

var number0 = document.getElementById("number0")
var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")


function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function numberRandom (){
  let number = random(500, 1000000)
  let numberC = random(500, 100000)
  let numberCh = random(300, 10000)
  number0.innerHTML = number
  number1.innerHTML = numberC
  number2.innerHTML = numberCh
}







function newsletter(){
  var mail = document.getElementById("mail").value
  var affichage = document.getElementById("affichageMail")
  var inscription = document.querySelector(".inscription")

  if (mail == "") {
    document.getElementById("inscription").disabled = false
  } else if (!mail == "") {
    document.getElementById("inscription").disabled = true
    inscription.classList.toggle("active")
    affichage.innerHTML = "Merci " + mail 
  }

}





