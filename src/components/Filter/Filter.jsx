import React from "react";
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterWrap } from './Filter.styled';

const Filter = ({ inputLabel, onChangeFilter, value}) =>(
    <FilterWrap>
         <FilterLabel htmlFor={inputLabel}>
            Find contacts by name
        </FilterLabel>
        <br />
        <FilterInput
            onChange={onChangeFilter}
            type="text"
            value={value}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Search username"
        />
    </FilterWrap>
);
    
export default Filter;

Filter.propTypes = {
    inputLabel: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
    value: PropTypes.string,
};