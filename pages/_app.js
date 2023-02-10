import "@/styles/globals.css";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
