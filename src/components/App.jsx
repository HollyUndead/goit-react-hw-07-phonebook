/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from './contacts-item/contactItem';
import { FormCreateContact } from './form/form';
import { Filter } from './filter/filter';
import { fetchContacts } from 'app/thunk';

export const StateContext = createContext();

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const errors = useSelector(state => state.contacts.error);
  console.log(errors);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return errors === null ? (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormCreateContact />
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts.map(el => {
          const name = el.name.toLowerCase();
          if (name.includes(filter.toLowerCase())) {
            return (
              <ContactItem
                name={el.name}
                phone={el.phone}
                elementId={el.id}
                key={el.id}
              />
            );
          }
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>{errors}</p>
    </div>
  );
};
