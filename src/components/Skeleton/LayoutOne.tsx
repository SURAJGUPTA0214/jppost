import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";

interface LayoutType {
    children?: any;
}
const Layout = ({ children }: LayoutType) => {
    return (
        <>
            <NavbarHeader />
            {children}
            <Footer />
        </>
    )
}
export default Layout;