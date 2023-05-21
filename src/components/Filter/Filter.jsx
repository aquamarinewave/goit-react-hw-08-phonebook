import { LabelFilter, InputFilter } from './Filter.styled'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const filterId = nanoid();

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = event => dispatch(setFilterContacts(event.currentTarget.value));
    
    return (
          <LabelFilter htmlFor={filterId}>
                Fined contscts by name
                <InputFilter
                    id={filterId}
                    type="text"
                    value={filter}
                    onChange={onChange}
                />
        </LabelFilter>
    )
}
