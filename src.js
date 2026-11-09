// ===== Funções da biblioteca =====
 
// 01 - 0,50 € por dia a partir do 16.º dia (os primeiros 15 dias não pagam)
function calcularMulta(dias) {
    if (dias <= 15) {
        return 0;
    }
    return (dias - 15) * 0.5;
}
 
// 02 - Horário: Seg-Sex 09h-19h, Sábado 10h-13h, Domingo fechado
// dia: 0 = domingo, 1 = segunda, ..., 6 = sábado (como em Date.getDay())
// hora: número, por exemplo 9.5 para as 09h30
function estaAberta(dia, hora) {
    if (dia >= 1 && dia <= 5) {
        return hora >= 9 && hora < 19;
    }
    if (dia === 6) {
        return hora >= 10 && hora < 13;
    }
    return false; // domingo
}
 
// 03 - Ex.: 3.5 -> "3,50 €"
function formatarEuros(valor) {
    return valor.toFixed(2).replace(".", ",") + " €";
}
 
// 04 - Ex.: 22 dias -> "Multa a pagar: 3,50 €"
function mensagemMulta(dias) {
    const multa = calcularMulta(dias);
    if (multa === 0) {
        return "Sem multa";
    }
    return "Multa a pagar: " + formatarEuros(multa);
}
 
// ===== 05 - Testes (três valores por função) =====
 
console.log("--- calcularMulta ---");
console.log(calcularMulta(10)); // 0
console.log(calcularMulta(16)); // 0.5
console.log(calcularMulta(22)); // 3.5
 
console.log("--- estaAberta ---");
console.log(estaAberta(2, 10));   // terça às 10h  -> true
console.log(estaAberta(6, 14));   // sábado às 14h -> false
console.log(estaAberta(0, 11));   // domingo       -> false
 
console.log("--- formatarEuros ---");
console.log(formatarEuros(3.5));  // "3,50 €"
console.log(formatarEuros(0));    // "0,00 €"
console.log(formatarEuros(12.3)); // "12,30 €"
 
console.log("--- mensagemMulta ---");
console.log(mensagemMulta(5));    // "Sem multa"
console.log(mensagemMulta(22));   // "Multa a pagar: 3,50 €"
console.log(mensagemMulta(30));   // "Multa a pagar: 7,50 €"
 
 
// ===== Lista de leituras =====
 
// 01 - Array com cinco títulos
const leituras = [
    "Os Maias",
    "Mensagem",
    "O Principezinho",
    "Ensaio sobre a Cegueira",
    "A Cidade e as Serras"
];
 
// 02 - Juntar mais dois com push e mostrar quantos são
leituras.push("Memorial do Convento");
leituras.push("Amor de Perdição");
console.log("--- Lista de leituras ---");
console.log("Total de títulos: " + leituras.length); // 7
 
// 03 - Lista numerada
for (let i = 0; i < leituras.length; i++) {
    console.log((i + 1) + ". " + leituras[i]);
}
 
// 04 - Com filter, só os títulos com mais de 10 letras
const titulosLongos = leituras.filter(function (titulo) {
    return titulo.length > 10;
});
console.log("Títulos com mais de 10 letras:", titulosLongos);
 
// 05 - Com map, títulos em maiúsculas
const titulosMaiusculas = leituras.map(function (titulo) {
    return titulo.toUpperCase();
});
console.log("Em maiúsculas:", titulosMaiusculas);
 
 
// ===== Botões de inscrição =====
 
const botoesInscricao = document.querySelectorAll(".botao");
const mensagemInscricao = document.getElementById("mensagem-inscricao");
 
botoesInscricao.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const evento = botao.dataset.evento;
        botao.textContent = "Inscrito ✓";
        botao.disabled = true;
        mensagemInscricao.textContent = "Inscrição confirmada: " + evento;
    });
});