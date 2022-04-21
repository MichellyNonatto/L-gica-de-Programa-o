let usuario = 1234;
let senha = 9999;
let nome, acesso1,acesso2;

nome=prompt("Digite seu nome aqui: ")
acesso1=parseInt(prompt("Digite seu usuário: "))

if (acesso1==1234){
    acesso2=parseInt(prompt("Digite sua senha: "))

    if (acesso2==9999){
        alert("Acesso permitido. Seje bem-vindo "+nome)
    }else{
        alert("Acesso negado! Senha incorreta.")
    }
}else{
    alert("Acesso negado! ID de usuário incorreta.")
}




