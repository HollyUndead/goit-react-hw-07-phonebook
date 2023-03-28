import { useDispatch, useSelector } from 'react-redux';

import './fomr.css';
import { postContact } from 'app/thunk';

export const FormCreateContact = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const addNewContact = ev => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const phone = ev.target.phone.value;
    const names = state.contacts.items.filter(el => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    const numbers = state.contacts.items.filter(el => {
      return Number(el.phone) === Number(phone);
    });
    if (names.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    } else if (numbers.length !== 0) {
      alert(`${phone} is already in contacts`);
      return;
    } else {
      dispatch(postContact({ name, phone }));
    }
    ev.target.reset();
  };

  return (
    <form onSubmit={addNewContact} className="form-contact">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="phone">Number</label>
      <input
        type="tel"
        name="phone"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className="create-contact">
        Add contact
      </button>
    </form>
  );
};
