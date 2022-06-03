// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme/light";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <motion.div initial="pageInitial" animate="pageAnimate" variants={{
        
      }} exit="exit">
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
