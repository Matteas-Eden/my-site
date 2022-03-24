import React from 'react';
import { ArticleProps } from './ArticleProps';
import { Outerstellar } from './work/Outerstellar';

export const Work = ({ className, close }: ArticleProps) => (
    <article
        id="work"
        className={className}
        style={{ display: 'none' }}
    >
        <h2 className="major">Work</h2>
        {/* <details>
            <summary>Roll for Reaction [2020]</summary>
            <i>Outerstellar</i> is a top-down arcade space shooter made in
            GameMaker. The story goes that a group of high-schoolers used a
            government grant to fund an "Arcade Games Hackathon", my computer
            science teacher at the time told our class about it, and then I
            signed up. Queue me being paired...
        </details>
        <details>
            <summary>Energize [2019]</summary>
            <i>Outerstellar</i> is a top-down arcade space shooter made in
            GameMaker. The story goes that a group of high-schoolers used a
            government grant to fund an "Arcade Games Hackathon", my computer
            science teacher at the time told our class about it, and then I
            signed up. Queue me being paired...
        </details>
        <details>
            <summary>Wireless Energy Monitor [2018]</summary>
            <i>Outerstellar</i> is a top-down arcade space shooter made in
            GameMaker. The story goes that a group of high-schoolers used a
            government grant to fund an "Arcade Games Hackathon", my computer
            science teacher at the time told our class about it, and then I
            signed up. Queue me being paired...
        </details> */}
        <Outerstellar />

        {close}
    </article >
)