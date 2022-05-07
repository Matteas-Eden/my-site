import React from 'react'
import outerstellarCover from '../../images/outerstellar.png'
import { ArticleProps } from '../ArticleProps'

export const Outerstellar = ({ className, close }: ArticleProps) => (
  <article id="outerstellar" className={className} style={{ display: 'none' }}>
    <span className="image main" style={{ margin: '0 0 1.5rem 0' }}>
      <img src={outerstellarCover} alt="" />
    </span>
    <h2 className="major">Outerstellar</h2>
    <p>
      <i>Outerstellar</i> is a top-down arcade space shooter which sees the
      player traverse through multiple levels and attempt to survive various
      waves of enemies. Throughout the game, the player collects coins from
      enemies they have defeated which they can use to upgrade their ship's
      health, weapons and shields. By prioritising the correct upgrades, moving
      quickly and persevering through hordes of the enemies, the player will
      make it to the final level where they must face one last enemy before
      declaring themselves victorious.
      <br />
      Created in{' '}
      <a href="https://gamemaker.io/en/gamemaker" target="_blank">
        GameMaker Studio
      </a>{' '}
      during an <i>Arcade Games Hackathon</i>. Won 2nd place.
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
    {close}
  </article>
)
