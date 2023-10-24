import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contactform.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;

    if (name === '' || number === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

        
onAddContact(newContact)
   

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.wrapper} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
        </label>

        <label>
          Number:
          <input className={css.contactform_input} type="tel" name="number" value={this.state.number} onChange={this.handleNumberChange} required />
        </label>
        <button type="submit" className={css.add_btn}>Add Contact</button>
        </form>
    );
  }
}

// export default ContactForm;