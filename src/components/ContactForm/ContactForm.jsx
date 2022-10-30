import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
import {PhoneForm, FormLabel, FormInput, FormBtn} from './ContactForm.styled'

class ContactForm extends Component{

    state = {
        name: '',
        number: '', 
    };

    handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
    };

    handleSubmit = event => {
      event.preventDefault();       

      this.props.onSubmit(this.state)

      this.reset();
    };

  reset = () => {
    this.setState({ name: '', number: '' })
  };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
          <PhoneForm>
            <FormLabel htmlFor="input Name">
              Name
            </FormLabel>
            <FormInput
              onChange={this.handleChange}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              />
            <FormLabel htmlFor="input Name">
              Number
            </FormLabel>
            <FormInput
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
              />
            <FormBtn type="submit">Add Contact</FormBtn>
          </PhoneForm>
        </form>
        )
    }
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};