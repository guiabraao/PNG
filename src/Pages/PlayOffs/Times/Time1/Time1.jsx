import { useState, useEffect } from 'react'
import styles from './Time1.module.css'
import Header from '../../../../Components/Header/Header'
import back from '../../../../assets/backbtn.svg'
import { Link } from 'react-router-dom'


function Time1() {

    const [galo, setGalo] = useState([])

    useEffect(() => {
        const buscarGalo = async () => {
            const response = await fetch('https://raw.githubusercontent.com/guiabraao/apiClassificacao/refs/heads/main/time1Playoff')
            const data = await response.json()
            setGalo(data)
        }
        buscarGalo()
    }, [])

    return (
        <>
            <Header />
            <div className={styles.topEst}>
                <Link to='/playoffTimes'><img src={back} /></Link>
            </div>

            <h2>Time 1</h2>

            <div className={styles.containerGalo}>
                <div className={styles.galoBox}>
                    <table>
                        <thead>
                            <tr>
                                <td>Jogador</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                galo.map((jogadores, index) => (
                                        <tr key={index}>
                                            <td>{jogadores.nome}</td>
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

export default Time1