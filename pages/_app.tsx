// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme/light";

function MyApp({ Component, pageProps, router}: AppProps) {
  return (
    <motion.div
      key={router.pathname}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0, x: -100 },
        pageAnimate: { opacity: 1, x: 0 },
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
