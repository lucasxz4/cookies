let cookies = document.querySelector(".cookies");
let acept = document.querySelector(".button");

acept.addEventListener('click', function() {
    localStorage.lgpd =  'sim';
    cookies.style.display = 'none';
})

if (localStorage.lgpd == 'sim') {
    cookies.style.display = 'none'
} else {
    cookies.style.display = 'flex'
}