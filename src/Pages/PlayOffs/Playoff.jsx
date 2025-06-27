import styles from './Playoff.module.css'
import Header from '../../Components/Header/Header'
import Cris from '../../assets/cris.jpg'
import Cruyff from '../../assets/cruyff.jpg'
import Kaka from '../../assets/kaka.jpg'
import Zizu from '../../assets/zidane.jpg'
import Maradona from '../../assets/maradona.jpg'
import Pele from '../../assets/pele.jpg'
import Duo from '../../assets/duo.jpg'
import back from '../../assets/backbtn.svg'
import { Link } from 'react-router-dom'



function Playoff() {
    return (
        <>
            <Header />
            <div className={styles.topEst} data-aos="zoom-in">
                <Link to='/menu'><img src={back} /></Link>
            </div>
            <h2 data-aos="zoom-in">Play-Offs</h2>
            <div className={styles.containerMenu}>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffClassifi'><img src={Cris} /></Link>
                    <div className={styles.imgBox}>
                        <p>Classificação</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffFinal'><img src={Duo} /></Link>
                    <div className={styles.imgBox}>
                        <p>Final</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffGols'><img src={Maradona} /></Link>
                    <div className={styles.imgBox}>
                        <p>Gols</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffAssist'><img src={Zizu} /></Link>
                    <div className={styles.imgBox}>
                        <p>Assistencias</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffPremiacao'><img src={Kaka} /></Link>
                    <div className={styles.imgBox}>
                        <p>Premiação</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffTimes'><img src={Pele} /></Link>
                    <div className={styles.imgBox}>
                        <p>Times</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoffSelecao'><img src={Cruyff} /></Link>
                    <div className={styles.imgBox}>
                        <p>Seleção</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playoff