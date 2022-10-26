import React from "react";
import { Component } from "react";

class LoginForm extends Component{

    render() {
        return(
        <form>
            <div>
                <label for="input Name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="button">Add Contact</button>
            </div>
        </form>
    )}
};

export default LoginForm;