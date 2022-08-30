import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';

const ButtonDelete = ({ name, onClickDelete }) => (
  <ButtonDeleteStyle type="button" onClick={onClickDelete}>
    {name}
  </ButtonDeleteStyle>
);

export default ButtonDelete;

ButtonDelete.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
