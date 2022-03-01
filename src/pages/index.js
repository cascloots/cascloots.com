import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import Case from "../components/case"

import * as indexStyles from '../styles/index.module.scss'


const IndexPage = () => {
  return(
      <Layout>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Cas Cloots</title>
          <link rel="stylesheet" href="mystyle.css"></link>
          <script src={withPrefix('script.js')} type="text/javascript" />
        </Helmet>
        <a onclick="topFunction()"
            id="myBtn">
          <svg
            title="Go to top"
            width="35"
            height="16"
            viewBox="0 0 35 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.4997 0.726807L34.6186 14.2144L33.3809 15.7854L17.4997 3.27298L1.6186 15.7854L0.380859 14.2144L17.4997 0.726807Z"
              fill="white"
            />
          </svg>
        </a>
        <section className={indexStyles.hero}>
          <div className={indexStyles.content}>
            <h2 className={indexStyles.title}>Hi, there</h2>
            <h1 className={indexStyles.intro}>
              Cas Cloots is a designer working across digital and graphic design
              with a passion for photography and motion<br />
              Available for hire <a href="mailto:cloots.cas@gmail.com">⟶ cloots.cas@gmail.com</a>
            </h1>
          </div>
        </section>
        <Case />
        <Case />
        <Case />
        <Case />
      </Layout >
  )
}

export default IndexPage

