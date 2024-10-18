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

    let mensagem = 'oi';
    if (vezDoX) {
        mensagem = 'Vez do X';
    } else {
        mensagem = 'Vez da O';
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

function Jogo() {
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [vezDoX,setVezDoX] = useState(true);
    function handleClick(indice) { // indice=0
        if (quadrados[indice]) { //quadrados[0]
            return; // saida da funcao
        }
        const novosQuadrados = quadrados.slice();
        novosQuadrados[indice] = vezDoX ? 'X' : 'O';
        setQuadrados(novosQuadrados);
        setVezDoX(!vezDoX);
    }

    //Adicionar botao RESET DO JOGO
    return (
        <>
            <h1>Jogo da velha</h1>
            <button>Resetar jogo</button>
            <Tabuleiro vezDoX={vezDoX} 
                quadrados={quadrados} 
                handleClick={handleClick} />

            
        </>
    );
}

export default Jogo;