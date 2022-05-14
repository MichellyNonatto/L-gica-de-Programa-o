let contadora, dividendo, quociente, divisor, multiplicador,valor;

dividendo = parseInt(prompt("Digite o dividendo: "));
divisor = parseInt(prompt("Digite o divisor: "));

valor = divisor;
quociente = 1;
multiplicador = 0;

while(multiplicador < dividendo){
    multiplicador = multiplicador + divisor;
    divisor = multiplicador;
    quociente = quociente+1;
}

alert(dividendo+" / "+valor+" = "+quociente);
alert(quociente+" quociente "+divisor+" divisor.");