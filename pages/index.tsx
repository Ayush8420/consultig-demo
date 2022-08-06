import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Consult from "../components/Consult";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Quality from "../components/Quality";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Consulting Demo</title>
      </Head>
      <div className={styles.container}>
        <Nav />
        <Landing />
        <Services />
        <Consult />
        <Quality />
        <Testimonial />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
