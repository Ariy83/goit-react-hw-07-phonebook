import { StyledButton } from 'components/ContactForm/ContactForm.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'
import React from 'react'

export const ContactList = ({contacts=[]}) => {
  return (
      <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id}
              {...contact}
              name={contact.name}
              phone={contact.phone}
            >
              <StyledButton >Add contact</StyledButton>
            </ContactItem>
			))}
      </ul>
  )
}
