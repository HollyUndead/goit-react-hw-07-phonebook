import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'app/thunk';
import './contacts.css';

export const ContactItem = ({ ...props }) => {
  const { name, phone, elementId } = props;
  const dispatch = useDispatch();

  const deletContact = () => {
    dispatch(deleteContact(elementId));
  };

  return (
    <li>
      <div className="contact-wrap">
        {name}: {phone}
        <button className="delete-contact" onClick={deletContact}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  phone: PropTypes.string,
  name: PropTypes.string,
  elementId: PropTypes.string,
};
