import React from 'react'
import energizeCover from '../../images/energize.png'
import { ArticleProps } from '../ArticleProps'

export const Energize = ({ className, close }: ArticleProps) => (
  <article id="energize" className={className} style={{ display: 'none' }}>
    <span className="image main" style={{ margin: '0 0 1.5rem 0' }}>
      <img src={energizeCover} alt="" />
    </span>
    <h2 className="major">Energize</h2>
    <p>
      <i>Energize</i> is a side-scrolling action adventure game that follows
      you, the hero, as you traverse a randomly-generated dungeon in your quest
      to defeat the "big bad evil guy" waiting for you at the end. Find items
      along the way to help you in your quest, or bring along a friend to watch
      your back and help you cut down the enemies that stand in your way.
      <br />
      Created in{' '}
      <a href="https://openjdk.java.net/" target="_blank">
        Java 11
      </a>{' '}
      using the{' '}
      <a href="https://openjfx.io/" target="_blank">
        JavaFX
      </a>{' '}
      library.
      <br />
      <b>Features:</b>
      <ul style={{ margin: '0' }}>
        <li>Save/Load</li>
        <li>LAN Multiplayer (up to 4 players)</li>
        <li>Enemy AI</li>
        <li>Inventory</li>
        <li>Item Pickups</li>
        <li>Variable Difficulty</li>
        <li>Minimap</li>
        <li>Randomised Levels</li>
        <li>Sound Effects & Background Music</li>
      </ul>
    </p>
    <ul
      className="icons"
      style={{ marginTop: '-0.75rem', marginBottom: '-0.5rem' }}
    >
      <li>
        <a
          href="https://github.com/Matteas-Eden/energize"
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
