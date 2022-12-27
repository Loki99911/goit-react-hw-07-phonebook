import { useState } from 'react';
import { FormBlock, FormTitle, FormInput, FormBtn } from './ContactForm.styled';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setPhone(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.items.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <FormTitle>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </FormTitle>
      <FormTitle>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
        />
      </FormTitle>
      <FormBtn type="submit" disabled={contacts.isLoading}>
        Add contact
      </FormBtn>
    </FormBlock>
  );
};
