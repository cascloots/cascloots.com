import React from "react";

import * as headerStyles from './header.module.scss'

const Header = () => {
  return (
    <nav>
      <ul className={headerStyles.navigation}>
        <div className={headerStyles.navigationContent}>
          <li>
            <div className={headerStyles.logo}></div>
          </li>
          <li className={headerStyles.navigationItem}>
            <a
              href="https://drive.google.com/file/d/1iTDclx-ydoHKKwY_etVLjgx125GrJG9X/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              >Resume</a
            >
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Header