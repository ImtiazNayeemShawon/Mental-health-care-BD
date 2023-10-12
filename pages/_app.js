import "@/styles/globals.css";
import Navbar from "./Navbar";
import "../pages/Colors.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <div>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
