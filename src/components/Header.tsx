import React from 'react'
import { Logo } from './Logo'

import resumePDF from '../assets/MattEdenResume.pdf'

interface HeaderProps {
  onOpenArticle: Function
  timeout: boolean
}

export const Header = (props: HeaderProps) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Logo className="icon" size="3em" colour="white" thickness={10} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Matteas Eden</h1>
        <p>
          Software Developer, Computer Engineer and Linux Enthusiast. <br />
          Creating the future - one line of code at a time.
        </p>
        <ul className="icons" style={{ margin: '-1rem' }}>
          <li>
            <a
              href="https://nz.linkedin.com/in/matteas-eden"
              className="icon fa-linkedin"
              target="_blank"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Matteas-Eden"
              className="icon fa-github"
              target="_blank"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              // props.onOpenArticle('resume')
              window.open(resumePDF, '_blank')
            }}
          >
            Resumé
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)
