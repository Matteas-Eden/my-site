import React from 'react'
import rollForReactionCover from '../../images/roll-for-reaction.png'
import { ArticleProps } from '../ArticleProps'

export const RollforReaction = ({ className, close }: ArticleProps) => (
  <article
    id="roll-for-reaction"
    className={className}
    style={{ display: 'none' }}
  >
    <span className="image main" style={{ margin: '0 0 1.5rem 0' }}>
      <img src={rollForReactionCover} alt="" />
    </span>
    <h2 className="major">Roll for Reaction</h2>
    <p>
      Roll for Reaction is a top-down action adventure RPG which enables you, as
      the player, to explore a set of dungeons, collecting the items and
      abilities required to defeat the enemies you encounter along the way.
      Loosely based on the real-world tabletop RPG Dungeons and Dragons and
      forked from a pre-existing open-source project, the game includes the
      following features:
      <ul style={{ margin: '0' }}>
        <li>Point-based ability scores that determine player stats</li>
        <li>
          Character progression through randomly-generated items found
          throughout levels
        </li>
        <li>Melee, ranged and magic playstyles</li>
        <li>Supported on both desktop and mobile</li>
        <li>A variety of enemies across many, many levels</li>
      </ul>
      Created with{' '}
      <a href="https://reactjs.org/" target="_blank">
        React
      </a>{' '}
      and{' '}
      <a href="https://reduxjs.org/" target="_blank">
        Redux
      </a>
      .
    </p>
    <ul
      className="icons"
      style={{ marginTop: '-0.75rem', marginBottom: '-0.5rem' }}
    >
      <li>
        <a
          href="https://github.com/Matteas-Eden/roll-for-reaction"
          className="icon fa-github"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://matteas.nz/roll-for-reaction"
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
