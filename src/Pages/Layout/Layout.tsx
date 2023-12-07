import {Outlet} from "react-router-dom";
import {HeaderMegaMenu} from "../../components/ui/HeaderMegaMenu.tsx";

const Layout = () => {
    return (
        <>
            <HeaderMegaMenu/>
            <Outlet/>
        </>
    )
};

export default Layout;