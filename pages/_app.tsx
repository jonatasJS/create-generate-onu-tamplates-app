import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import {
  withPageAuthRequired,
  useUser,
  UserProvider,
} from "@auth0/nextjs-auth0";

import NProgress from "nprogress";

import GlobalStyle from "../styles/globalStyle";
import "custom-cursor-react/dist/index.css";
import Layout from "../components/Layout";

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
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;

export const getServerSideProps = withPageAuthRequired();
