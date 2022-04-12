// import React, { useState } from 'react';
import React from 'react';

// import { Outerstellar } from './work/Outerstellar';
// import { Accordion, Icon } from 'semantic-ui-react';
// import { TestArticle } from './work/TestArticle';

// import '../assets/css/semantic-accordion.css';

import { ArticleProps } from "./ArticleProps"
interface WorkProps extends ArticleProps {
    onSwitchArticle: Function,
}

export const Work = ({ className, onSwitchArticle, close }: WorkProps) => {

    // const [activeIndex, setActiveIndex] = useState<number>(-1);

    // const updateActive = (index: number) => {
    //     if (index === activeIndex) {
    //         setActiveIndex(-1);
    //     } else {
    //         setActiveIndex(index);
    //     }
    // }

    return (
        <article
            id="work"
            className={className}
            style={{ display: 'none' }}
        >
            <h2 className="major">Work</h2>
            <h3 style={{ marginBottom: 0 }}>Current Projects</h3>
            <button
                onClick={() => {
                    onSwitchArticle('outerstellar')
                }}
            >
                bakugan rerolled
            </button>
            <button
                onClick={() => {
                    onSwitchArticle('outerstellar')
                }}
            >
                self-hosted kubernetes
            </button>
            <h3 style={{ marginBottom: 0 }}>Past Projects</h3>
            <button
                onClick={() => {
                    onSwitchArticle('outerstellar')
                }}
            >
                Outerstellar [2016]
            </button>
            {close}
        </article >)
}