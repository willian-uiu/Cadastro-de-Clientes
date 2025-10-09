let cepDoc = document.getElementById("cepValidation").value;
function buscaCep() {
    $.getJSON(`https://viacep.com.br/ws/${cepDoc}/json`, (response) => {
        document.getElementById("addressValidation").value = response.logradouro;
        document.getElementById("brotherHoodValidation").value = response.bairro;
        document.getElementById("cityValidation").value = response.localidade;
        document.getElementById("ufValidation").value = response.uf;
    }
    )
}

buscaCep();