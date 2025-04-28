import React, { ForwardedRef } from "react";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType?: "text" | "email" | "password" | "number";
    placeholder?: string;
}

const InputText = React.forwardRef(
    ({ placeholder, inputType }: Props, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <InputTextStyle
                placeholder={placeholder}
                ref={ref}
                type = {inputType}
            ></InputTextStyle>
        );
    }
);

const InputTextStyle = styled.input`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => (theme as Theme).color.border};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.default};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => (theme as Theme).color.text};
`;

export default InputText;
