import {Outlet} from "react-router-dom";
import {HeaderMegaMenu} from "../../components/ui/HeaderMegaMenu.tsx";

const path = window.location.pathname;

const Layout = () => {
    return (
        <>
            <div className={path === "/game" ? "max-h-screen overflow-y-hidden" : ""}>
                <HeaderMegaMenu/>
                <Outlet/>
            </div>
        </>
    )
};

export default Layout;