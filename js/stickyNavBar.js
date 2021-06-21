// Quand l'utilisateur scroll , on viens éxecuter la fonction
window.onscroll = function(){myNavBar()}

// On viens récuperer notre navBar
var navbar = document.querySelector('#main')

// On viens chercher la position au top
var sticky = navbar.offsetTop

// on viens ajouter la class sticky quand la position top est atteinte, on la retire quand ca redescent
function myNavBar(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else{
    navbar.classList.remove("sticky")
  }
}
