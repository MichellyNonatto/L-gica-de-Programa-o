let contadora, nota, soma, media; 

contadora = -1;
nota = 1;
soma = 0;
media = 0;

while(nota > 0){
    nota = parseFloat(prompt("Digite uma valor inteiro positivo: "));
    console.log(nota);
    contadora++
    if(nota > 0){
    soma = soma + nota;
    }    
}

media = soma/contadora; 
alert("A média é de: "+media+" Você digitou o total de: "+contadora+" notas.");
alert("Confira as notas calculadas em inspesionar.")