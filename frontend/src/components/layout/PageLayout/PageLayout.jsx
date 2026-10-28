import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";
import Toast from "../../feedback/Toast/Toast";
import { useCart } from "../../../features/cart/hooks/useCart";


const PageLayout = () => {
    const { toastMessage, closeToast } = useCart();
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Toast
                message={toastMessage}
                onClose={closeToast}
            />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PageLayout;

