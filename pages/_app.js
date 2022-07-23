import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";

import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    document
      .getElementById(location.pathname)
      .classList.add("border", "active");
  }, []);

  return (
    <>
      <NavBar {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}
