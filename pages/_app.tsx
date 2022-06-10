// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme/light";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        key={router.pathname}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        variants={{
          pageInitial: {
            opacity: 0,
            x: -100,
            // scale: 0,
          },
          pageAnimate: {
            opacity: 1,
            x: 0,
            // scale: 1,
          },
          pageExit: {
            opacity: 0,
            x: "15vw",
            // scale: 0,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <Head>
            <title>Gerador de template para configuração!</title>
          </Head>

          <GlobalStyle />
          <Component {...pageProps} />

          <footer className={styles.footer}>
            <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20um%20or%C3%A7amento.">
              <a target="_blank" rel="noopener noreferrer">
                Powered by{" "}
                <span className={styles.logo}>
                  <img
                    src="/jonatas.svg"
                    alt="Criador por Jônatas"
                    width={72}
                    height={16}
                  />
                </span>
              </a>
            </Link>
          </footer>
          <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20um%20or%C3%A7amento.">
            <a style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              bottom: "40px",
              right: "40px",
              background: "#25D366",
              color: "white",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "30px",
              boxShadow: "2px 2px 2px #999",
              zIndex: 9999,
            }} target="_blank">
              <i className="fa fa-whatsapp my-float"></i>
            </a>
          </Link>
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
