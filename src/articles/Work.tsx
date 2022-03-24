import React, { useState } from 'react';
import { ArticleProps } from './ArticleProps';
import { Outerstellar } from './work/Outerstellar';
import { Accordion, Icon } from 'semantic-ui-react';

import '../assets/css/semantic-accordion.css';

export const Work = ({ className, close }: ArticleProps) => {

    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const updateActive = (index: number) => {
        if (index === activeIndex) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    }

    /** Refactoring notes
     * Iterate over several components
     * and dynamically allocate index
     * 
     * also maybe divide into 'past' and 'current' projects
     * 
     * also look into callbacks for making the accordion items modular
     * but still changing the state
     */
    return (
        <article
            id="work"
            className={className}
            style={{ display: 'none' }}
        >
            <h2 className="major">Work</h2>
            <Accordion inverted>
                <Accordion.Title
                 active={activeIndex === 0}
                 index={0}
                 onClick={() => updateActive(0)}
                >
                    Roll for Reaction [2020]
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    Hello world
                </Accordion.Content>
                <Accordion.Title
                 active={activeIndex === 1}
                 index={1}
                 onClick={() => updateActive(1)}
                >
                    Energize [2019]
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <i>Outerstellar</i> is a top-down arcade space shooter made in
                    GameMaker. The story goes that a group of high-schoolers used a
                    government grant to fund an "Arcade Games Hackathon", my computer
                    science teacher at the time told our class about it, and then I
                    signed up. Queue me being paired...
                </Accordion.Content>
                <Accordion.Title
                 active={activeIndex === 2}
                 index={2}
                 onClick={() => updateActive(2)}
                >
                    Wireless Energy Monitor [2018]
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <i>Outerstellar</i> is a top-down arcade space shooter made in
                    GameMaker. The story goes that a group of high-schoolers used a
                    government grant to fund an "Arcade Games Hackathon", my computer
                    science teacher at the time told our class about it, and then I
                    signed up. Queue me being paired...
                </Accordion.Content>
                {/* <Outerstellar /> */}
            </Accordion>


            {close}
        </article >)
}