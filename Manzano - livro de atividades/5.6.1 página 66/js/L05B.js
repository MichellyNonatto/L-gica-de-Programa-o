let valor, contadora, resultado;

valor = parseInt(prompt("Insira um valor: "));
contadora = 0;

while(contadora < 11){
    resultado = contadora * valor;
    console.log(contadora+" x "+valor+" = "+resultado);
    contadora++
}

alert("Confira a tabuáda do valor "+valor+" em inspecionar.");