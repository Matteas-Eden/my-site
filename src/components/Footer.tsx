import React from 'react'

interface FooterProps {
  timeout: boolean
}

export const Footer = (props: FooterProps) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Design: <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. Made by:{' '}
      <a href="https://github.com/codebushi/gatsby-starter-dimension">
        Codebushi
      </a>
      . Customised by:{' '}
      <a href="https://github.com/Matteas-Eden/my-site">Matt Eden</a>.
    </p>
  </footer>
)
