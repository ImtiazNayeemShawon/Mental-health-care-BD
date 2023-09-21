import Head from "next/head";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Feature from "./Feature";
export default function Home() {
  return (
    <>
      <Head>
        <title>Mental health care | BD </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-20 max-sm:mx-4 block">
        <HomePage />
        <Feature />
        <Footer />
      </main>
    </>
  );
}
