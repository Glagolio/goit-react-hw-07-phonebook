import Phonebook from './Phonebook/Phonebook';
import Main from './Main/Main';
import Contacts from './Phonebook/Contacts/Contacts';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';

const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);
  console.log(isLoading);

  return (
    <Main title="Phonebook">
      <Phonebook />
      {!isLoading ? <Contacts name="Contacts" /> : <p>Phonebook empty</p>}
      {error && <p>Sorry.. somethiing wrong. Try again.</p>}
    </Main>
  );
};

export default App;
