import React, { Component } from 'react';
import { ContactsList } from './components/ContactsLists.js';

class App extends Component {
  render() {
    return (
      <div>
        <ContactsList />
      </div>
    )
  }
}

export default App;