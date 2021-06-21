function playSound(e) {
   // ON VIENS CHERCHER NOTRE SON
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  
    // ON VIENS CHERCHER NOTRE TOUCHE
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    // SI ON touche une autre k il ne se passe rien
    if(!audio) return
    audio.currentTime = 0
    // ON AJOUTE LA CLASS PLAYING QUAND ON PRESS
    key.classList.add('playing')
    // ON VIENS JOUER LE SON A LA PRESSION
    audio.play();
  }
  // fonction pour retirer ma class playing
  function removeTransition(e){
    e.target.classList.remove('playing')
  }
  // on viens faire un tableau de nos div
  const keys = Array.from(document.querySelectorAll('.key'))
  // On vas dire que a la fin de chaque annimation on lance la fonction remove
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound)