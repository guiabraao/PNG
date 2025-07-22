import { useEffect, useState } from "react";
import styles from "./Totw.module.css";
import back from '../../../assets/backbtn.svg'
import Logo from '../../../assets/logoPNG.png'
import Campo from '../../../assets/campo.jpg'
import { Link } from "react-router-dom";
import Header from "../../../Components/Header/Header";

function Totw() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const buscarCard = async () => {
            const response = await fetch('https://raw.githubusercontent.com/guiabraao/apiClassificacao/refs/heads/main/card')
            const data = await response.json()
            setCards(data)
        }
        buscarCard()
    }, [])


    return (
        <>
            <Header />

            <div className={styles.topEst}>
                <Link to='/selecaoMenu'><img src={back} /></Link>
            </div>

            <h2>Seleção da Semana</h2>

            <div className={styles.containerTW}>
                <img src={Campo} />
                <div className={styles.containeBoxTW}>
                    <div className={styles.atacantes}>
                        {
                            cards.map((card) => (
                                <tr key={card.atacantes}>
                                    <td><img src={card.didi} className={styles.cardTW} /></td>
                                    <td><img src={card.martins} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div>
                    <div className={styles.pontas}>
                        {
                            cards.map((card) => (
                                <tr key={card.tuco}>
                                    <td className={styles.pe}><img src={card.sabia} className={styles.cardTW} /></td>
                                    <td className={styles.pd}><img src={card.davizin} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div>
                    <div className={styles.meias}>
                        {
                            cards.map((card) => (
                                <tr key={card.tuco}>
                                    <td><img src={card.devesa} className={styles.cardTW} /></td>
                                    <td><img src={card.robinho} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div>
                    <div className={styles.laterais}>
                        {
                            cards.map((card) => (
                                <tr key={card.tuco}>
                                    <td className={styles.le}><img src={card.henrique} className={styles.cardTW} /></td>
                                    <td className={styles.ld}><img src={card.tonini} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div>
                    <div className={styles.zaga}>
                        {
                            cards.map((card) => (
                                <tr key={card.tuco}>
                                    <td><img src={card.joval} className={styles.cardTW} /></td>
                                    <td><img src={card.tcholas} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div>
                    {/* <div className={styles.goleiro}>
                        {
                            cards.map((card) => (
                                <tr key={card.tuco}>
                                    <td><img src={card} className={styles.cardTW} /></td>
                                </tr>
                            ))
                        }
                    </div> */}
                    {/* <p>!!PELADA DO DIA 05/07 FOI DE TANTA QUALIDADE, QUE DECIDIMOS NÃO TER TOTW ESSA SEMANA.</p> */}
                </div>
            </div>
        </>
    )
}

export default Totw