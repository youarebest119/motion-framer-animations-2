import { Dropdown } from "react-bootstrap";
import "./PreRequisites.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface propTypes {
    packages?: {
        name: ("framer-motion" | "sass" | "react-router-dom" | "bootstrap" | "react-bootstrap" | "react-hot-toast" | "lottie-react"),
        link?: string,
    }[],
}

const PreRequisites = (props: propTypes) => {
    const ref = useRef<HTMLButtonElement>(null);
    return (
        <>
            <Dropdown className="prerequisiites">
                <Dropdown.Toggle ref={ref}>
                    Prerequisites
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <ul>
                        {
                            props.packages &&
                                props.packages.length > 0 ?
                                props.packages.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                onClick={() => ref.current && ref.current.click()}
                                                to={item.link || ""}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                                :
                                <li>
                                    Nothing Found
                                </li>
                        }
                    </ul>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default PreRequisites
