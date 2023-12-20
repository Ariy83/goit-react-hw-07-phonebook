import { Flex, StyledButton } from 'components/ContactForm/ContactForm.styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/phoneBook/phoneBookSlice'

export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch()
  return (
      <li>
          <Flex>
          <h3>{name}: {number}</h3>
              <StyledButton onClick={() => dispatch(deleteContact(id))}>Delete</StyledButton>
          </Flex>
      </li>
  )
}
