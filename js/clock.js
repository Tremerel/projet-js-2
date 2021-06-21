    // on vas chercher nos aiguilles second/minute/heures
    const secondHand = document.querySelector('.second-hand')
    const minuteHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')

  function setDate(){
    // on viens chercher l'heure actuel
    const now = new Date()

    // on viens dire a notre aiguille de tourner sur 360° sur 60s en la faisant démarrer a 90°
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60)*360)+90
    // on viens faire tourner notre aiguille seconde
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    // on viens dire a notre aiguille de tourner sur 360° sur 3600s en la faisant démarrer a 90°
    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes/60)*360)+ ((seconds/60)*30) +90
    // on viens faire tourner notre aiguille minute
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    // on viens dire a notre aiguille de tourner sur 360° sur 43200s en la faisant démarrer a 90°
    const hours = now.getHours()
    const hoursDegrees = ((hours/12)*360)+ ((minutes/60)*30) +90
    // on viens faire tourner notre aiguille heure
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  }

    // on viens activer notre function toute les 1s
    setInterval(setDate, 1000)