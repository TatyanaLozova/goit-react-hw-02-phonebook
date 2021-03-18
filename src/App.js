import React, { Component } from 'react';
 import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList';
import Filter from './Components/Filter'


import './App.css';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // добавляем контакт
  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    } else {
      this.setState((prevState) => ({
          contacts: [contact, ...prevState.contacts],
      }));
    }
  };
   // удаляет контакты
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
// Фильтр 
     changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    };
  
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };
  
  render() {
    const {
      addContact,
      changeFilter,
      filterContacts,
      deleteContact,
     
    } = this;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSumbmit={addContact} />

        <h1>Contacts</h1>
        <Filter
          filter={this.state.filter}
          changeFilter={changeFilter}
        />
        <ContactList
          contacts={filterContacts}
        deleteContact={deleteContact}/>
      </div>
    );
  }
}


export default App;
