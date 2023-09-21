import "@/styles/globals.css";
import Navbar from "./Navbar";
import "../pages/Colors.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      {(router.pathname = "/dashboard" ? null : <Navbar />)}
      <Component {...pageProps} />
    </div>
  );
}
