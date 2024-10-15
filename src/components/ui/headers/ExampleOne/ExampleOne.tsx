import { Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../../assets/images/headers/example-one/logo.png";
import "./ExampleOne.scss";
import { m } from "framer-motion";
import { useState } from "react";

interface propTypes {
    list: {
        label?: string,
        to?: string,
    }[],
    active?: boolean,
    handleActive?: () => void,
    lgScreen?: boolean,
}

const NavBar = (props: propTypes) => {
    const variant = {
        hidden: {
            x: "-100%",
            borderRadius: "0rem 50rem 50rem 0rem",
        },
        animate: {
            x: "0%",
            borderRadius: "0rem 0rem 0rem 0rem",
        }
    }
    const sidebarLogo = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }
    const navlistVariant = {
        hidden: {
            x: "-100%",
        },
        animate: {
            x: "0%",
        },
    }
    return (
        <m.div
            className={`header_nav`}
            animate={props.active ? "animate" : ""}
            variants={!props.lgScreen ? variant : {}}
            initial="hidden"
            transition={{
                type: "spring",
                duration: 0.6,
                bounce: 2,
                stiffness: 60,
                delayChildren: 0.2,
                staggerChildren: 0.1,
            }}
        >
            <m.a
                className="header_logo d-lg-none"
                variants={!props.lgScreen ? sidebarLogo : {}}
                transition={{
                    type: "spring",
                    bounce: 4,
                    stiffness: 120,
                }}
            >
                <img
                    src={logo}
                    alt=""
                />
            </m.a>
            <m.ul>
                {
                    props.list.map(item => {
                        return (
                            <m.li
                                variants={!props.lgScreen ? navlistVariant : {}}
                                key={item.label}
                                transition={{
                                    type: "spring",
                                    bounce: 2,
                                    stiffness: 60,
                                    duration: 0.3,
                                }}
                            >
                                <NavLink
                                    to={item.to || ""}
                                >
                                    {item.label}
                                </NavLink>
                            </m.li>
                        )
                    })
                }
            </m.ul>
        </m.div>
    )
}


const ExampleOne = () => {
    const { pathname, hash } = useLocation();
    const lgScreen = document.body.clientWidth > 991;
    const navlist = [
        {
            label: "About Us",
            to: pathname + hash,
        },
        {
            label: "Whitepaper",
            to: "/whitepaper",
        },
        {
            label: "Roadmap",
            to: "/roadmap",
        },
        {
            label: "Community",
            to: "/community",
        },
    ];
    const [active, setActive] = useState(false);
    const handleClick = () => {
        !lgScreen && setActive(!active);
    };
    return (
        <>
            <div id="header_example_one">
                {!lgScreen && <div onClick={handleClick} className={`header_backdrop ${active ? "active" : ""}`} />}
                <header className="header">
                    <Container>
                        <div className="header_in">
                            <NavLink
                                to="#"
                                className="header_logo"
                            >
                                <img
                                    src={logo}
                                    alt=""
                                />
                            </NavLink>
                            <div className="header_content">
                                <NavBar
                                    active={active}
                                    handleActive={handleClick}
                                    list={navlist}
                                    lgScreen={lgScreen}
                                />
                                <div className={"header_action"}>
                                    <button className="action_btn">
                                        Login
                                    </button>
                                    <button className="action_btn secondary_btn">
                                        Sign Up
                                    </button>
                                    <button
                                        className={`header_toggle d-lg-none ${active ? "active" : ""}`}
                                        onClick={handleClick}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>
            </div>
        </>
    )
}

export default ExampleOne
