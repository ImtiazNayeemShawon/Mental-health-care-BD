import "@/styles/globals.css";
import Navbar from "./Navbar";
import "../pages/Colors.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
