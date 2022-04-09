let salario_fixo, salario_de_vendas, salario_final;

salario_fixo=parseFloat(prompt("Digite o valor do seu salário fixo: "))
salario_de_vendas=parseFloat(prompt("Digite o valor seu valor de vendas: "))

if (salario_de_vendas <= 1500){
    salario_final = (3/100*salario_de_vendas)+salario_fixo;
    alert("Seu salário mais a comissão desse mês é de: " +salario_final+"R$")
}else{
    salario_final = (5/100*salario_de_vendas)+salario_fixo;
    alert("Seu salário mais a comissão desse mês é de: " +salario_final+"R$")
}