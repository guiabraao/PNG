import Logo from '../../assets/logoPNG.png'
import Ronaldinho from '../../assets/ronaldinho.jpg'
import Neymar from '../../assets/neymar.jpg'
import Palmer from '../../assets/cold.jpg'
import Galaticos from '../../assets/galaticos.jpg'
import MSN from '../../assets/ney.jpg'
import Galo from '../../assets/galoXmaria.jpg'
import Lionel from '../../assets/lionel.jpg'
import styles from './Menu.module.css'
import Goats from '../../assets/goats.jpg'
import Romario from '../../assets/romario.jpg'
import Animation from '../../assets/animation.json'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import Lottie from 'lottie-react'
import 'aos/dist/aos.css';

function Menu() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false
        })
    }, [])



    return (
        <>
            <div className={styles.topBar} data-aos="fade-down">
                <img src={Logo} />
            </div>
            <div className={styles.header} data-aos="zoom-in">
                <div className={styles.caixaTxt} data-aos="zoom-in">
                    <h2>FALA, JOGADOR!</h2>
                    <p>Seja Bem-Vindo a Pelada Nova Geração.</p> <br />
                    <p>Aqui você vai ficar por dentro de tudo que acontece na melhor pelada do Jara!</p>
                </div>
            </div>


            <div className={styles.containerMenu} >
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/selecaoMenu'><img src={Ronaldinho} /></Link>
                    <div className={styles.imgBox}>
                        <p>Seleção da semana</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/estatisticas'><img src={Romario} /></Link>
                    <div className={styles.imgBox}>
                        <p>Estatisticas</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/eventos'><img src={Neymar} /></Link>
                    <div className={styles.imgBox}>
                        <p>Eventos</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/playoff'><img src={Lionel} /></Link>
                    <div className={styles.imgBox}>
                        <p>Play-offs</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/classico'><img src={Galo} /></Link>
                    <div className={styles.imgBox}>
                        <p>Classico</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/regulamento'><img src={Palmer} /></Link>
                    <div className={styles.imgBox}>
                        <p>Regulamento</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/sobre'><img src={Goats} /></Link>
                    <div className={styles.imgBox}>
                        <p>Sobre Nós</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu