import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
padding: 5px 10px 5px 10px;
margin-right: 2px;
width: 100%;
border: 0px;
font-size: 13px;
font-weight: bolder;
background-color: var(--bg_default);
color: var(--body-text);
`;

const Select = styled.select`
width: 100%;
border: 0px;
font-size: 17px;
background-color: var(--bg_default);
color: var(--body-text);
`;

export default function SelectComponent({ type, options, onSelect }) {
    const [selectedValue, setSelectedValue] = useState("Default");
    const id = `${type}Options`;

    const handleSelection = (event) => {
        setSelectedValue(event.target.value);
        onSelect(event.target.value);
    };
    return (
        <Dropdown>
            <label htmlFor={id}>{type} By:</label>
            <Select id={id} onChange={handleSelection} value={selectedValue}>
                {options.map((option) => (
                    <option key={options.indexOf(option)} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </Dropdown>
    );
}