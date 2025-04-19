import styled from "styled-components";
import { Colorkey, HeadingSize, Theme } from "../../styles/theme";

interface Props {
    children: React.ReactNode;
    size: HeadingSize;
    color?: Colorkey;
}

function Title({ children, size }: Props) {
    return <TitleStyle size={size}>{children}</TitleStyle>;
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
    font-size: ${({ theme, size }) => (theme as Theme).heading[size].fontSize};
    color: ${({ theme, color }) => (theme as Theme).color[color || "primary"]};
`;

export default Title;
