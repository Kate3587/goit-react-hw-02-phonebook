import React from "react";
import { nanoid } from 'nanoid';
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