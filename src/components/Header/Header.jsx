import { useState } from 'react';
import { Title, TitleColor, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts-slice';

export function Header() {
  const [showModal, setShowModal] = useState(false);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    const newElement = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name || contact.number === number)
      ? Report.warning(
          `${name}`,
          'This user or number is already in the contact list.',
          'OK'
        )
      : dispatch(addContact(newElement));
  };

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} onSubmit={addNewContact} />
        </Modal>
      )}
    </>
  );
}
