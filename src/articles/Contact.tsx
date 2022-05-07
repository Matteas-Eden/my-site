import React from 'react'
import { ContactForm } from '../components/ContactForm'

import { ArticleProps } from './ArticleProps'

export const Contact = ({ className, close }: ArticleProps) => {
  return (
    <article id="contact" className={className} style={{ display: 'none' }}>
      <h2 className="major">Contact</h2>
      <ContactForm />
      {close}
    </article>
  )
}
