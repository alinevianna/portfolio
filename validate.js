//declaration of variables
const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const botaoEnviar = document.getElementById("btnSend");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("input", () => verificaCamposPreenchidos());
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

//checks and validates the field
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

    if (!validadorDeInput || verificaCamposPreenchidos()) {
        mensagemErro.textContent = mensagem;
        document.getElementById("btnSend").disabled
    } else {
        mensagemErro.textContent = "";
    }

}

//checks that all mandatory fields are filled in correctly
function verificaCamposPreenchidos() {
    let todosCamposValidos = true;
    camposDoFormulario.forEach(campo => {
        if (!campo.checkValidity()) {
            todosCamposValidos = false;
        }
    })

    if (todosCamposValidos == true) {
        botaoEnviar.removeAttribute('disabled');
        return true;
    }
}
