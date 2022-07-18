import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import { UserProvider, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import NProgress from "nprogress";

import { WhatsAppButton } from "../components/WhatsAppButton";
import ButtonBack from "../components/ButtonBack";

import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme/light";
import "custom-cursor-react/dist/index.css";
import styles from "../styles/Home.module.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  console.log("onRouteChangeStart triggered");
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  console.log("onRouteChangeComplete triggered");
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  console.log("onRouteChangeError triggered");
  NProgress.done();
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const { back } = useRouter();
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
    return () => {
      window.removeEventListener("mousemove", (e: MouseEvent) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <UserProvider>
      {router.pathname !== "/" && (
        <ButtonBack isArrow={true} onClick={back} value="VOLTAR" />
      )}

      {user && (
        <motion.div
          onClick={() => {
            window.location.href = "/profile";
          }}
          whileHover={{ scale: 1.1, zIndex: 9999 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            right: "10px",
            top: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            width: "100px",
            borderRadius: "50%",
            transition: "color border box-shadow 1s linear",
          }}
        >
          <img src={user.picture || ""} alt={user.name || ""} />
        </motion.div>
      )}

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
          style={{
            width: "100vw",
            height: "97vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <Head>
              <title>Gerador de template para configuração!</title>
            </Head>

            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>

      <WhatsAppButton />

      <footer
        style={{ top: "47vw", position: "fixed" }}
        className={styles.footer}
      >
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
    </UserProvider>
  );
}

export default MyApp;

export const getServerSideProps = withPageAuthRequired();
