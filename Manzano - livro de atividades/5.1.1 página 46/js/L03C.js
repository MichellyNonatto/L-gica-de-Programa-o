let contadora, soma, resultado;
soma = 0;
contadora = 0;
while(contadora < 501){
  if((contadora%2)==0){
      soma = soma+contadora
  }
  contadora++
  console.log(contadora+" e "+soma)
}

alert("O resultado da soma dos números pares de 1 á 500 é: "+soma)
