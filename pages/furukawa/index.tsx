import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Furukawa: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furukawa</title>
      </Head>

      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        gap: "5rem",
      }} className={styles.main}>
          <h1 className={styles.title}>Furukawa</h1>

        <div className={styles.grid}>
          <Link href="/furukawa/add">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              className={styles.card}
            >
              <h2>Configurar &rarr;</h2>
              <p>Gera template para instalação de onu Furukawa.</p>
            </motion.a>
          </Link>

          <Link href="/furukawa/remove">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              className={styles.card}
            >
              <h2>Remover &rarr;</h2>
              <p>Gera template para retirar da OLT onu Furukawa.</p>
            </motion.a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Furukawa;
