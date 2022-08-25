import React, { useState } from 'react'
import { useForm } from '@formspree/react'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqbvadw')
  const [hasName, setHasName] = useState<boolean>(false)
  const [hasEmail, setHasEmail] = useState<boolean>(false)
  const [hasMessage, setHasMessage] = useState<boolean>(false)

  const hasEmptyFields: boolean = !(hasName && hasEmail && hasMessage)

  const isDisabled = state.submitting || hasEmptyFields

  const resetForm = () => {
    setHasName(false)
    setHasEmail(false)
    setHasMessage(false)
  }

  if (state.succeeded) {
    return <h2>Thanks for your message!</h2>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => {
            setHasName(e.target.value !== '')
          }}
        />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            const isValidEmail = !(
              e.target.validity.typeMismatch || e.target.validity.valueMissing
            )
            setHasEmail(isValidEmail)
          }}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          onChange={(e) => setHasMessage(e.target.value !== '')}
        ></textarea>
      </div>
      <ul className="actions">
        <li>
          <input
            type="submit"
            value="Send Message"
            className="special"
            disabled={isDisabled}
          />
        </li>
        <li>
          <input type="reset" value="Reset" onClick={resetForm} />
        </li>
      </ul>
    </form>
  )
}
