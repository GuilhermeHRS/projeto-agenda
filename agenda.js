var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar   = document.getElementById('buttonCancelar');
var novoEvento       = document.getElementById('novoEvento');
var formNovoEvento   = document.getElementById('formNovoEvento');

function mostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
}

function cancelarNovoEvento() {
    novoEvento.classList.add('d-none');
}

function salvarNovoEvento(event) {
    console.log(event);
    event.preventDefault();
    console.log('Salvar Novo Evento');
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', cancelarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);