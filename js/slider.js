  // on viens chercher notre slider
  const slider = document.querySelector('.sliders')

  // etablir une constante qui vas nous dire si notre scroll-click est actif ou pas
  let isDown = false

  // on viens chercher notre point d'encrage
  let startX

  // on viens chercher la position initiale quand on vas scroll
  let scrollLeft

  slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('active')
    // 
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })
  slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX)*2;
    slider.scrollLeft = scrollLeft - walk
  })
