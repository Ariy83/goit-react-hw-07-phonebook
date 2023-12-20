import { Flex, StyledButton } from 'components/ContactForm/ContactForm.styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContactThunk } from '../../redux/phoneBook/operations'


export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch()
  return (
      <li>
          <Flex>
          <h3>{name}: {number}</h3>
              <StyledButton onClick={() => dispatch(deleteContactThunk(id))}>Delete</StyledButton>
          </Flex>
      </li>
  )
}
