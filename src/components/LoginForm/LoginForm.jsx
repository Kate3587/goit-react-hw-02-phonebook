import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';

class LoginForm extends Component{

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
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
        const newContact = { id: nanoid(), name: this.state.name, number: this.state.number }
        console.log (newContact)

        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact]
        }))

        this.setState({name: '', number: ''})
    };

    handleFilter = event => {
        this.setState({ filter: event.target.value })
    };

    handleDeleteUser = (id) => {
        console.log (id)
        this.setState(prevState => {
            return {
                contscts: prevState.contacts.filter(item => item.id !== id)
            };
        });
    };
    

    render() {
        const { name, number, contacts, filter, id, handleDeleteUser } = this.state;
        const filteredUsers = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        const onDelete = () => {
            handleDeleteUser(id)
        }

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
                            placeholder="Name"
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
                            placeholder="Number"
                />
                <button type="submit">Add Contact</button>
            </div>
                </form>
                <div>
                    <h2>Contacts</h2>
                    <label htmlFor="Find contacts by name">
                    Find contacts by name
                </label>
                    <input
                        onChange = {this.handleFilter}
                        type="text"
                        value={filter}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder="Search username"
                    />
                    <ul>
                            {
                                filteredUsers.map(item => (
                                    <li>
                                        <span>{item.name}: {item.number}</span>
                                        <button onClick={onDelete} type="button">Delete</button>
                                    </li>
                        ))
                            }
                        </ul>
                        
                    
                </div>
            </div>
        
    )}
};

export default LoginForm;