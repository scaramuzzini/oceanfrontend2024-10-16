import { useState } from "react";

function Quadrado({quadrado, cliqueQuadrado}) {
    return (
        <button class="quadrado" 
            onClick={cliqueQuadrado}>
            {quadrado}
        </button>
    );
}

function Jogo() {
    const [quad,setQuad] = useState('');
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    function handleClick(indice) {
        const novosQuadrados = quadrados.slice();
        novosQuadrados[indice] = 'X';
        setQuadrados(novosQuadrados);
    }


    return (
        <>
            <h1>Jogo da velha</h1>
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

export default Jogo;