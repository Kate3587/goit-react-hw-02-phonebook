// import LoginForm from '../LoginForm/LoginForm';
import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { PhonebookWrapper, MainBookTitle, BookTitle} from './App.styled';
// import Contacts from '../../data/usersContacts';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
     console.log(newContact)

    this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
    }))
    
  }
    
  handleFilter = event => {
    this.setState({
      filter: event.target.value
    })
  };

  handleDeleteUser = (id) => {
    this.setState(prevState => (
      {
        contacts: prevState.contacts.filter(item => item.id !== id)
      }));
  };
  
  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredUsers = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <PhonebookWrapper>
        <MainBookTitle>Phonebook</MainBookTitle>
        <ContactForm
          name={name}
          number={number}
          onSubmit = {this.formSubmitHandler}
          
        />
        <div>
          <BookTitle>Contacts</BookTitle>
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
      </PhonebookWrapper>
    )
  };
};

export default App;