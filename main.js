const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const foto = document.querySelector('.title__profile')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode');
    if ($html.className == 'dark-mode') {
        foto.setAttribute('src', `assets/profile1.jpg`)
    } else {
        foto.setAttribute('src', `assets/profile2.jpg`)
    }
})