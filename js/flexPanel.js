    // on viens chercher tous nos element qui vont etre animé
    const panels = document.querySelectorAll('.panel')

    // on vas venir rajouter la class open au element clické
    function toggleOpen(){
      this.classList.toggle('open')
    }

    // on vas venir rajouter la class open-active a notre texte
    function toggleActive(e){
      if(e.propertyName.includes('flex')){
      this.classList.toggle('open-active')}
    }

    // on vas venir ecouter le click sur chaque element et lancer la function toggleOpen
    panels.forEach(panel => panel.addEventListener('click', toggleOpen))

    // on vas venir ecouter la fin de l'animation pour faire venir notre texte
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
