import { styled } from "styled-components";
import { ButtonScheme, ButtonSize, Theme } from "../../styles/theme";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
}

function Button({ children, size, scheme, disabled, isLoading }: Props) {
    return (
        <ButtonStyle
            size={size}
            scheme={scheme}
            disabled={disabled}
            isLoading={isLoading}
        >
            {children}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
    font-size: ${({ theme, size }) => (theme as Theme).button[size].fontSize};
    padding: ${({ theme, size }) => (theme as Theme).button[size].padding};
    color: ${({ theme, scheme }) =>
        (theme as Theme).buttonScheme[scheme].color};
    background-color: ${({ theme, scheme }) =>
        (theme as Theme).buttonScheme[scheme].backgroundColor};
    border: 0;
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.default};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
