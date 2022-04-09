let ano_nascimento, ano_atual, idade;

ano_atual = parseInt(prompt("Digite o ano ATUAL em que está: "))
ano_nascimento = parseInt(prompt("Digite o ano de seu NASCIMENTO: "))

idade = ano_atual - ano_nascimento;

if (idade<16) {
    alert("Você não tem idade para votar.")
} else if (idade > 16 & idade < 18) {
    alert("Você poderá votar, mas não é obrigatório.")
}else{
    alert("Você pode votar, isso é uma obrigação e direito.")
}