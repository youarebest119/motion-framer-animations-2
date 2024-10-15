import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import { useEffect } from "react";

const Layout = () => {
    const { hash, pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname])
    return (
        <>
            {
                hash !== "#remove-helper" &&
                <Breadcrumbs />
            }
            <Outlet />
        </>
    )
}

export default Layout
