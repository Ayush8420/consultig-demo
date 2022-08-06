import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "../styles/Testimonial.module.scss";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial: FC = () => {
    return (
        <>
            <section className={styles.tmonial}>

                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ margin: "0px 0px 0px 120px", once: true }}
                    className={styles.heading}><span><motion.b
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ delay: .3 }}
                        viewport={{ margin: "0px 0px 0px 120px", once: true }}
                    />Testimonial</span></motion.h1>

                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once:true, margin : "0px 0px 0px 30%"}}
                className={styles.container}>

                    <Swiper
                        className={styles.swiper}
                        modules={[Navigation]}
                        loop={true}
                        slidesPerView={"auto"}
                        spaceBetween={50}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },

                            780: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1020: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={{
                            nextEl: "." + styles.nextBtn,
                            prevEl: "." + styles.prevBtn,
                        }}
                    >

                        {slideData.map((data, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className={styles.slide}>
                                        <span className={styles.icon}>
                                            <FaQuoteRight />
                                        </span>
                                        <div className={styles.quote}>{data.quote}</div>
                                        <div className={styles.by}>{data.by}</div>
                                        <div className={styles.desig}>{data.desig}</div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className={styles.prevBtn}>
                        <FiChevronLeft />
                    </div>
                    <div className={styles.nextBtn}>
                        <FiChevronRight />
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Testimonial;

const slideData = [
    {
        quote:
            "Lorem metus vestibulum ipsum dolor sit amet, consectetur adipiscing elit odio nec urna metus vestibulum.",
        by: "Alexander Brown",
        desig: "Seven Creative - marketing director",
    },
    {
        quote:
            "Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Unbelievable!",
        by: "Tiffany Anderson",
        desig: "Seve Media - CEO",
    },
    {
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctu.",
        by: "Maria Green",
        desig: "Seven Dev - marketing director",
    },
    {
        quote:
            "Wow! Commodo egestas, feugiat leo eget ipsum dolor sitvulputate metus vestibulum ipsum.",
        by: "Bernard Blackwood",
        desig: "Seven &amp; CO - marketing director",
    },
    {
        quote:
            "Super! 300%+ lorem neque mauris et leo ipsum ulvinar lorem neque. Thanx!",
        by: "John Richmond",
        desig: "Seven Consulting - executive director",
    },
];
