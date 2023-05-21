import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";

import { Container } from './Phonebook.styled';
import Section from '../components/Section/Section';
import { ContactForm }  from '../components/ContactForm/ContactForm';
import { ContactList} from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

const Phonebook = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <Container>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Filter />
            <Section title="Contacts">
                {isLoading ? <div>Loading...</div> :
                    error ? <div>{error}</div> : <ContactList />}
            </Section>
        </Container>
    );
}

export default Phonebook;
