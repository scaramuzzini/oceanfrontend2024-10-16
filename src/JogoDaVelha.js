import { useState } from "react";

function Quadrado({quadrado, cliqueQuadrado}) {
    return (
        <button class="quadrado" 
            onClick={cliqueQuadrado}>
            {quadrado}
        </button>
    );
}

function Tabuleiro({vezDoX, quadrados, handleClick}) {

    const vencedor = verificarVencedor(quadrados);


    let mensagem = 'oi';
    if (vencedor) {
        mensagem = 'O vencedor é: ' + vencedor;
    } else {
        mensagem = 'Vez do ' + (vezDoX ? 'X' : 'O');
    }

    return (
        <>
            <h3>{mensagem}</h3>
            <div class="linha">
                <Quadrado quadrado={quadrados[0]} cliqueQuadrado={() => handleClick(0)} />
                <Quadrado quadrado={quadrados[1]} cliqueQuadrado={() => handleClick(1)}/>
                <Quadrado quadrado={quadrados[2]} cliqueQuadrado={() => handleClick(2)}/>
            </div>
            <div class="linha">
                <Quadrado quadrado={quadrados[3]} cliqueQuadrado={() => handleClick(3)}/>
                <Quadrado quadrado={quadrados[4]} cliqueQuadrado={() => handleClick(4)}/>
                <Quadrado quadrado={quadrados[5]} cliqueQuadrado={() => handleClick(5)}/>
            </div>
            <div class="linha">
                <Quadrado quadrado={quadrados[6]} cliqueQuadrado={() => handleClick(6)}/>
                <Quadrado quadrado={quadrados[7]} cliqueQuadrado={() => handleClick(7)}/>
                <Quadrado quadrado={quadrados[8]} cliqueQuadrado={() => handleClick(8)}/>
            </div>        
        </>
    );

}

function verificarVencedor(quadrados) {

  
    const combinacoesPremiadas = [
        //linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonais (dp e ds)
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i=0; i < combinacoesPremiadas.length; i++) {
        const [pa, pb, pc] = combinacoesPremiadas[i];
        
        if (quadrados[pa] && 
            quadrados[pa] == quadrados[pb]
            && quadrados[pb] == quadrados[pc]
        ) {
            return quadrados[pa];
        }
    }

    return null;

}

function Jogo() {
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [vezDoX,setVezDoX] = useState(true);
    function handleClick(indice) { // indice=0
        if (verificarVencedor(quadrados) || quadrados[indice]) { //quadrados[0]
            return; // saida da funcao
        }
        const novosQuadrados = quadrados.slice();
        novosQuadrados[indice] = vezDoX ? 'X' : 'O';
        setQuadrados(novosQuadrados);
        setVezDoX(!vezDoX);
    }

    function resetGame() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    return (
        <>
            <h1>Jogo da velha</h1>
            <button onClick={resetGame}>Reiniciar jogo</button>
            <Tabuleiro vezDoX={vezDoX} 
                quadrados={quadrados} 
                handleClick={handleClick} />

            
        </>
    );
}

export default Jogo;