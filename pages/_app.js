import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import LayoutWrapper from '@/components/LayoutWrapper';
import '../styles/globals.css';
import '../styles/prism.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
