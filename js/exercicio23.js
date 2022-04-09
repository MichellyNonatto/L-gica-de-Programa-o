let atual, maxima, minimo, produto, media;

produto=prompt("Nome do produto: ")
atual=parseFloat(prompt("Quantidade atual de "+produto+": "))
minimo=parseFloat(prompt("Quantidade minima para amazernar o "+produto+" no seu estoque: "))
maxima=parseInt(prompt("Quantidade maxima para amazernar o "+produto+" no seu estoque: "))

media=(maxima+minimo)/2;

if (atual<media){
    alert("Compre mais "+produto)
}else{
    alert("Não é necessário comprar mais "+produto)
}