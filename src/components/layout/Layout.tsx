import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayooutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayooutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
