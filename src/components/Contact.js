import React from 'react';
import { NewCommForm } from './NewCommForm';

// 'props' = argument
// The 'contact' and 'updateContact' 'props' are extracted using destructuring
// Allows easy access to these 'props' within the component 
export const Contact = (props) => {
    const { contact, updateContact } = props;

    // The 'deleteComm' function is defined - 'commId' = argument
    // Inside 'deleteComm', '(...contact) creates a new object = 'updatedContact'
    // (...contact) is a spread operator
    // 'comms' is a property of 'updatedContact' 
    //  set 'updatedContact' to the results that come back when using filter method to separate the 'comm' with the matching id
    // 'updateContact' function is called with 'updatedContact' as an argument to update the contact with the modified 'comms'
    const deleteComm = (commId) => {
        const updatedContact = {
            ...contact,
            comms: contact.comms.filter((x) => x.id !== commId)
        };
        updateContact(updatedContact);
    }

    // The 'addNewComm' function is defined - takes a 'comm' object as an argument
    // Inside 'updateContact' function, new object is created using spread operator
    // Purpose of function - is taking an old array and creating a new 'comms' array and adding a new 'comm' to it
    const addNewComm = (comm) => updateContact({...contact, comms: [...contact.comms, comm]});

    // 'comms' function
    // It renders an (<ul>) containing a (<li>) for each 'comm' in the 'contact.comms' array
    // The comm's 'phone' and 'email' is within (<label>) along with a Delete (<button>)
    // When 'Delete' button is clicked - 'deleteComm' function is called with the comm's '.id' as an argument
    const comms = () => (
        <ul>
            {contact.comms.map((comm, index) => (
                <li key={index}>
                Phone: {comm.phone}
                <button onClick={(e) => deleteComm(comm.id)}>Delete Phone</button>
                <br />
                Email: {comm.email}
                <button onClick={(e) => deleteComm(comm.id)}>Delete Email</button>
                </li>
            ))}
        </ul>
    );     


    // Renders a (<div>) that contains the contact's 'name' displayed as heading
    // The 'comms' function is called as a component and passed props (comms, contactId, deleteComm)
    // This renders the list of 'comms'
    // 'NewCommForm' component is rendered - receives the 'addNewComm' function as a prop
    return (
        <div>
            <h1>{contact.name}</h1>
            {
                comms({ comms, contactId: contact._id, deleteComm})
            }
            <NewCommForm addNewComm={addNewComm} />
        </div>
    );
}