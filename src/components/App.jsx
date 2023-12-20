import React from "react"
import { StyledTitle } from "./ContactForm/ContactForm.styled"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../redux/phoneBook/phoneBookSlice';
import { selectContacts, selectFilter } from "../redux/phoneBook/selectors";

export const App = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  
  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`)
      return
    }
    const newContact = { id: nanoid(), name, number, }
    dispatch(addContact(newContact))
  }

  
  const getFilteredData = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) 
    )
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >

      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm handleAddContact={handleAddContact}
       />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={getFilteredData()} />
      
    </div>
  )
}