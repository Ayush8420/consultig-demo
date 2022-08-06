import { FC, MouseEventHandler, useEffect, useRef, useState } from "react"
import styles from "../styles/Nav.module.scss"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion"

const Nav: FC = () => {

    const navRef = useRef<HTMLElement | null>(null)
    const shadowRef = useRef<HTMLDivElement|null>(null)

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const cb = () => {
            navRef.current?.classList.toggle(styles.active, window.scrollY >= 80)
        }

        window.addEventListener("scroll", cb)

        return () => {
            window.removeEventListener("scroll", cb)
        }
    }, [])

    const close : MouseEventHandler<HTMLDivElement> = (e) => {
        setToggle(e.target == shadowRef.current)
    }

    return <>
        <nav className={styles.nav} ref={navRef}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.logo}>Logo.</motion.div>
            <div onClick={close} className={`${styles.shadow}${toggle ? " " + styles.menu : ""}`}>
                <motion.div  ref={shadowRef}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.navLinks}>
                    <div className={styles.close} onClick={() => setToggle(false)}>
                        <FaTimes />
                    </div>
                    <ul>
                        <li className={styles.active}><a href="#"><b>Home</b></a></li>
                        <li><a href="#"><b>Pages</b></a> </li>
                        <li><a href="#"><b>Services</b></a></li>
                        <li><a href="#"><b>Articles</b></a></li>
                        <li><a href="#"><b>Shop</b></a></li>
                        <li><a href="#"><b>Contacts</b></a></li>
                    </ul>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.toggleMenu} onClick={() => setToggle(true)}>
                <FaBars />
            </motion.div>

        </nav>
    </>
}

export default Nav
