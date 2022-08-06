import { FC } from "react"
import { FaBuilding, FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";
import styles from "../styles/Footer.module.scss"
import Social from "./Social";

const Footer: FC = () => {
    return <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.logo}>Logo.</div>
                    <p>We exist to empower people to deliver ridiculously good innovation to the world’s best companies.</p>
                </div>
                <div className={styles.box}>
                    <h3 className={styles.title}>Contact info</h3>
                    <ul>
                        <li>
                            <span className={styles.icon}><FaPhoneAlt /></span>
                            <div className={styles.info}>
                                <p>1-001-234-5678</p>
                                <span>Mon-Sat: 8:00 - 21:00</span>
                            </div>
                        </li>
                        <li>
                            <span className={styles.icon}><FaEnvelope /></span>
                            <div className={styles.info}>
                                <p>info@dream-theme.com</p>
                                <span>24/7 customer support</span>
                            </div>
                        </li>
                        <li>
                            <span className={styles.icon}><FaBuilding /></span>
                            <div className={styles.info}>
                                <p>3 Rockaway St., New Rochelle, NY 10801</p>
                                <span>Main office location</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <h3 className={styles.title}>Recent Article</h3>
                    <ul>
                        <li>
                            <div className={styles.info}>
                                <p>How to find your ideal business advisor</p>
                                <span>March 4, 2020</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.info}>
                                <p>Main business consulting trends 21/22</p>
                                <span>February 25, 2020</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.info}>
                                <p>Top 6 financial planing tricks</p>
                                <span>February 18, 2020</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        
            <hr />
            <div className={styles.end}>
                <div className={styles.text}>
                    <span>&copy; Logo.- 2022. All rights reserved.</span>
                    <span className={styles.seprator}> | </span>
                    <span>Terms & conditions <span className={styles.seprator}> | </span> Refund & returns policy </span>
                </div>
                <div className={styles.social}>
                    <Social />
                </div>
            </div>
        </footer>
    </>;
}

export default Footer;










