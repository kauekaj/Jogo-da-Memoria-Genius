let order = [];
let clickOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const green = document.querySelector('#green')
const yellow = document.querySelector('#yellow')

//Cria ordem aleatória de cores
let shuffOrder = () => {
    let color = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`);
        nextLevel();
    }
}