import React from "react";
import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("inputText 컴포넌트 테스트", () => {
    it("렌더링 확인", () => {
        //1 렌더
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력"></InputText>
            </BookStoreThemeProvider>
        );

        // 2 확인
        expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
    });

    it("forwardRef 테스트", () => {
        // 1 렌더링
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력" ref={ref}></InputText>
            </BookStoreThemeProvider>
        );

        // 2 확인
        expect(ref.current).toBeInTheDocument();
    })
});
