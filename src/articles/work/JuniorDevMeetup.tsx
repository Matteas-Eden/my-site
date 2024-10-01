import React from 'react'
import rficCover from '../../images/rfic-talk.png'
import { ArticleProps } from '../ArticleProps'

export const JuniorDevMeetup = ({ className, close }: ArticleProps) => (
  <article
    id="juniordev-meetup"
    className={className}
    style={{ display: 'none' }}
  >
    <span className="image main" style={{ margin: '0 0 0 0' }}>
      <img src={rficCover} alt="" />
    </span>
    <h2 className="major">JuniorDev Meetup Talk</h2>
    <p>
      In October of 2024, I was graciously invited to give a talk at the{' '}
      <a
        href="https://www.meetup.com/JuniorDev-Auckland/events/287710026/"
        target="_blank"
      >
        JuniorDev Auckland Meetup.
      </a>{' '}
      Here's the description from the meetup page:
      <br />
      <br />
      <blockquote>
        <b>
          Talk 1: Lessons I've Learnt in Reducing Friction: Why Intentional
          Communication Matters
        </b>
        <br />
        <br />
        Over the past year, I've had a lot of opportunities to make an impact in
        various parts of my organisation. With each opportunity came a new set
        of lessons; ways that I messed up that I could learn from. I got a lot
        of feedback from lots of people, and the one thing I focused on which
        really turned everything around was my communication. By being more
        intentional with my communication, I earned people's trust, became more
        productive, and reduced a lot of friction that had surrounded my work.
        Now I'd like to share what I've learned so that we can all level up the
        way we communicate and work together.
      </blockquote>
      <br />
      My slide deck was created with{' '}
      <a href="https://sli.dev/" target="_blank">
        Slidev.
      </a>{' '}
    </p>
    <ul
      className="icons"
      style={{ marginTop: '-0.75rem', marginBottom: '-0.5rem' }}
    >
      <li>
        <a
          href="https://github.com/Matteas-Eden/rfic-talk"
          className="icon fa-github"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://rfic.matteden.nz/"
          className="icon fa-play"
          target="_blank"
        >
          <span className="label">Website</span>
        </a>
      </li>
    </ul>
    {close}
  </article>
)
