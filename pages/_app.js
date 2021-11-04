import LayoutCard from "../components/layout/LayoutCard";
import "../styles/globals.css";
import { AuthContextProvider } from "../contexts/auth-context";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <LayoutCard>
        <Component {...pageProps} />
      </LayoutCard>
    </AuthContextProvider>
  );
}

export default MyApp;
