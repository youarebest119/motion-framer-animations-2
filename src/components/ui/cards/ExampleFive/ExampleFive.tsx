import { Container } from "react-bootstrap";
import DummyText from "../../../common/DummyText/DummyText";
import "./ExampleFive.scss";
import { useEffect, useRef } from "react";
import { AnimationSequence, animate, useInView } from "framer-motion";
import plant1 from "../../../../assets/images/cards/example-five/image1.jpg";
import plant2 from "../../../../assets/images/cards/example-five/image2.jpg";
import plant3 from "../../../../assets/images/cards/example-five/image3.jpg";

const ExampleFive = () => {
    const ref = useRef<HTMLLIElement[]>([]);
    const container = useRef(null);
    const isInView = useInView(container);
    useEffect(() => {
        // console.log('isInView :>> ', isInView);
        const sequence: AnimationSequence = [
            [ref.current[0], { y: ["100%", "0%"], opacity: [0, 1], scale: [0, 1] }, { type: "tween", ease: "easeInOut", duration: 0.5 }],
            [ref.current[0], { x: ["100%", "0%"], }, { type: "tween", ease: "easeInOut", duration: 0.3 }],
            [ref.current[1], { y: ["100%", "0%"], opacity: [0, 1], scale: [0.8, 1] }, { type: "tween", ease: "easeInOut", duration: 0.3, at: "-0.25" }],
            [ref.current[2], { y: ["100%", "0%"], opacity: [0, 1], scale: [0.8, 1] }, { type: "tween", ease: "easeInOut", duration: 0.3, at: "-0.2" }],
        ]
        if (isInView) {
            animate(sequence)
        }
    }, [isInView])
    return (
        <div id="card_example_five">
            <DummyText />
            <DummyText />
            <section className={"animation"}>
                <Container>
                    <ul ref={container}>
                        <li ref={(ele: HTMLLIElement) => ref.current[0] = ele}>
                            <div className={"box"}>
                                <img src={plant1} alt="plant" />
                            </div>
                        </li>
                        <li ref={(ele: HTMLLIElement) => ref.current[1] = ele}>
                            <div className={"box"}>
                                <img src={plant2} alt="plant" />
                            </div>
                        </li>
                        <li ref={(ele: HTMLLIElement) => ref.current[2] = ele}>
                            <div className={"box"}>
                                <img src={plant3} alt="plant" />
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
            <DummyText />
            <DummyText />
        </div>
    )
}

export default ExampleFive
