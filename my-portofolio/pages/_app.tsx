import React, { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import "@/styles/index.css";
import "@/styles/nprogress.css";
import { motion } from "framer-motion";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster:wght@500;800;900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
    
    </Layout>
  </>
  
);

export default App;
