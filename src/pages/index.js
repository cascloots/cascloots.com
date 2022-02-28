import React from "react"

import Layout from "../components/layout"
import Case from "../components/case"

import * as indexStyles from '../styles/index.scss'


const IndexPage = () => {
  return(
      <Layout>
        <section className={indexStyles.hero}>
          <div class="content">
            <h2 className={indexStyles.title}>Hi, there</h2>
            <h1 className={indexStyles.intro}>
              Cas Cloots is a designer working across digital and graphic design
              with a passion for photography and motion<br />
              Available for hire <a href="mailto:cloots.cas@gmail.com">⟶ cloots.cas@gmail.com</a>
            </h1>
          </div>
        </section>
        <Case />
      </Layout >
  )
}

export default IndexPage