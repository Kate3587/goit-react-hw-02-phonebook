import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';

class LoginForm extends Component{

    state = {
        contacts: [{id:1, name:"Katya", number:"4949165"}],
        filter: '',
        name: '',
        number: ''
    };

    handleChange = event => {
        const {name, value} = event.target
        console.log(event.target.value);
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newContact = { id: nanoid(), name: this.state.name  ,number: this.state.number}

        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact]
        })
          
        )
      
    }

    render() {
        const { name, number} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="input Name">
                    Name
                </label>
                    <input
                        onChange = {this.handleChange}
                        type="text"
                        value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                <label htmlFor="input Name">
                    Number
                </label>
                    <input
                        onChange = {this.handleChange}
                    type="tel"
                        name="number"
                        value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add Contact</button>
            </div>
                </form>
                <div>
                    <h2>Contacts</h2>
                    <div>{name}: {number}</div>
                </div>
            </div>
        
    )}
};

export default LoginForm;