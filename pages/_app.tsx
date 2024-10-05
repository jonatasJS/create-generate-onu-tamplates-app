import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.min.css';

import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import { withPageAuthRequired, UserProvider } from "@auth0/nextjs-auth0";

import NProgress from "nprogress";

import GlobalStyle from "../styles/globalStyle";
// import "custom-cursor-react/dist/index.css";
import Layout from "../components/Layout";
import { AdSense } from "../components/Ads";

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
					<AdSense pId="5593915309329672" />
        </Head>

        <GlobalStyle />

        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;

export const getServerSideProps = withPageAuthRequired();
