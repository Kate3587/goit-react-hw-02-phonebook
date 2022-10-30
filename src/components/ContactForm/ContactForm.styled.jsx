import styled from "styled-components";

export const PhoneForm = styled.div`
    margin-bottom: 15px;
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    flex-wrap: wrap;
    gap: 8px;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: #012572;
`;

export const FormInput = styled.input`
    padding: 5px;
    border-color: #05239c;
    outline: none;
    border-radius: 6px;
`;

export const FormBtn = styled.button`
    width: 100px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 5px;
    background-color: #2e008a;
    color: #e3f6ff;
    box-shadow: -3px 9px 364px -62px #272626b5;
`;
