import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerador de template para configuração!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gerador de template para{" "}
          <Link href="/">
            <a>configuração!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Qualquer bug ou problema{": "}
          <code className={styles.code}>
            <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20estou%20com%20problema%20no%20gerador%20de%20templates!">
              <a target={"_blank"}>Jônatas - NOC 1</a>
            </Link>
          </code>
        </p>

        <div className={styles.grid}>
          <Link href="/parks">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              style={{ opacity: 0.5, cursor: "not-allowed" }}
              className={styles.card}
            >
              <h2>Parks &rarr;</h2>
              <p>Gera template para instalação de onu Parks.</p>
            </motion.a>
          </Link>

          <Link href="/furukawa">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              style={{ opacity: 0.5, cursor: "not-allowed" }}
              className={styles.card}
            >
              <h2>Furukawa &rarr;</h2>
              <p>Gera template para instalação de onu Furukawa</p>
            </motion.a>
          </Link>

          <Link href="/furukawa/remove">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              className={styles.card}
            >
              <h2>Furukawa &rarr;</h2>
              <p>Gera template para retirar da OLT onu Furukawa.</p>
            </motion.a>
          </Link>

          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              style={{ opacity: 0.5, cursor: "not-allowed" }}
              className={styles.card}
            >
              <h2>FUTURO &rarr;</h2>
              <p>Implemetação futura!{"\n"}Implemetação futura!</p>
            </motion.a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20um%20or%C3%A7amento.">
          <a target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/jonatas.svg"
                alt="Criador por Jônatas"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
