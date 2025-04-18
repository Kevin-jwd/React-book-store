import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { light } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle />
            <Layout>
                <Home />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
