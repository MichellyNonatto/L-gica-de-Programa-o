let codigo, nascimento, ano_de_empresa,ano_aposentar, ano_empresa, ano_atual;

codigo = prompt("Informe o código do operário: ")
nascimento = parseInt(prompt("Informe a ANO de nascimento: "))
ano_de_empresa = parseInt(prompt("Informe o ano de entrada do operário "+codigo))
ano_atual = parseInt(prompt("Digite o ano atual: "))

ano_aposentar = (ano_atual - nascimento);
ano_empresa = (ano_atual - ano_de_empresa);

if (ano_aposentar>=65){
    alert("O operário "+codigo+" já poderá dar entrada em sua aposentadoria por idade mínima.")

}else if (ano_de_empresa>=30){
    alert("O operário "+codigo+" já poderá dar entrada em sua aposentadoria por mínima de 30 anos trabalhados.")

}else if(ano_aposentar>=60 && ano_de_empresa>=25){
    alert("O operário "+codigo+" já poderá dar entrada em sua aposentadoria por idade de 60 anos ou mais e mínimo de 25 ano anos trabalhados.")
    
}else{
    alert("O operário " +codigo+" não pode se aposentar. Sem requerimentos básicos.")
}