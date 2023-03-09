import React, { Component } from "react";
import { nanoid } from 'nanoid'



export class App extends Component {
  state = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: ''
  }

  contactId() { return nanoid(3) }
 
  handleSubmit = evt => {
    evt.preventDefault();
    const{name, number, contacts} = this.state
    this.setState({
      contacts: [{
        id: this.contactId(),
        name: name,
        number: number
      }, ...contacts]
    })
    this.reset();
 }
 
  handleChange = evt => {
      const {name, value} = evt.target
    this.setState({ [name]: value });
  };
 
  reset() {
    this.setState({name: "", number:""})
  }

  findContact = evt => {
      const {value} = evt.target
      this.setState({ filter: value });
  }

  getVisibleContacts = () => {
    const{filter, contacts}=this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const { name, number, filter } = this.state;

    
    const visibleContact = this.getVisibleContacts();

    return(
    <>
      <h2>Phonebook</h2> 
        
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
            <input
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />    
          </label>
          
          <label>
            Number
            <input
              value={number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        
        <button type="submit">Add contact</button>
        </form>  
        
        <div>
          <h2>Contacts</h2>
          <label>Find contacts by Name
            <input
              value={filter}
              onChange={this.findContact}
              type="text"
              name="filter"/>
          </label>
          <ul>
            <li>{visibleContact.map(el => (<p key={el.id}>{el.name}: { el.number}</p>)) }</li>
          </ul>
        </div>
      
    </>
  );
  }
};
