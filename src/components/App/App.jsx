import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { PhonebookWrapper, MainBookTitle, BookTitle} from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const contactUniq = this.state.contacts.map(item => item.name).filter(name => name.toLowerCase() === data.name.toLowerCase())

    if (
      contactUniq.length === 0
    ) {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      this.setState(prevState => (
        {
          contacts: [...prevState.contacts, newContact],
        }))
    } else {
      alert(contactUniq + 'is alrady in contacts.')
    }
  };

    
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
    const { contacts, filter } = this.state;
    const filteredUsers = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <PhonebookWrapper>
        <MainBookTitle>Phonebook</MainBookTitle>
        <ContactForm
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