import React from 'react';
import styled from 'styled-components';

export const InformationInput = ({ placeholder, onChange }) => {
    return (
        <Input 
            placeholder={placeholder} 
            onChange={(event) => onChange(event.target.value)}
            type='number'
        />
    )
}

const Input = styled.input`
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    width: 100%;
    font-size: 18px;
    padding: 10px;
    line-height: 140%;
    cursor: pointer;

    &::placeholder {
        color: #9FA6B2;
    }
`
