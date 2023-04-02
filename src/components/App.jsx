import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
      </Layout>

      <Layout title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Layout>
    </>
  );
}
