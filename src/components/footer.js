import React from 'react';

import * as footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
    <div className={footerStyles.content}>
      <div className={footerStyles.footerContent}>
        <section className={footerStyles.footerItem}>
          <h3>INFO</h3>
          <p>
            Cas Cloots is a designer working across digital and graphic design
            with a passion for photography and motion.
          </p>
          <ul>
            <li>Available for freelance.</li>
            <li>
              ⟶
              <a className={footerStyles.underline} href="mailto:cloots.cas@gmail.com">
                cloots.cas@gmail.com
              </a>
            </li>
            <li>
              ⟶
              <a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.instagram.com/cascloots/"
              >
                Instagram
              </a>
            </li>
            <li>
              ⟶
              <a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.behance.net/CasCloots">
                Behance
              </a>
            </li>
            <li>
              ⟶
              <a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cascloots">
                Linkedin
              </a>
            </li>
          </ul>
        </section>
        <section className={footerStyles.footerItem}>
          <h3>CLIENTS</h3>
          <ul>
            <li>
              <a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.acehardware.com/">
                Ace Hardware
              </a>
            </li>
            <li>
              <a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.acehardware.com/">
                RedBull
              </a>
            </li>
            <li><a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.huawei.com/">Huawei</a></li>
            <li><a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.omen.com/">HP Omen</a></li>
            <li><a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://www.akzonobel.com/">Akzonobel</a></li>
            <li><a className={footerStyles.underline} target="_blank" rel="noreferrer" href="https://mightyhive.com/">MightyHive</a></li>
          </ul>
          <ul className={footerStyles.list}>
            <li>+ small businesses</li>
            <li>&amp; individuals</li>
          </ul>
        </section>
      </div>
      <section className={footerStyles.credits}>
        <p>© 2020 cas cloots</p>
        <a href="mailto:cloots.cas@gmail.com">⟶ cloots.cas@gmail.com</a>
      </section>
    </div>
    </footer>
  )
}

export default Footer