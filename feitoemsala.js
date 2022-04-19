const numero = parseInt(prompt("Digite um número: "))

switch (numero) {
    case 1:
        alert("Domingo")
        break;
    case 2:
        alert("Segunda")
        break;

    case 3:
        alert("Terça")
        break;

    case 4:
        alert("Quarta")
        break;

    case 5:
        alert("Quinta")
        break;

    case 6:
        alert("Sexta")
        break;

    case 7:
        alert("Sábado")
        break;

    default:
        alert("Não possui dia")
        break;
}

if (new Date().getHours()<6) {

    alert("Bom Madrugada");

} else if (new Date().getHours()<12) {

        alert("Bom Dia! O Sol já nasceu lá na fazendinha. Acorda o bezerro e a vaquinha. Que já cocoricou dona galinha.");

} else if(new Date().getHours()<18) {

    alert("Boa Tarde");

}else{

    alert("Boa Noite");
}
var hora =(new Date())
alert(hora)