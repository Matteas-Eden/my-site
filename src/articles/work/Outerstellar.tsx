import React from 'react';
import outerstellarCover from '../../images/outerstellar.png';
import { ArticleProps } from '../ArticleProps';

export const Outerstellar = ({className, close} : ArticleProps) => (
    <article id="outerstellar" className={className} style={{ display: 'none' }}>
        <span className="image main" style={{margin: '0 0 1.5rem 0'}}>
            <img src={outerstellarCover} alt="" />
        </span>
        <h2 className='major'>Outerstellar</h2>
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
        {close}
    </article>
)