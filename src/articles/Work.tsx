import React from 'react';

import { ArticleProps } from "./ArticleProps"
interface WorkProps extends ArticleProps {
    onSwitchArticle: Function,
}

export const Work = ({ className, onSwitchArticle, close }: WorkProps) => {

    return (
        <article
            id="work"
            className={className}
            style={{ display: 'none' }}
        >
            <h2 className="major">Work</h2>
            {/* <h3 style={{ marginBottom: 0 }}>Current Projects</h3>
            <button
                onClick={() => {
                    onSwitchArticle('BakuganRerolled')
                }}
            >
                Bakugan Rerolled
            </button>
            <button
                onClick={() => {
                    onSwitchArticle('SelfHostedKubernetes')
                }}
            >
                Self-Hosted Kubernetes
            </button> */}
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