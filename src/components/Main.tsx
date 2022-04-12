import React from 'react'
import { ContactForm } from './ContactForm'
import { About } from '../articles/About'
import { Work } from '../articles/Work'
import { Outerstellar } from '../articles/work/Outerstellar'

interface MainProps {
  route: object,
  article: string,
  articleTimeout: boolean,
  onSwitchArticle: Function,
  onCloseArticle: Function,
  timeout: boolean,
  setWrapperRef: any,
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

    let closeWorkItem = (
      <div
        className="close back"
        onClick={() => {
          this.props.onSwitchArticle('work')
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
          }`} onSwitchArticle={this.props.onSwitchArticle} close={close} />

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

        {/* WORK ITEMS */}
        <Outerstellar className={`${this.props.article === 'outerstellar' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} close={closeWorkItem} />
      </div>
    )
  }
}
