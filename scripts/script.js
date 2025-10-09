let cepDoc = document.getElementById("cepValidation").value;
function buscaCep(cep) {
    cep = cepDoc;
    $.getJSON(`https://viacep.com.br/ws/${cep}/json`, (response) => console.log(response));
}

buscaCep();