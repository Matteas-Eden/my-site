import React from 'react';
import me from '../images/matt.jpg'
import { ArticleProps } from './ArticleProps';

export const About = ({className, close} : ArticleProps) => (
    <article
        id="about"
        className={className}
        style={{ display: 'none' }}
    >
        <h2 className="major">About Me</h2>
        <span className="image main">
            <img src={me} alt="" />
        </span>
        <p>
            Hey there, I'm Matt Eden and I work as a computer engineer in
            Auckland, New Zealand.
            <br />I created this website to make it easier for interested people
            to learn a little bit about me and, just as importantly, check out
            some of my awesome work.
        </p>
        <h3>Who am I?</h3>
        <p>
            I'm just someone who likes computers. It's sort of hard to imagine
            myself without one, to be honest. Over time, electronic devices have
            embedded themselves into seemingly every aspect of our lives and
            uplifted our day-to-day activities. As a result of that, I love
            learning about them.
        </p>
        <h3>What do I do?</h3>
        <p>
            Truth be told, I dabble in a little bit of everything. Whether it's
            writing low-level C for embedded contexts, throwing together enough
            TypeScript to get a website running, spinning up Docker instances to
            host local databases, configuring a Linux server to act as a private
            cloud or wrangling with AWS for a corporate cloud... I've probably
            done it. Or tried to, at least.
        </p>

        {close}
    </article>
)