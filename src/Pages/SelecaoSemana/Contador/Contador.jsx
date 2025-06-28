import React from "react";
import { useState, useEffect } from "react";
import styles from './Contador.module.css'
import Header from "../../../Components/Header/Header";
import back from '../../../assets/backbtn.svg'
import { Link } from "react-router-dom";


function ContadorTotw() {

    const [countTotw, setcountTotw] = useState([]);

    useEffect(() => {
        const buscarContadorTotw = async () => {
            const response = await fetch('https://raw.githubusercontent.com/guiabraao/apiClassificacao/refs/heads/main/apiArtilhariaPlayoffs');
            const data = await response.json();
            console.log("Dados recebidos:", data);
            setcountTotw(data);
        };
        buscarContadorTotw();
    }, []);

    return (
        <>
            <Header />

            <div className={styles.topEst}>
                <Link to='/selecaoMenu'><img src={back} /></Link>
            </div>
            <h2>Contador de TOTW</h2>

            <div className={styles.containerGol}>
                <div className={styles.golBox}>
                    <table>
                        <thead>
                            <tr>
                                <td>Jogador</td>
                                <td>TOTW</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countTotw.sort((a, b) => b.countTotw - a.countTotw)
                                    .map((jogador) => (
                                        <tr key={jogador.id}>
                                            <td>{jogador.nome}</td>
                                            <td id={styles.jogador}>{jogador.countTotw}</td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ContadorTotw