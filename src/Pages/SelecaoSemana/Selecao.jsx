import React from "react";
import { useState, useEffect } from "react";
import styles from './Selecao.module.css'
import Header from "../../Components/Header/Header";
import back from  '../../assets/backbtn.svg'
import { Link } from "react-router-dom";
import yamal from '../../assets/yamal.jpg'
import Gullit from '../../assets/gullit.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

function SelecaoMenu() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <>
            <Header />
            <div className={styles.topEst} data-aos="zoom-in">
                <Link to='/menu'><img src={back} /></Link>
            </div>
            <h2 data-aos="zoom-in">Seleção da Semana</h2>
            <div className={styles.containerMenu}>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/totw'><img src={yamal} /></Link>
                    <div className={styles.imgBox}>
                        <p>Seleção da Semana 04</p>
                    </div>
                </div>
                <div className={styles.menuBox} data-aos="fade-up">
                    <Link to='/contadorTotw'><img src={Gullit} /></Link>
                    <div className={styles.imgBox}>
                        <p>Contador de TOTW</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelecaoMenu