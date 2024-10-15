import "./ExampleOne.scss";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../../../../assets/icons/icons.tsx";
import logo from "../../../../assets/images/sidebars/example-one/dark-theme-logo.svg";

const ExampleOne = () => {
    // toggle button
    const [active, setActive] = useState(false);
    const variants = {
        initial: {
            rotate: 0,
            y: 0,
            opacity: 1,
        },
        animate: (item: number) => ({
            rotate: item === 1 ? 45 : item === 3 ? -45 : 0,
            x: item === 2 ? -100 : 0,
            opacity: item === 2 ? 0 : 1,
        })
    }

    // sidebar
    const [socialLinkActive, setSocialLinkActive] = useState<number | null>(null);
    const [navLinkActive, setNavlinkActive] = useState<number | null>(null);
    const navs = [
        {
            index: 1,
            to: "/",
            label: "Homepage",
        },
        {
            index: 2,
            to: "/",
            label: "About Us",
        },
        {
            index: 3,
            to: "/",
            label: "Contact Us",
        },
        {
            index: 4,
            to: "/",
            label: "Portfolio",
        },
    ];
    const social_media = [
        {
            to: "",
            index: 1,
            icon: <GithubIcon />,
            key: "github",
        },
        {
            to: "",
            index: 2,
            icon: <FacebookIcon />,
            key: "facebook",
        },
        {
            to: "",
            index: 3,
            icon: <TwitterIcon />,
            key: "twitter",
        },
        {
            to: "",
            index: 4,
            icon: <LinkedinIcon />,
            key: "linkedin",
        },
    ];

    const linkBgVariant = {
        hidden: {
            scale: 0,
        },
        open: {
            scale: 1,
        }
    };

    const bgVariants = {
        hidden: {
            scale: 0,
            x: "50%",
            y: "-50%",
        },
        open: {
            scale: 3.2,
            x: "50%",
            y: "-50%",
        }
    };

    const navLinkVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        open: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <div id="sidebar_example_one">
            {/* TOGGLER */}
            <button
                className={`toggle ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}
            >
                <AnimatePresence mode={'wait'}>
                    {
                        !active ?
                            <m.p transition={{ duration: 0.2, }} key={"menu"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Menu</m.p>
                            :
                            <m.p transition={{ duration: 0.2, }} key={"close"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Close</m.p>
                    }
                </AnimatePresence>
                <div>
                    {[1, 2, 3].map(item => (<m.span transition={{ duration: 0.2, }} custom={item} animate={active ? "animate" : ""} initial={"initial"} variants={variants} key={item}></m.span>))}
                </div>
            </button>

            {/* SIDEBAR */}
            <m.aside
                className={`${"sidebar"} ${active ? "active" : ""}`}
                initial={{
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                }}
                animate={active ? {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "all",
                } : {}}
                transition={{
                    delay: active ? 0.3 : 0.3,
                }}
            >
                <div className={"header"}>
                    <a href=""><img src={logo} alt="logo" /></a>
                </div>
                <div className={"sidebar_nav"}>
                    <ul>
                        {
                            navs.map(item => (
                                <li
                                    key={item.label}
                                >
                                    <a
                                        href={item.to}
                                        className={`${navLinkActive === item.index ? "active" : ""} ${navLinkActive === null ? "inactive" : ""}`}
                                        onMouseEnter={() => {
                                            setNavlinkActive(item.index);
                                        }}
                                        onMouseLeave={() => setNavlinkActive(null)}
                                    >
                                        <m.div
                                            initial={"hidden"}
                                            variants={navLinkVariants}
                                            exit={"hidden"}
                                            transition={{
                                                delay: !active ? item.index * 0.05 : 0.4 + (item.index * 0.1),
                                                type: "tween",
                                                ease: "easeInOut",
                                                duration: 0.2,
                                            }}
                                            animate={active ? "open" : ""}
                                        >
                                            {item.label}
                                        </m.div>
                                        <m.div
                                            variants={linkBgVariant}
                                            animate={item.index === navLinkActive ? "open" : ""}
                                            initial={"hidden"}
                                            transition={{
                                                duration: 0.5,
                                                stiffness: 100,
                                                // mass: 1,
                                                bounce: 0,
                                                type: "tween",
                                            }}
                                            className={"link_bg"}
                                        >
                                        </m.div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={"footer"}>
                    <ul>
                        {
                            social_media.map(item => {
                                return (
                                    <li key={item.key}>
                                        <a
                                            href={item.to}
                                            onMouseEnter={() => {
                                                setSocialLinkActive(item.index);
                                            }}
                                            onMouseLeave={() => setSocialLinkActive(null)}
                                        >
                                            <m.div
                                                initial={"hidden"}
                                                variants={navLinkVariants}
                                                exit={"hidden"}
                                                animate={active ? "open" : ""}
                                                transition={{
                                                    delay: !active ? item.index * 0.05 : 0.1 + (item.index * 0.1),
                                                    type: "tween",
                                                    ease: "easeInOut",
                                                    duration: 0.2,
                                                }}
                                            >
                                                {item.icon}
                                            </m.div>
                                            <m.div
                                                variants={linkBgVariant}
                                                animate={item.index === socialLinkActive ? "open" : ""}
                                                initial={"hidden"}
                                                transition={{
                                                    duration: 1,
                                                    stiffness: 100,
                                                    // mass: 1,
                                                    bounce: 4,
                                                    type: "spring",
                                                }}
                                                className={"link_bg"}
                                            >
                                            </m.div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </m.aside>
            <m.div
                className={`${"sidebar_bg_one"}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    stiffness: 150,
                    bounce: 4,
                    delay: active ? 0 : 0.2,
                }}
                animate={active ? "open" : ""}
            />
            <m.div
                className={`${"sidebar_bg_two"}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    delay: active ? 0.2 : 0,
                    stiffness: 150,
                    bounce: 4,
                }}
                animate={active ? "open" : ""}
            />
        </div>
    )
}

export default ExampleOne
