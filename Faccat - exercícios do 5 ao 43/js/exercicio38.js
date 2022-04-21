let a,b,c,mens;

a=parseInt(prompt("Digite um valor inteiro de um dos lados do seu triângulo: "))
b=parseInt(prompt("Digite um valor inteiro de um dos lados do seu triângulo: "))
c=parseInt(prompt("Digite um valor inteiro de um dos lados do seu triângulo: "))

if (a<(b+c) && b <(a+c) && c <(a+b)){
    if (a==b && b==c){
        alert("Triângulo Equilátero");
    }else if (a==b || b==c || a==c){
        alert("Triângulo Isóceles");
    }else{
        alert("Triângulo Esaleno");
    }
}else{
   alert("Não é possivel formar um triângulo");
}

/* A   B   C   Mens
   1   2   3   Não forma um triângulo
   3   4   5   Escaleno
   2   2   4   Não forma um triângulo
   4   4   4   Equilátero
   5   3   3   Isóceles
*/