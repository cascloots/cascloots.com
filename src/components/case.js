import React from "react"

import Slider from "./slider"

import * as caseStyles from './case.module.scss'

const Case = () => {
  return (
  <section>
      <div className={caseStyles.caseHeader}>
        <h2 className={caseStyles.caseCategory}>↓ Web Design ↓</h2>
        <h1 className={caseStyles.caseTitle}><span className={caseStyles.caseClient}>Microsoft</span> - <span>Get to know Azure, Turn your ideas into innovation with trusted Azure products and services</span></h1>
      </div>
      <Slider />
      <div className={caseStyles.caseInfo}>
        <div className={caseStyles.contentCase}>
          <ul className={caseStyles.caseRoles}>
            <li className={caseStyles.caseProject}>PROJECT: Interactive introduction for Microsoft Azure</li>
            <li className={caseStyles.caseRole}>ROLE: UI/UX Designer</li>
            <li className={caseStyles.caseDemo}>DEMO: <a
                className={caseStyles.underline}
                target="_blank"
                rel="noreferrer"
                href="https://www.acehardware.com/">
                  in development
                </a>
            </li>
          </ul>
          <p className={caseStyles.caseDescription}>
            <span className={caseStyles.caseYear}>2020</span> -
              The overarching goal of the platform was to craft a comprehensive experience that clarifies Azure's infrastructure and USP's, to build trust with existing and new customers.
              The creative concept was to create an inspiring content hub to explore and have users seamlessly guided to their best solution. To maintain the best user experience I had to make the design accommodate different scenarios while maintaining the overall aesthetic.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Case