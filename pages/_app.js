import LayoutCard from "../components/layout/LayoutCard";
import "../styles/globals.css";
import Head from "next/head";
import { AuthContextProvider } from "../contexts/auth-context";
import { PostContextProvider } from "../contexts/post-context";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthContextProvider>
        <PostContextProvider>
          <LayoutCard>
            <Component {...pageProps} />
          </LayoutCard>
        </PostContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
