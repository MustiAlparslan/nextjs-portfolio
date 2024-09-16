import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Personal Website - Mustafa Alparslan</title>
        <meta name="description" content="Frontend Developer - Mustafa Batuhan Alparslan" />
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;