import React, { useState, useEffect } from "react";

function Votacao() {


    const [categoriasData, setCategoriasData] = useState([]);

    const [votos, setVotos] = useState(() => {
        return JSON.parse(localStorage.getItem("votos")) || {};
    })

    useEffect(() => {
        const buscarJogadores = async () => {
            const response = await fetch('https://raw.githubusercontent.com/guiabraao/apiClassificacao/refs/heads/main/Votacao')
            const data = await response.json()
            setCategoriasData(data)
            localStorage.setItem("votos", JSON.stringify(votos))
        }
        buscarJogadores()
    }, [votos])

    const votar = (categoria, jogador) => {
        setVotos((prev) => {
            const votosCategoria = prev[categoria] || []
            if (votosCategoria.includes(jogador)) return prev
            if (votosCategoria.length >= 3 && categoria === "Atacantes") return prev;
            return { ...prev, [categoria]: [...votosCategoria, jogador] }
        })
    }

    const removerVoto = (categoria, jogador) => {
        setVotos((prev) => {
            const votosCategoria = prev[categoria] || []
            return {
                ...prev,
                [categoria]: votosCategoria.filter((nome) => nome !== jogador), 
            }
        })
    }

    return (
        <div>
            <h1>Vote no seu time</h1>
            {categoriasData.map(({ categoria, jogadores }) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {jogadores.map(({ nome }) => (
                        <div key={nome} style={{ marginBottom: "10px" }}>
                            <button onClick={() => votar(categoria, nome)}>
                                {nome} {votos[categoria]?.includes(nome) ? "✔" : ""}
                            </button>
                            {votos[categoria]?.includes(nome) && (
                                <button
                                    onClick={() => removerVoto(categoria, nome)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Remover Voto
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <a href="/resultados">Ver Resultados</a>
        </div>
    )
}

export default Votacao;
