import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqbvadw')

  if (state.succeeded) {
    return <h2>Thanks for your message!</h2>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={4} required></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <ul className="actions">
        <li>
          <input
            type="submit"
            value="Send Message"
            className="special"
            disabled={state.submitting}
          />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  )
}
