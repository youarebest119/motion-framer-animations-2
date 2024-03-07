import "./ImageClickable.scss";
import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

interface propTypes {
    src: string,
    alt?: string,
    className?: string,
    id?: string | number,
}

const ImageClickable = (props: propTypes) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <m.img
                src={props.src}
                alt={props.alt}
                className={`${props.className || ""} ${"clickable_image"}`}
                layoutId={props.src + props.id}
                onClick={() => setShow(true)}
            />
            <AnimatePresence>
                {
                    show &&
                    <>
                        <m.div
                            className={"clickable_image_modal"}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >
                            <m.img
                                layoutId={props.src + props.id}
                                src={props.src}
                                alt=""
                            />
                            <div onClick={() => setShow(false)} className={"overlay"} />
                        </m.div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}

export default ImageClickable
