import React from 'react'
import { Contact } from '../articles/Contact'
import { About } from '../articles/About'
import { Work } from '../articles/Work'
import { Outerstellar } from '../articles/work/Outerstellar'
import { Energize } from '../articles/work/Energize'
import { RollforReaction } from '../articles/work/RollforReaction'
import { SelfHostedKubernetes } from '../articles/work/SelfHostedKubernetes'

interface MainProps {
  route: object
  article: string
  articleTimeout: boolean
  onSwitchArticle: Function
  onCloseArticle: Function
  timeout: boolean
  setWrapperRef: any
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
        <About
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          close={close}
        />

        <Work
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          onSwitchArticle={this.props.onSwitchArticle}
          close={close}
        />

        <Contact
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          close={close}
        />

        {/* WORK ITEMS */}
        <Outerstellar
          className={`${
            this.props.article === 'outerstellar' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          close={closeWorkItem}
        />
        <Energize
          className={`${this.props.article === 'energize' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          close={closeWorkItem}
        />
        <RollforReaction
          className={`${
            this.props.article === 'roll-for-reaction' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          close={closeWorkItem}
        />
        <SelfHostedKubernetes
          className={`${
            this.props.article === 'self-hosted-kubernetes' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          close={closeWorkItem}
        />
      </div>
    )
  }
}
