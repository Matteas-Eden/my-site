import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { RouteComponentProps } from 'react-router'

import '../assets/scss/main.scss'

export const Layout: React.FC<RouteComponentProps> = ({
  children,
  location,
}) => {
  let content: JSX.Element

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  'Software Developer, Computer Engineer and Linux Enthusiast',
              },
              {
                name: 'keywords',
                content: 'matt, eden, developer, engineer, gatsby, react',
              },
            ]}
          >
            <html lang="en" />
            <script
              async
              defer
              data-website-id="d7fa3c92-093e-431d-b7b3-1ada0da53156"
              src="https://umami.matteas.nz/umami.js"
            ></script>
          </Helmet>
          {content}
        </>
      )}
    />
  )
}
