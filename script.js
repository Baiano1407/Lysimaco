const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você pode realizar todos os sonhos que almeja! Basta acreditar em si mesmo.",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Agradeço pelas palavras de apoio."
            },
            {
                texto: "Talvez não consigo...",
                afirmacao: "Fico inseguro por talvez não conseguir realizar."
            }
        ]
    },
    {
        enunciado: "Todas as pessoas tem potencial para realizar tudo que quiser. Após ouvir essas palavras, você encontra uma pessoa triste e desanimada na rua. O que você faz?",
        alternativas: [
            {
                texto: "Conversa com essa pessoa e lhe dá motivação para seguir na vida, após uma longa conversa.",
                afirmacao: "Se sente feliz por ter ajudado aquela pessoa"
            },
            {
                texto: "Passa como se não tivesse visto nada e segue sua caminhada para casa.",
                afirmacao: "Se sentiu triste e começou a refletir sobre seu erro depois."
            }
        ]
    },
    {
        enunciado: "Às vezes, é fácil ficar desanimado quando os resultados não aparecem rapidamente. Mas lembre-se de que o progresso pode ser mais lento do que imaginamos. Não é verdade?",
        alternativas: [
            {
                texto: "Não, às vezes acho que estou apenas perdendo tempo.",
                afirmacao: "O sucesso não acontece da noite para o dia. Cada pequeno passo conta e é importante reconhecer isso."
            },
            {
                texto: "Sim, mas o processo parece ser muito demorado.",
                afirmacao: "O que importa é que você está se esforçando."
            }
        ]
    },
    {
        enunciado: "Cada pequeno passo conta e é importante reconhecer isso, obstáculos são uma parte natural do processo. Eles não significam que você está no caminho errado, na verdade, eles muitas vezes nos ajudam a crescer e a aprender mais sobre nós mesmos.",
        alternativas: [
            {
                texto: "em, eu queria realmente fazer a diferença na minha área e sentir que estou contribuindo com algo significativo.",
                afirmacao: "Continue nesse caminho, tem dias que são difíceis de lidar, mas sempre é um passo mais perto do objetivo"
            },
            {
                texto: "Às vezes, parece que estou me afastando disso.",
                afirmacao: "Não fique assim!"
            }
        ]
    },
    {
        enunciado: "Lembre-se do impacto positivo que você já causou e das razões que o levaram a iniciar essa jornada. É normal que o caminho não seja sempre linear. O importante é manter o foco e continuar avançando, mesmo que devagar.",
        alternativas: [
            {
                texto: "Você tem razão. Talvez eu precise revisar meus objetivos e ajustar minha abordagem.",
                afirmacao: "Decidiu seguir em frente mesmo com as dificuldades.",
            },
            {
                texto: "Às vezes, um pouco de reflexão pode ajudar a clarear a visão.",
                afirmacao: "Começou a pensar sobre suas atitudes e isso te fez melhorar."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
