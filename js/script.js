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
})();

let tabajos = document.querySelector('#base');
let plazo = document.querySelector('#plazo');
let formulario = document.querySelector('#formulario');
let extra = document.querySelectorAll('.extra');
//let galeria = document.querySelector('#galeria');
//let formu = document.querySelector('#formu');
//let tienda = document.querySelector('#ecom');
//let redes = document.querySelector('#redes');
//let mapa = document.querySelector('#localiz');
//let soporte = document.querySelector('#soporteweb');
let total = document.querySelector('#total');
let boton = document.querySelector('#boton');

formulario.addEventListener('submit', presu);

function presu(e) {
    e.preventDefault();

    let valorTrabajo = parseInt(tabajos.value);
    let valorPlazo = plazo.value;
    let valorExtra = 0;


    let desc = 0;
    if (valorPlazo == 0) {
        desc = 0;
    } else if (valorPlazo == 1) {
        desc = 0.05;
    } else if (valorPlazo == 2) {
        desc = 0.10;
    } else if (valorPlazo == 3) {
        desc = 0.15;
    } else {
        desc = 0.20;
    };

    /*     if (galeria.checked) {
            valorExtra += 400;
        };
        if (formu.checked) {
            valorExtra += 600;
        };
        if (tienda.checked) {
            valorExtra += 1000;
        };
        if (redes.checked) {
            valorExtra += 400;
        };
        if (mapa.checked) {
            valorExtra += 400;
        };
        if (soporte.checked) {
            valorExtra += 400;
        }; */

    for (let i = 0; i < extra.length; i++) {
        if (extra[i].checked) {
            valorExtra += parseInt(extra[i].value);
        }
    }


    console.log(valorExtra);

    total.value = valorTrabajo - (valorTrabajo * desc) + valorExtra + '€';

}