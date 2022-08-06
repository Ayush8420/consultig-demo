import { FC } from "react"
import styles from "../styles/Quality.module.scss";
import { motion } from "framer-motion";

const Quality: FC = () => {
    return <>
        <section className={styles.quality}>
            <div className={styles.grid}>
                {quality.map((item, id) => (
                    <motion.div
                     key={id} 
                     className={styles.box}

                     >
                        <motion.span
                        initial={{opacity : 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once:true}}
                        >0{id + 1}.</motion.span>
                        <motion.div 
                        initial={{scale : 0.8,opacity: 0}}
                        whileInView={{scale: 1, opacity : 1}}
                        viewport={{once:true}}
                        transition={{delay: 0.3}}
                        className={styles.content}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </motion.div>
                    </motion.div
                    >
                ))}
            </div>
        </section>
    </>;
}

const quality = [
    {
        title: "Experienced specialists",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci suscipit debitis facilis nobis? Laudantium accusamus dolorem alias! Mollitia obcaecati hic, sunt totam at numquam vitae placeat ut cum! Minus, rem.",
    },
    {
        title: "Stable & predictable results",
        description: "Nobis velit totam veniam tempora eveniet, nostrum architecto atque autem iure quos! Vel culpa aperiam numquam itaque quis sunt ratione minima aut quos nihil ducimus ea optio rem, ut distinctio.",
    },
    {
        title: "100% Satisfaction guarantee",
        description: "Aut commodi corrupti mollitia modi, eum eligendi et sapiente natus, expedita odio temporibus, labore similique ipsa ipsum ratione accusantium vitae corporis? Temporibus magnam nesciunt ea, aliquam iure eveniet eum tempora?",
    },
    {
        title: "20+ Years in consulting business",
        description: "Dolor officiis quae ut vel voluptates quibusdam reprehenderit corporis illo eveniet modi earum esse molestiae, voluptatem incidunt nobis quas explicabo, at provident illum autem culpa laborum repellat? Aut, repudiandae fugit?",
    },
]

export default Quality;