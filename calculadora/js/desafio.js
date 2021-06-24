var inputValorHora = document.querySelector("#valor-hora");
var inputHoraProjeto = document.querySelector("#horas-projeto");
var calculo = document.querySelector('#resposta');


function calcular() {
    var quantidade = inputValorHora.value;
    var horas = inputHoraProjeto.value;
    var total = quantidade * horas;

    calculo.textContent = 'R$' + total.toFixed(2);

}