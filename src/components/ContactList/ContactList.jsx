import { List } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
    
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </List>
    )
}
