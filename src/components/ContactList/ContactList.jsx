import React from "react";
import { nanoid } from 'nanoid';

const ContactList = ({ filterForUsers, onDeleteUsers }) => {
    // const id = nanoid()
    return (
        <ul>
        {
            filterForUsers.map(({ name, number, id }) => (
                <li
                    key={nanoid()}>
                {/* > */}
                    <span>{name}: {number}</span>
                    <button onClick={() => onDeleteUsers(id)} type="button">Delete</button>
                </li>
            ))
        }
    </ul>
    )
    

};

export default ContactList;