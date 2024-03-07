import { Link } from "react-router-dom";
import "./Card.scss";
import { TopRightArrow } from "../../../assets/icons/icons";
import ImageClickable from "../ImageClickable/ImageClickable";

interface propTypes {
    disabled?: boolean,
    title?: string,
    description?: string,
    to?: string,
    preview?: string,
}

const Card = (props: propTypes) => {
    return (
        <>
            <div className={`custom_card ${props.disabled ? "disable" : ""}`}>
                <div className="custom_card_img">
                    {
                        props.preview ?
                            <ImageClickable
                                src={props.preview}
                                alt={props.title}
                            />
                            :
                            <h4>{props.title}</h4>
                    }
                </div>
                <div className="custom_card_body">
                    <div className="custom_card_body_link">
                        <Link to={props.to || ""}>
                            {props.title}
                        </Link>
                        <Link
                            to={props.to || ""}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TopRightArrow />
                        </Link>
                    </div>
                    {
                        props.description &&
                        <p>
                            {props.description}
                        </p>
                    }
                </div>
            </div>
        </>
    )
}

export default Card
