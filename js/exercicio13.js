let quantidade;

quantidade = parseInt(prompt("Quantas unidades de maçã você irá comprar: "))

if (quantidade<12){
    alert("Você irá pagar: "+(1.30*quantidade)+"R$")
} else{
    alert("Você irá pagar: "+quantidade+"R$")
}