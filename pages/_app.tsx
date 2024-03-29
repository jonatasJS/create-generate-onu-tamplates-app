import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import { withPageAuthRequired, UserProvider } from "@auth0/nextjs-auth0";
import { ToastContainer } from "react-toastify";

import { Adsense } from "../components/Ads";

import NProgress from "nprogress";

import GlobalStyle from "../styles/globalStyle";
import 'react-toastify/dist/ReactToastify.min.css';
// import "custom-cursor-react/dist/index.css";
import Layout from "../components/Layout";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  minimum: 0.1,
  trickle: true
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const { back } = useRouter();
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

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
      <Layout router={router}>
        <Head>
          <title>Gerador de template para configuração!</title>
        </Head>

        <GlobalStyle />

        <Adsense client="ca-pub-4515639184646084" slot="7238080479" />
        {/* <GoogleAdsense
          adClient={"ca-pub-4515639184646084"}
          adSlot={"7238080479"}
        /> */}

        <Component {...pageProps} />

        <Adsense client="ca-pub-4515639184646084" slot="1915214729" />
        {/* <GoogleAdsense
          adClient={"ca-pub-4515639184646084"}
          adSlot={"1915214729"}
        /> */}
      </Layout>
    </UserProvider>
  );
}

export default MyApp;

export const getServerSideProps = withPageAuthRequired();
