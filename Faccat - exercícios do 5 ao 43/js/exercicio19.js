let hora_mes, salario_hora, salario;

hora_mes=parseInt(prompt("Horas trabalhada em 1 mês: "))
salario_hora=parseInt(prompt("Salário por hora trabalhada: "))

if (hora_mes <= 160){
    alert("Seu salário vai ser de: " + (hora_mes*salario_hora) + "R$.")
} else{
    salario = (hora_mes*salario_hora)+hora_mes-160*(50/100*salario_hora)
    alert("Seu salário vai ser de: " + salario + "R$.")
}