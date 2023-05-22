import React from 'react';
import { Contact } from './Contact';
import { contactsApi } from '../rest/ContactsApi';

// 'state' points to the 'contacts' array coming from the mock API
export class ContactsList extends React.Component {
    state = {
        contacts: []
    };

    // 'componentDidMount' lifecycle method 
    // Inside this method, 'fetchContacts' function is called
    componentDidMount() {
      this.fetchContacts();
      console.log(this.fetchContacts);
    };

    // 'fetchContacts function' - purpose is to fetch the list of 'contacts' from the API using 'contactsApi.get()'
    // Asynchronous 'async' function - awaits the response

    // ISSUE FIXED!!! 
    // modified the 'fetchContacts' function to directly set the state without using object destructuring 
    // Replaced this.setState({ contacts }); 
    //   - with this.setState({ contacts: contacts.contacts });:
    fetchContacts = async () => {
        const contacts = await contactsApi.get();
        this.setState({ contacts: contacts.contacts });
      };      

    // 'updateContact' method 
    // Asynchronous function - takes an 'updatedContact' parameter
    // 'contactsApi.put(updatedContacts)' - is used to make an HTTP PUT' request to the API
    // It calls 'this.fetchContacts()' to fetch the updated list of contacts again and update the component's state
    updateContact = async (updatedContact) => {
      await contactsApi.put(updatedContact);
      this.fetchContacts();
    };

    // The render method is responsible for rendering the component's UI
    // maps over the this.state.contacts array and creates a Contact component for each contact in the list
    // Passes the contacts object, a unique key based on the contact's '.id', and 'updateContact' function as props to each 'Contact' component
    render() {
      return (
        <div className='contacts-list'>
          {this.state.contacts.length > 0 && this.state.contacts.map((contact) => (
            <Contact
              contact={contact}
              key={contact.id}
              updateContact={this.updateContact}
              />
          ))}
        </div>
      )
    }
}