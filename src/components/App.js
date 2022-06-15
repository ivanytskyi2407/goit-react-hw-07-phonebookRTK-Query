import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { status, error } = useSelector(state => state.contacts);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error && alert(error)}
      {status === 'loading' && <Loader />}
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};
