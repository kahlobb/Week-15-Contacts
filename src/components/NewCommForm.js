import React, { useState } from 'react';

// Function Component: The NewCommForm component is defined as a functional component using arrow function syntax
// State Management: Two state variables, phone and email, are declared using the useState hook
// The phone state holds the value of the comm phone input field, and the email state holds the value of the comm email input field
// The initial values are set to an undefined for phone and an empty string for email
export const NewCommForm = (props) => {
    const [phone, setPhone] = useState(undefined);
    const [email, setEmail] = useState('');

    // Input Event Handlers: The component defines an event handler called 'handlePhoneInput' that is triggered when the phone input field value changes
    // It parses the input value to an integer and updates the 'phone' state accordingly
    // If the input value is a valid non-negative integer, it is stored in the state
    // Otherwise, an empty string is set to the phone state
    const handlePhoneInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setPhone(int >= 0 ? int : '');
    }

    // Form Submission: The onSubmit function is triggered when the form is submitted
    // It prevents the default form submission behavior
    // If either the phone or email fields are filled, the 'addNewComm' function (received via props) is called with an object containing the phone and/or email values
    // After adding the new comm, the phone and email states are reset to empty values
    // ****If either field is empty, an "invalid input" message is logged to the console
    const onSubmit = (e) => {
        e.preventDefault();
        if(phone || email) {
            props.addNewComm();
            setPhone('');
            setEmail('');
        } else {
            console.log('invalid input');
        }
    };

    // JSX Markup: The component renders a form with input fields for comm phone and email
    // The onChange event handlers are assigned to update the corresponding state variables (phone and email) when the input values change
    // The current values of phone and email are also assigned to the value attributes of the input fields to ensure controlled input
    // When the form is submitted, the onSubmit function is called
    // Finally, a "Add Comm" button is included to trigger the form submission
    return (
        <div>
            <h4>Add a New Communication Method: Phone OR Email</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Phone'
                    onChange={handlePhoneInput}
                    value={phone}>
                </input>
                <input
                    type='text'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}>
                </input>
                <button type='submit'>Add Communication Method</button>
            </form>
        </div>
    )
};