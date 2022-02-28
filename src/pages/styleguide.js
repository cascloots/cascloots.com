import React from "react"

import * as styleguideStyles from '../styles/styleguide.scss'

const Styleguide = () => {
  return (
    <div className="container">
      <h1>Styleguide</h1>
      <section>
        <h2>Colors</h2>
      </section>
      <section>
        <h2>Pallets</h2>
        <div>Gray</div>
        <div>Red</div>
        <div>Blue</div>
      </section>
      <section>Typography</section>
      <section>Headings</section>
      <section>Spacings</section>
    </div>
  )
}

export default Styleguide