import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { dark, light } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle themeName="light"/>
            <Layout>
                <Home />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
