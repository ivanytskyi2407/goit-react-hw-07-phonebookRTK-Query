import { useSelector } from 'react-redux';
import s from './Contacts.module.css';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from '../../redux/phonebookAPI';

const Contacts = () => {
  const { data = [] } = useGetContactsQuery();
  const [removeContact] = useRemoveContactMutation();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const contacts = data.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = async id => {
    await removeContact(id).unwrap();
  };

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
