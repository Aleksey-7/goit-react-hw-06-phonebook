import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { GlobalStyle } from './GlobalStyle';
import { Layout, Subtitle, Title } from './Layout';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts ? setContacts(parsedContacts) : setContacts([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name || contact.number === number)
      ? Report.warning(
          `${name}`,
          'This user or number is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <Title>
        Phone<span>book</span>
      </Title>
      <ContactForm onSubmit={addContact} />

      <Subtitle>Contacts</Subtitle>
      <Filter filter={filter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </Layout>
  );
}
