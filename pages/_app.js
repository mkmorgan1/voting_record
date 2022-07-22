import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";

import { useEffect } from "react";

export default function MyApp({Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    var element = document.getElementById(location.href.split('/').reverse()[0]);
    element.classList.add("border","active")
  }, []);

  return (
    <>
      <NavBar {...pageProps}/>
      <Component {...pageProps} />
    </>
  )
}
