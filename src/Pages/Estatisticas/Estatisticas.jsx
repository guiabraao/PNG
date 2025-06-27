import styles from './Estatisticas.module.css'
import KDB from '../../assets/kdb.jpg'
import Rayo from '../../assets/raio.jpg'
import Header from '../../Components/Header/Header'
import back from '../../assets/backbtn.svg'
import { Link } from 'react-router-dom'


function Estatisticas() {
    return (
        <>
            <Header />
            <div className={styles.topEst} data-aos="zoom-in">
                <Link to='/menu'><img src={back} /></Link>
            </div>
            <div className={styles.containerEst}>
                <h2 data-aos="zoom-in">Estatisticas</h2>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/artilhariaGeral'><img src={Rayo} /></Link>
                    <div className={styles.imgBox}>
                        <p>Gols</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/assistenciaGeral'><img src={KDB} /></Link>
                    <div className={styles.imgBox}>
                        <p>Assistencias</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Estatisticas