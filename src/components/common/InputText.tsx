import React, { ForwardedRef } from "react";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface Props {
    placeholder?: string;
}

const InputText = React.forwardRef(
    ({ placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <InputTextStyle
                placeholder={placeholder}
                ref={ref}
            ></InputTextStyle>
        );
    }
);

const InputTextStyle = styled.input.attrs({ type: "text" })`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => (theme as Theme).color.border};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.default};
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => (theme as Theme).color.text};
`;

export default InputText;
