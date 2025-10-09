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
        document.getElementById("addressValidation").value = response.logradouro;
        document.getElementById("brotherHoodValidation").value = response.bairro;
        document.getElementById("cityValidation").value = response.localidade;
        document.getElementById("ufValidation").value = response.uf;
    }
    )
}