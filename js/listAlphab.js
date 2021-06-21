const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Fonction qui vas nous permettre de retiré l'article a the ou an
 function strip(bandName){
   return bandName.replace(/^(a |the |an )/i, '').trim()
 }

// Fonction qui vas nous sortir la liste dans l'ordre alphabetique
const sortedBands = bands.sort(function(a, b){
  if(strip(a)>strip(b)){
    return 1
  }else {
    return -1
  }
})

// on viens l'afficher en html 
document.querySelector('#bands').innerHTML = 
sortedBands
.map(band=>`<li>${band}</li>`) // affichage liste
.join('')  // on enleve la virgule
