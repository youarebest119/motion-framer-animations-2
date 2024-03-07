import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
import { AnimatePresence, m } from "framer-motion";
const Breadcrumbs = () => {
    const { pathname } = useLocation();
    let path = "";
    let routes = pathname.split("/").map((item, index) => {
        path += item + ((index !== 0 && item === "") ? "" : "/");
        if (item !== "" || index === 0) {
            return {
                label: item.split("-").join(" "),
                to: path,
            }
        } else {
            return {}
        }
    })
    return (
        <div className={"custom_breadcrumbs"}>
            <m.ul>
                <AnimatePresence mode="popLayout">
                    {
                        routes.filter(item => (item.to) && item).map((item, index) => {
                            return (
                                <m.li
                                    initial={{
                                        opacity: 0,
                                        y: -40,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    key={item.to}
                                >
                                    <Link
                                        to={item.to || ""}
                                    >
                                        {index === 0 ? "Home" : item.label}
                                    </Link>
                                </m.li>
                            )
                        })
                    }
                </AnimatePresence>
            </m.ul>
        </div>
    )
}

export default Breadcrumbs
