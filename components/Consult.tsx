import { FC } from "react"
import styles from "../styles/Consult.module.scss"
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

const Consult: FC = () => {
    return <>
        <section className={styles.landing}>
            <h1>Need a professional business consultation? Let&apos;s discuss your case!</h1>
            <div className={styles.btns}>
                <button>Contact us online</button>
                <button><FaPhoneAlt /> 1-001-234-5678</button>
            </div>
        </section>
    </>;
}

export default Consult;