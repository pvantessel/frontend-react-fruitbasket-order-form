import React from 'react';

function FormInputField({ labelInputClass, labelName, labelText, inputType, inputName, inputValue, setInput }) {
    return (
        <div className={labelInputClass}>
            <label htmlFor={labelName}>{labelText}</label>
            <input
                type={inputType}
                id={inputName}
                name={inputName}
                value={inputValue}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}

export default FormInputField;