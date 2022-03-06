import React from 'react'
import outerstellar from '../images/outerstellar.png'
import me from '../images/matt.jpg'
import { ContactForm } from './ContactForm'
import { LegacyRef } from '@reach/router/node_modules/@types/react'
import { About } from '../articles/About'

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

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>Outerstellar [2016]</h3>
          <span className="image main">
            <img src={outerstellar} alt="" />
          </span>
          <p>
            <i>Outerstellar</i> is a top-down arcade space shooter made in
            GameMaker. The story goes that a group of high-schoolers used a
            government grant to fund an "Arcade Games Hackathon", my computer
            science teacher at the time told our class about it, and then I
            signed up. Queue me being paired up with someone I'd never met
            before, and suddenly I had 5 days to create a game from scratch.
            It's safe to say I spent most of that time head-down in my laptop
            typing away at the code, praying that I would end up with something
            playable. At the end of that week, everyone got a chance to play our
            game and - surprisingly - they actually liked it! Then, something{' '}
            <i>even cooler</i> happened; <i>Outerstellar</i> won 2nd place!
            <br />
            Even now, I look back on that experience fondly because not only was
            it a great opportunity to meet like-minded people, it was also the
            first time that I won anything of any value. Sadly, the original
            source files for the game were lost, but{' '}
            <a
              href="https://github.com/Matteas-Eden/outerstellar/releases/tag/v1.1"
              target="_blank"
              rel="noreferrer"
            >
              you can still grab the executable from my GitHub.
            </a>
          </p>
          <ul
            className="icons"
            style={{ marginTop: '-0.75rem', marginBottom: '-0.5rem' }}
          >
            <li>
              <a
                href="https://github.com/Matteas-Eden/outerstellar"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {/* <h3>Wireless Energy Monitor [2018]</h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <h3>Anzen [2019]</h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <h3>Energize [2019]</h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <h3>Roll for Reaction [2020]</h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p> */}
          {close}
        </article>

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
