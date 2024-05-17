const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const foto = document.querySelector('.title__profile')
const formDisplay = document.querySelector('.formcontato__text')
const formBtn = document.querySelector('.formcontato__botao')
const formSend = document.querySelector('.form__contato__enviado')
const formBack = document.querySelector('.formcontato__botao_back')

$checkbox.addEventListener('change', function () {
    $html.classList.toggle('dark-mode');
    if ($html.className == 'dark-mode') {
        foto.setAttribute('src', `assets/profile1.jpg`)
    } else {
        foto.setAttribute('src', `assets/profile2.jpg`)
    }
})

formBtn.addEventListener("click", () => {

    if (validaCampo() == true) {
        formDisplay.classList.add('active')
        formSend.classList.remove('active')
    }
})

formBack.addEventListener("click", () => {
    formDisplay.classList.remove('active')
    formSend.classList.add('active')
    document.getElementById("form").reset();
})