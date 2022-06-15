import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Contacts.module.css';
import { fetchContacts, removeContact } from '../../redux/phoneBookOperation';
const Contacts = () => {
  const dispatch = useDispatch();
  const { entities, filter } = useSelector(state => state.contacts);
  const contacts = entities.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={s.item}>
              <button
                key={contact.id}
                name={contact.name}
                className={s.buttonDelete}
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
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
