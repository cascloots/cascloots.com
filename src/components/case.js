import React from "react"

import Slider from "./slider"

const Case = () => {
  return (
  <section>
    <div class="case-header">
      <h2 class="case-category">↓ Web Design ↓</h2>
      <h1 class="case-title"><span class="case-client">Microsoft</span> - <span>Get to know Azure, Turn your ideas into innovation with trusted Azure products and services</span></h1>
    </div>
    <Slider />
    <div className="case-info">
      <div className="content-case">
        <ul className="case-roles">
          <li className="case-project"></li>
          <li className="case-role"></li>
          <li className="case-demo"><a
              class="underline"
              target="_blank"
              rel="noreferrer"
              href="https://www.acehardware.com/">
                Download the app
              </a></li>
        </ul>
        <p className="case-description">
          <span className="case-year"></span> - 
          <span className="content"></span>
        </p>
      </div>
    </div>
    </section>
  )
}

export default Case