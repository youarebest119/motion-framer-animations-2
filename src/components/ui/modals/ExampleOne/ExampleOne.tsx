import "./ExampleOne.scss";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";

const ExampleOne = () => {
    const [show, setShow] = useState(false);
    return (
        <div id="modal_example_one">
            <div className={"contact_us"}>
                <m.button
                    transition={{
                        type: "spring",
                    }} key="item" className={"custom_btn"} onClick={() => setShow(true)} layoutId="contact-us">
                    Contact Us
                </m.button>
                <AnimatePresence>
                    {
                        show &&
                        <m.div
                            className={"custom_modal"}
                            initial={{
                                opacity: 0,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                        >
                            <m.div
                                className={"modal_content"}
                            >
                                <button onClick={() => setShow(false)} className={"close_btn"}>Close</button>
                                <form onSubmit={e => { e.preventDefault(); toast.success("Form Submitted"); setShow(false) }}>
                                    <Row>
                                        <Col md={12}>
                                            <div className={"input"}>
                                                <label htmlFor="name">Name</label>
                                                <input id="name" type="text" placeholder="Enter you name" />
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className={"input"}>
                                                <label htmlFor="message">Message</label>
                                                <textarea id="message" placeholder="Message" />
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <m.button
                                                className={`w-100 ${"custom_btn"}`}
                                                type="submit"
                                                layoutId="contact-us"

                                                transition={{
                                                    type: "spring",
                                                }}
                                            >
                                                Submit
                                            </m.button>
                                        </Col>
                                    </Row>
                                </form>
                            </m.div>
                            <div className={"modal_overlay"} onClick={() => setShow(false)} />
                        </m.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ExampleOne
