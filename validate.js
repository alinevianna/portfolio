const camposDoFormulario = document.querySelectorAll("[required]");
const camposPreenchidos = document.querySelectorAll('.formcontato__input')
const formulario = document.querySelector("[data-formulario]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput || validaCampo()) {
        mensagemErro.textContent = mensagem;
        document.getElementById("btnSend").disabled
    } else {
        mensagemErro.textContent = "";
    }

}

// function analisaCampo() {
//     if (camposPreenchidos.value == null || camposPreenchidos.value == '') {
//         console.log('vazio')
//     } else {
//         console.log('preenchido')
//     }
// }

for (let contador = 0; contador < camposPreenchidos.length; contador++) {

    const campos = camposPreenchidos[contador]

    function validaCampo() {
        {
            if (campos.value != '') {
                return true;
            } else {
                return false;
            }
        }
    }
}



