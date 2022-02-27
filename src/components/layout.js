import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss"

const Layout = (props) => {
  return (
    <section className="main">
      <Header />
      {props.children}
      <Footer />
    </section>
  )
}

export default Layout