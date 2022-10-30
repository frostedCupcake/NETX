import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/Footer";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
