import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { FaUserAlt as UserIcon } from "react-icons/fa";

import { WhatsAppButton } from "../../components/WhatsAppButton";
import ButtonBack from "../../components/ButtonBack";

import theme from "../../styles/theme/light";
import styles from "../../styles/Home.module.css";
import styles2 from "../styles/Parks.module.css";
import { AppProps } from 'next/app';

interface LayoutProps {
  children: React.ReactNode;
  router: AppProps["router"];
}

const Layout = ({ children, router }: LayoutProps) => {
  const { back } = useRouter();
  const { user, error, isLoading } = useUser();
  
  return (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      <title>Next.js Sample App</title>
    </Head>
    <>
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
          {!user ? (
          <Link href="/api/auth/login">
            <motion.a
              whileHover={{ scale: 1.1, zIndex: 9999 }}
              whileTap={{ scale: 0.9 }}
              className={styles2.goBackPage}
              style={{
                position: "fixed",
                transition: "color border box-shadow 1s linear",
              }}
            >
              <UserIcon width={20} height={20} /> LOGIN
            </motion.a>
          </Link>
        ) : children }
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
    </>
  </>
)};

export default Layout;