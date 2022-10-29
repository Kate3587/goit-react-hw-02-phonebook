// import LoginForm from '../LoginForm/LoginForm';
import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
// import Contacts from '../../data/usersContacts';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = { id: nanoid(), name: data.name, number: data.number };
     console.log(newContact)

    this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
    }))
    
  }
  
  
  
  handleFilter = event => {
    console.log(this.state)
    this.setState({
      filter: event.target.value
    })
  };

  handleDeleteUser = (id) => {
    console.log(id);
    this.setState(prevState => (
      {
        contacts: prevState.contacts.filter(item => item.id !== id)
      }));
  };
  
  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredUsers = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onSubmit = {this.formSubmitHandler}
          
        />
        <div>
          <h2>Contacts</h2>
          <Filter
            inputLabel="Find contacts by name"
            onChangeFilter={this.handleFilter}
            value={filter}
           
          />
          <ContactList
            filterForUsers={filteredUsers}
            onDeleteUsers ={this.handleDeleteUser}
          />         
                    
        </div>
      </div>
    
    )
  };
};

export default App;