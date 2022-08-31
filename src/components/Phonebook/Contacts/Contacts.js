import React from 'react';
import ContactsItem from './Contacts.styled';
import InputFilter from '../Input/InputFilter/inputFilter';
import LabelFilter from '../Label/LabelFilter/LabelFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';
// import { removeContact } from 'redux/contactsSlice';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

const Contacts = ({ name }) => {
  // const dispatch = useDispatch();
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  return (
    <ContactsItem>
      <p>{name}</p>
      <LabelFilter title="Find contacts by name">
        <InputFilter />
      </LabelFilter>
      <ul>
        {visibleContacts.map(data => (
          <li key={data.id}>
            <span>
              {data.name} {data.phone}
            </span>
            <ButtonDelete
              name="Delete"
              onClickDelete={() => deleteContact(data.id)}
              id={data.id}
            />
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};

export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
};
