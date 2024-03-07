import { Outlet } from "react-router-dom"
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs"

const Layout = () => {
    return (
        <>
            <Breadcrumbs />
            <Outlet />
        </>
    )
}

export default Layout
