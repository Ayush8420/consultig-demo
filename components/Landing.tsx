/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaComments, FaGripHorizontal, FaHandshake, FaIdCard } from "react-icons/fa";
import styles from "../styles/Landing.module.scss"
import { motion } from "framer-motion"


const qualitiesVarient   =  {
    hidden : {
        y : 20,
        opacity : 0,
    },
    visible: {
        y : 0,
        opacity : 1,
    
    }

    

    
}

const Landing: FC = () => {
    return <>
        <section className={styles.landing}>
            <div className={styles.main}>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}

                    className={styles.left}>
                    <div>
                        <h1>Need a professional business consultation? Look no further. We are here to help!</h1>
                        <p>We offer a professional advice, guidance and actionable solutions to businesses experiencing issues they can’t deal with in-house.</p>
                        <div className={styles.btns}>
                            <button>Get free consultation</button>
                            <button>Shop online guides <AiOutlineRight /></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}

                    className={styles.right}>
                    <div className={styles.imgs}>
                        <img src="https://the7.io/consulting/wp-content/uploads/sites/67/elementor/thumbs/cons009-om2kpirnx6b0nfelfzr18xlon5e9gx4qk81mxtibl4.jpg" alt="abc" />
                        <img src="https://the7.io/consulting/wp-content/uploads/sites/67/elementor/thumbs/cons023-om42q8yrrghp7qkvlm1kz6rto42wszkd9qclh61i5k.jpg" alt="abc" />
                    </div>
                </motion.div>
            </div>


            <div className={styles.qualities}>
                {
                    qualities.map((item ,i)=> (
                        <motion.div 
                        variants={qualitiesVarient}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once : true}}
                        transition={{delay : i * 0.2+ 0.5}}
                         key={item.text}
                         className={styles.item}>
                            <span><item.icon /></span>
                            <p>{item.text}</p>
                        </motion.div>

                    ))
                }
            </div>
        </section>
    </>
}

const qualities = [
    {
        icon: FaIdCard,
        text: "A team of leading industry experts",
    },
    {
        icon: FaGripHorizontal,
        text: "A full range of consulting services",
    },
    {
        icon: FaHandshake,
        text: "Exclusive extensive online consulting guides",
    },
    {
        icon: FaComments,
        text: "100% free first consultation for all new clients",
    },
]

export default Landing