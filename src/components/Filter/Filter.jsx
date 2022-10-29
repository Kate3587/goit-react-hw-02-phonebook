import React from "react";

const Filter = ({ inputLabel, onChangeFilter, value,}) =>(
    <>
         <label htmlFor={inputLabel}>
            Find contacts by name
        </label>
        <input
            onChange={onChangeFilter}
            type="text"
            value={value}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Search username"
        />
    </>
       
);
    
       
    

export default Filter;