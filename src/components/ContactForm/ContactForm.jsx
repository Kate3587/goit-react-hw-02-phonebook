import React from "react";
import { Component } from "react";

class ContactForm extends Component{
   

    state = {
        name: '',
        number: '', 
        
    };
   

    handleChange = event => {
    const { name, value } = event.target
    console.log(event.target.value);
    this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="input Name">
              Name
            </label>
            <input
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
        )
    }
};

export default ContactForm;