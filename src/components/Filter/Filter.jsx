import { StyledInput, StyledLabel } from 'components/ContactForm/ContactForm.styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeFilter } from '../../redux/phoneBook/phoneBookSlice'
import { selectFilter } from '../../redux/phoneBook/selectors'


export const Filter = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <StyledLabel>
          Find contacts by name:
          <StyledInput
              value={filter} onChange={(e)=> dispatch(changeFilter(e.target.value))}
              name="filter" />
        </StyledLabel>
  )
}
