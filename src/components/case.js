import React from "react";
import Slider from ".../component/slider";

const Case = () => {
  return (
  <section>
    <div class="case-header">
      <h2 class="case-category">↓ Web Design ↓</h2>
      <h1 class="case-title"><span class="case-client">Microsoft</span> - <span>Get to know Azure, Turn your ideas into innovation with trusted Azure products and services</span></h1>
    </div>
    <Slider />
    <div className="case-info">
      <div className="content-case"></div>
    element({
              type: 'div', className: 'case-info', children: [
                element({
                  type: 'div', className: 'contentCase', children: [
                    element({
                      type: 'ul', className: 'case-roles', children: [
                        element({ type: 'li', className: 'case-project', content: `${item.project}` }),
                        element({ type: 'li', className: 'case-role', content: `${item.role}` }),
                        element({
                          type: 'li', className: 'case-demo', children: [
                        element({ type: 'a', className: 'underline', href: `${item.demo.link}`, content: `${item.demo.text}` })
                      ]
                    }),
                      ]
                    }),
                    element({
                      type: 'p', className: 'case-description', children: [
                      element({
                          type: 'p', className: 'case-intro', children: [
                      element({ type: 'span', className: 'case-year', content: `${item.year} - ` }),
                      element({ type: 'span', content: `${item.description_intro}` }),
                    ]
                  }),
                    element({ type: 'p', content: `${item.description_work}` })
                  ]
    </div>
    </section>
  )
}

export default Case