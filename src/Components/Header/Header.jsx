import styles from './Header.module.css'
import back from '../../assets/backbtn.svg'
import Logo from '../../assets/logoPNG.png'
import AOS from 'aos'
import { useEffect } from 'react'

function Header() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false
        });
    }, []);


    return (
        <>
            <div className={styles.topBar} data-aos="fade-down">
                <img src={Logo} />
            </div>
        </>
    )
}

export default Header