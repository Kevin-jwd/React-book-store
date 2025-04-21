import React from "react";
import book_store_logo from "../../assets/images/book_store_logo.png";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

function Footer() {
    return (
        <FooterStyle>
            <h1 className="logo">
                <img src={book_store_logo} alt="book store" />
            </h1>
            <div className="copyright">
                <p>.copyright(c), 2025, Book Store.</p>
            </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer<{ theme: Theme }>`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    border-top: 1px solid ${({ theme }) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .book_store_logo {
        img {
            width: 140px;
        }
    }

    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`;

export default Footer;
