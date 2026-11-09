const botaoVoltarTopo = document.getElementById("voltar-topo");
// Afonso Andrade - 2026-06-05

function atualizarBotaoVoltarTopo() {
    botaoVoltarTopo.hidden = window.scrollY < 300;
}

const nomeBiblioteca = "Biblioteca do Bairro";
const morada = "Rua Principal, nº 10";
let livrosDisponiveis = 1250;

console.log("=== EXERCÍCIO 01 ===");
console.log("Bem-vindo à Biblioteca do Bairro!");
console.log("Anos desde a abertura (1987):", 2026 - 1987);

console.log("\n=== EXERCÍCIO 02 ===");
livrosDisponiveis -= 3;
console.log("Livros após 3 empréstimos:", livrosDisponiveis);
console.log(`A ${nomeBiblioteca} tem ${livrosDisponiveis} livros disponíveis.`);
console.log("Tipo de 'nomeBiblioteca':", typeof nomeBiblioteca);
console.log("Tipo de 'morada':", typeof morada);
console.log("Tipo de 'livrosDisponiveis':", typeof livrosDisponiveis);
console.log("Nome em maiúsculas:", nomeBiblioteca.toUpperCase());

console.log("\n=== EXERCÍCIO 03 ===");
const dia = "quarta";
const hora = 14;
let estadoBiblioteca;

if (dia === "domingo") {
    estadoBiblioteca = "Fechada";
} else if (dia === "sábado") {
    if (hora >= 10 && hora < 13) {
        estadoBiblioteca = "Aberta";
    } else {
        estadoBiblioteca = "Fechada";
    }
} else {
    if (hora >= 9 && hora < 19) {
        estadoBiblioteca = "Aberta";
    } else {
        estadoBiblioteca = "Fechada";
    }
}

console.log(`Estado (${dia}, ${hora}h):`, estadoBiblioteca);

console.log("\n=== EXERCÍCIO 04 ===");
function calcularMulta(dias) {
    if (dias <= 15) {
        return 0;
    }
    return (dias - 15) * 0.50;
}

function estaAberta(diaSemana, horaAtual) {
    if (diaSemana === "domingo") return false;
    if (diaSemana === "sábado") return horaAtual >= 10 && horaAtual < 13;
    return horaAtual >= 9 && horaAtual < 19;
}

function formatarEuros(valor) {
    return `${valor.toFixed(2).replace(".", ",")} €`;
}

function mensagemMulta(dias) {
    const multa = calcularMulta(dias);
    if (multa === 0) {
        return "Sem multa";
    }
    return `Multa a pagar: ${formatarEuros(multa)}`;
}

window.addEventListener("scroll", atualizarBotaoVoltarTopo);
atualizarBotaoVoltarTopo();
console.log("Multa para 20 dias:", mensagemMulta(20));
console.log("Biblioteca aberta na terça às 10h?", estaAberta("terça", 10));

console.log("\n=== EXERCÍCIO 05 ===");
const livros = ["Os Maias", "Mensagem", "A Sibila", "Os Lusíadas", "Aparição"];
livros.push("Memorial do Convento", "Ensaio sobre a Cegueira");
console.log("Total de livros na lista:", livros.length);

console.log("Lista numerada de livros:");
livros.forEach((tituloLivro, indice) => {
    console.log(`${indice + 1}. ${tituloLivro}`);
});

const livrosLongos = livros.filter(titulo => titulo.length > 10);
console.log("Livros com mais de 10 letras:", livrosLongos);

botaoVoltarTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const livrosMaiusculas = livros.map(titulo => titulo.toUpperCase());
console.log("Livros em maiúsculas:", livrosMaiusculas);