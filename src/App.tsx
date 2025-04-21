import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";

function App() {
    return (
        <BookStoreThemeProvider>
            <Layout>
                <Home />
            </Layout>
        </BookStoreThemeProvider>
    );
}

export default App;
