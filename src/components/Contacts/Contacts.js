// import { useDispatch, useSelector } from 'react-redux';
// import {
// useEffect
// useState,
// } from 'react';
import s from './Contacts.module.css';
// import { fetchContacts, removeContact } from '../../redux/phoneBookOperation';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from '../../redux/phonebookAPI';

const Contacts = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const [removeContact] = useRemoveContactMutation();

  // const dispatch = useDispatch();
  // const { entities, filter } = useSelector(state => state.contacts);
  // const contacts = entities.filter(({ name }) =>
  //   name.toLowerCase().includes(filter)
  // );
  const handleDeleteContact = async id => {
    await removeContact(id).unwrap();
  };

  return (
    <div>
      <ul>
        {data.map(contact => {
          return (
            <li key={contact.id} className={s.item}>
              <button
                key={contact.id}
                name={contact.name}
                className={s.buttonDelete}
                type="button"
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contacts;
