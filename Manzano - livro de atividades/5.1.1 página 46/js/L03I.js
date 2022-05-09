let valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, soma, media;

valor1= parseFloat(prompt("Digite 10 valores inteiros: 1/10"));
valor2= parseFloat(prompt("Digite 10 valores inteiros: 2/10"));
valor3= parseFloat(prompt("Digite 10 valores inteiros: 3/10"));
valor4= parseFloat(prompt("Digite 10 valores inteiros: 4/10"));
valor5= parseFloat(prompt("Digite 10 valores inteiros: 5/10"));
valor6= parseFloat(prompt("Digite 10 valores inteiros: 6/10"));
valor7= parseFloat(prompt("Digite 10 valores inteiros: 7/10"));
valor8= parseFloat(prompt("Digite 10 valores inteiros: 8/10"));
valor9= parseInt(prompt("Digite 10 valores inteiros: 9/10"));
valor10= parseFloat(prompt("Digite 10 valores inteiros: 10/10"));

soma = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10;
media = soma/10;

alert("O total somado é de: "+soma+". E a média é de: "+media);