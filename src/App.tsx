import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,
        errorElement: <Error />,
    },
    {
        path: "/books",
        element: <Layout><div>도서 목록</div></Layout>,
    },
    {
        path: "/register",
        element: <Layout><Register></Register></Layout>,
    },
]);

function App() {
    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router} />
        </BookStoreThemeProvider>
    );
}

export default App;
