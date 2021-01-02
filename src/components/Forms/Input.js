import { useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 5px;
`;

const StyledTextArea = styled.textarea``;

export default function Input({
    name,
    placeholder,
    initValue,
    type = 'text',
    label,
    required = false,
    setFormFields,
    formFields,
}) {
    useEffect(() => {
        initValue &&
            setFormFields((state) => {
                return {
                    ...state,
                    [name]: initValue,
                };
            });
    }, [initValue, name, setFormFields]);

    const onChange = (e) => {
        setFormFields((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    const props = {
        required,
        onChange,
        id: `${name}Input`,
        name,
        value: formFields[name] || '',
        placeholder,
        type,
    };

    return (
        <>
            {label && <label htmlFor={`${name}Input`}>{label}</label>}

            {type === 'textarea' ? (
                <StyledTextArea {...props} />
            ) : (
                <StyledInput {...props} />
            )}
        </>
    );
}
