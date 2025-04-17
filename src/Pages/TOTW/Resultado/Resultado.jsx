import React, { useState, useEffect } from "react";

function Resultados() {
    const [categoriasData, setCategoriasData] = useState([]);
    const [votos, setVotos] = useState({});

    useEffect(() => {
        const buscarJogadores = async () => {
            const response = await fetch('https://raw.githubusercontent.com/guiabraao/apiClassificacao/refs/heads/main/Votacao');
            const data = await response.json();
            setCategoriasData(data);

            // Carregar votos do localStorage
            const votosSalvos = JSON.parse(localStorage.getItem("votos")) || {};
            setVotos(votosSalvos);
        };
        buscarJogadores();
    }, []);

    // Contar os votos por jogador em cada categoria
    const contarVotos = (categoria, jogador) => {
        return Object.values(votos).reduce((total, votosCategoria) => {
            if (votosCategoria.includes(jogador)) {
                return total + 1;
            }
            return total;
        }, 0);
    };

    return (
        <div>
            <h1>Resultados da Votação</h1>
            {categoriasData.map(({ categoria, jogadores }) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {jogadores.map(({ nome }) => {
                        const totalVotos = contarVotos(categoria, nome);
                        return (
                            <div key={nome} style={{ marginBottom: "10px" }}>
                                <span>{nome}: {totalVotos} voto(s)</span>
                            </div>
                        );
                    })}
                </div>
            ))}
            <a href="/">Voltar à votação</a>
        </div>
    );
}

export default Resultados;
