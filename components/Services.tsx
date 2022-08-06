import { FC } from "react"
import { FaCalculator, FaChartLine, FaChartPie, FaChessKnight, FaCogs, FaUserFriends } from "react-icons/fa"
import styles from "../styles/Services.module.scss"
import { motion } from "framer-motion"

const Services: FC = () => {
    return <>
        <section className={styles.services}>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ margin: "0px 0px 0px 120px", once: true }}
                className={styles.heading}>
                <span><motion.b
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ delay: .3 }}
                    viewport={{ margin: "0px 0px 0px 30%", once: true }}
                />Services</span>
            </motion.h1>
            <div className={styles.container}>
                {service.map(item => (
                    <a key={item.text} href="#">
                        <motion.div 
                        initial={{opacity : 0}}
                        whileInView={{opacity : 1}}
                        viewport={{once: true, margin: "0px 0px 0px 150px"}}
                        className={styles.item}>
                            <span><item.icon /></span>
                            <p>{item.text}</p>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    </>;
}

const service = [
    {
        icon: FaChartLine,
        text: "Business development",
    },
    {
        icon: FaCogs,
        text: "Business optimisation",
    },
    {
        icon: FaChartPie,
        text: "Marketing planning",
    },
    {
        icon: FaChessKnight,
        text: "Brand & strategy",
    },
    {
        icon: FaUserFriends,
        text: "Human resources",
    },
    {
        icon: FaCalculator,
        text: "System analytics",
    },
]

export default Services;







