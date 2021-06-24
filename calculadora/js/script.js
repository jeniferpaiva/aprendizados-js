var inputquantidadeMes = document.querySelector("#ganho-mes");
var inputhorasDia = document.querySelector("#horas-dia");
var calculo = document.querySelector("#resposta")


function calcularValorHora (){
    var quantidade = inputQuantidadeMes.value;
    var horas = inputhorasDia.value;
    var horasMes = horas * 22;
    var total = quantidade/horasMes;

    calculo.textContent = "R$ " + total.toFixed(2);
    

}