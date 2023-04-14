let acept = document.querySelector('.button')
let card = document.querySelector('#card')

acept.addEventListener('click', function() {
  card.style.display = 'none';
  localStorage.aceito = 'sim'
})

if (localStorage.aceito == 'sim') {
    card.style.display = 'none'
} else {
    card.style.display = 'block'
}