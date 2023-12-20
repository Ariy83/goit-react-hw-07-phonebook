import React, { useEffect } from "react"
import { StyledTitle } from "./ContactForm/ContactForm.styled"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "../redux/phoneBook/selectors";
import { addContactThunk, fetchContactsThunk } from "../redux/phoneBook/operations";

export const App = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const loading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())    
  }, [dispatch])
  
  
  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`)
      return
    }
    const newContact = {  name, number, }
    dispatch(addContactThunk(newContact))
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

      {loading && <h1>Loading....</h1>}
			{error && <h1>{error}</h1>}
      
    </div>
  )
}