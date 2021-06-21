  // on viens chercher notre liste et nos element
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

  // variable pour savoir quelle est le dernier element clické
  let lastCheck

    // on vas dire pour chaque element si il est checké ou pas
  function handleCheck(e){
    // si on click sur shift on viens prendre l'ensemble des element jusquau dernier
    let inBetween = false
    if(e.shiftKey && this.checked){
      checkboxes.forEach(checkbox => { //viens chercher les element clické pendant shift
        if(checkbox === this || checkbox === lastCheck){
          inBetween = !inBetween
        }
        if(inBetween){
          checkbox.checked = true
        }
      })
    }

    lastCheck = this

  }


  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))