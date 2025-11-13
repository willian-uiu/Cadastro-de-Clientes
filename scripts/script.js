// Mascara do CEP
$(document).ready(function () {
    $('.cep').mask('00000-000');
});

// CÓDIGO QUE VALIDA SE OS CAMPOS ESTÃO PREENCHIDOS
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



function buscaCEP() {
    let cepDoc = document.getElementById("cepValidation").value;
    $.getJSON(`https://viacep.com.br/ws/${cepDoc}/json`, (response) => {
        if (response.erro == "true") {
            document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">CEP inválido!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
            document.getElementById("addressValidation").value = null;
            document.getElementById("brotherHoodValidation").value = null;
            document.getElementById("cityValidation").value = null;
            document.getElementById("ufValidation").value = null;
            document.getElementById("numberValidation").disabled = true;
        } else {
            document.getElementById("addressValidation").value = response.logradouro;
            document.getElementById("brotherHoodValidation").value = response.bairro;
            document.getElementById("cityValidation").value = response.localidade;
            document.getElementById("ufValidation").value = response.uf;
            document.getElementById("numberValidation").disabled = false;
        }

    }
    ).fail(() => {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">CEP inválido!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    })
}


// Array de Clientes
var clientes = []

//OnLoad
loadClientes();

function loadClientes() {
    for (let cliente of clientes) {
        addNewRow(cliente);
    }
}

function addNewRow(cliente) {
    var table = document.getElementById("tabela");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(cliente.id);
    var nomeNode = document.createTextNode(`${cliente.nome} ${cliente.sobrenome}`);
    var cepNode = document.createTextNode(cliente.CEPcliente);
    var logradouroNode = document.createTextNode(`${cliente.logradouro}, N: ${cliente.numero}`);
    var bairroNode = document.createTextNode(cliente.bairro);
    var cidadeNode = document.createTextNode(cliente.cidade);
    var estadoNode = document.createTextNode(cliente.estado);

    newRow.insertCell().appendChild(idNode);
    // Nome do aluno
    newRow.insertCell().appendChild(nomeNode);

    // Logradouro do cliente
    var cell1 = newRow.insertCell();
    cell1.className = "d-none d-md-table-cell";
    cell1.appendChild(logradouroNode);

    // CEP do cliente
    var cell2 = newRow.insertCell();
    cell2.className = "d-none d-md-table-cell";
    cell2.appendChild(cepNode);

    // Bairro do cliente
    var cell3 = newRow.insertCell();
    cell3.className = "d-none d-md-table-cell";
    cell3.appendChild(bairroNode);

    // Cidade do cliente
    var cell4 = newRow.insertCell();
    cell4.className = "d-none d-md-table-cell";
    cell4.appendChild(cidadeNode);

    var cell5 = newRow.insertCell();
    cell5.className = "d-none d-md-table-cell";
    cell5.appendChild(estadoNode);

}


function save() {
    if (document.getElementById("addressValidation").value === "") {
        document.getElementById("error2").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">Preencha um CEP válido!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
        document.getElementById("cepValidation").value = "";
        return;
    }

    var cliente = {
        id: clientes.length + 1,
        nome: document.getElementById("NameValidation").value,
        sobrenome: document.getElementById("lastnameValidation").value,
        CEPcliente: document.getElementById("cepValidation").value,
        logradouro: document.getElementById("addressValidation").value,
        numero: document.getElementById("numberValidation").value,
        bairro: document.getElementById("brotherHoodValidation").value,
        cidade: document.getElementById("cityValidation").value,
        estado: document.getElementById("ufValidation").value
    }

    addNewRow(cliente);
    clientes.push(cliente);

    document.getElementById("formulario").reset();
}

