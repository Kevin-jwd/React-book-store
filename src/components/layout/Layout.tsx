import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

interface LayooutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayooutProps) {
    return (
        <LayoutStyle>
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutStyle>
    );
}

const LayoutStyle = styled.main<{ theme: Theme }>`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    padding: 20px 0;
`;

export default Layout;
