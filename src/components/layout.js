import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <section className={layoutStyles.container}>
      <Header />
      {props.children}
      <Footer />
    </section>
  )
}

export default Layout