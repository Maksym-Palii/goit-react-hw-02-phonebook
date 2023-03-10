import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "components/contactForm/ContactForm"
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { ContactItem } from "components/contactItem/ContactItem"
import css from "components/App.module.css"



export class App extends Component {
  state = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  contactId() { return nanoid(3) }
 
  addContact = (name, number) => {
    const { contacts } = this.state
    const data = {
      id: this.contactId(),
      name,
      number,
    }

    if (contacts.find(obj=>obj.name === name)) {
      alert(`${name} is already in contacts.`)
      return;
    };
  
    this.setState({
            contacts: [data, ...contacts]
          })
   
  }  
  
 
  // reset() {
  //   this.setState({name: "", number:""})
  // }

  deleteContact = (contactId) => {
    
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId)
    }))    
  }

  findContact = evt => {
      const {value} = evt.target
      this.setState({ filter: value });
  }

  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const { filter} = this.state;
    
    const visibleContact = this.getVisibleContacts();

    return(
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2> 
        <ContactForm onSubmit={this.addContact} />
              
        
        <h2 className={css.title}>Contacts</h2>
      <div className={css.smalContainer}>
        <Filter filter={ filter} findContact={this.findContact} />
          
        <ContactList>
          <ContactItem visibleContact={visibleContact} onDeleteContact={this.deleteContact} />
        </ContactList>
      </div>
    </div>
  );
  }
};
