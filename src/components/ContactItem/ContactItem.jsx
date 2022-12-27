import PropTypes from 'prop-types';
import { ItemBlock, ItemBtn } from './ContactItem.styled';
import { useSelector } from 'react-redux';

export const ContactItem = ({ contactItem, onClick }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  return (
    <ItemBlock>
      {contactItem.name}: {contactItem.phone}
      <ItemBtn type="button" disabled={isLoading} onClick={onClick}>
        Delete 
      </ItemBtn>
    </ItemBlock>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
