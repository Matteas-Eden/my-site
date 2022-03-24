import React from 'react'
import { ContactForm } from './ContactForm'
import { LegacyRef } from '@reach/router/node_modules/@types/react'
import { About } from '../articles/About'
import { Work } from '../articles/Work'

interface MainProps {
  route: object,
  article: string,
  articleTimeout: boolean,
  onCloseArticle: Function,
  timeout: boolean,
  setWrapperRef: LegacyRef<HTMLDivElement>,
}

export class Main extends React.Component<MainProps> {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <About className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
          }`} close={close} />

        <Work className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
          }`} close={close} />

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ContactForm />
          {close}
        </article>
      </div>
    )
  }
}
