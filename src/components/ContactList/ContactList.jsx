import React from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {ItemName, ContactBtn} from './ContactList.styled';

const ContactList = ({ filterForUsers, onDeleteUsers }) => {
    return (
        <ul>
        {
            filterForUsers.map(({ name, number, id }) => (
                <div
                    key={nanoid()}>
                    <ItemName>{name}: {number}</ItemName>
                    <ContactBtn onClick={() => onDeleteUsers(id)} type="button">Delete</ContactBtn>
                </div>
            ))
        }
    </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    filterForUsers: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    })),
    onDeleteUsers: PropTypes.func.isRequired,
}