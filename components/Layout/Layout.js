import Head from "next/head";
import { useSelector } from "react-redux";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useEffect } from "react";

export default function Layout({ children }) {
  const user = useSelector((state) => state.user);
  // for testing of redux and redux saga
  useEffect(() => {
    console.log("===========>", user);
  }, [user]);

  return (
    <>
      <Header />
      <Head>
        <title>Medkart</title>
        <meta name="description" content="Medicine online medkart" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
