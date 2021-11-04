import LayoutCard from "../components/layout/LayoutCard";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <LayoutCard>
      <Component {...pageProps} />
    </LayoutCard>
  );
}

export default MyApp;
