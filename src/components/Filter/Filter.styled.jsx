import styled from "styled-components";

export const FilterWrap = styled.div`
    display: flex;
    justify-content:baseline ;
    align-items: baseline;
    flex-wrap: nowrap;
    gap: 3px;
   width: 300px;
    margin-right: auto;
    margin-left: auto;
    align-content: center;
`;

export const FilterLabel = styled.label`
    /* width: 250px; */
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: #012572;
`;
export const FilterInput = styled.input`
    width: 250px;
    padding: 5px;
    border-color: #05239c;
    outline: none;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    background-color: #d6d7ffdc;
`;