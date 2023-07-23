import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { YOUR_NAME } from "../data/home_data";
import MetaTags from "../core/components/MetaTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <MetaTags />
        <title> {YOUR_NAME} - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
