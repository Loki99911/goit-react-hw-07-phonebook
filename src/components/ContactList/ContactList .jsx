import { ContactItem } from '../ContactItem/ContactItem';
import { ListBlock } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchContacts()); }, [dispatch])
  
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContact = () => {
    if (contacts.length!==0) { return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    }
    return [];
  };

  return (
    <ListBlock>
      {filterContact().map(contact => {
        const { id } = contact;
        return (
          <ContactItem
            key={id}
            contactItem={contact}
            onClick={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ListBlock>
  );
};
