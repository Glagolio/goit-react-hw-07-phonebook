import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

const ButtonDelete = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ButtonDeleteStyle
      type="button"
      disabled={isLoading}
      onClick={() => deleteContact(id)}
    >
      {isLoading ? 'wait..' : 'Delete'}
    </ButtonDeleteStyle>
  );
};

export default ButtonDelete;

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
