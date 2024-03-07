import { useRef } from "react";
import DummyText from "../../../common/DummyText/DummyText";
import "./ExampleOne.scss";
import { useScroll, useSpring, m, useTransform } from "framer-motion";


interface propTypes {
    children?: string,
}

const Animate = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end 0.3"],
    })

    const SPRING = {
        stiffness: 100,
        damping: 40,
        restDelta: 0.001,
    };
    const springScrollYProgress = useSpring(scrollYProgress, SPRING);
    const clipPath = useTransform(springScrollYProgress, [0, 1], ["polygon(0 0, 0% 0, 0% 100%, 0% 100%)", "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"])
    return (
        <>
            <div
                className={"animate"}
                ref={ref}
            >
                {props.children}
                <m.div
                    className={"animate_clip"}
                    style={{ clipPath }}
                >
                    {props.children}
                </m.div>
            </div>
        </>
    )
}



const ExampleOne = () => {
    return (
        <>
            <div id="text_example_one">
                <DummyText />
                <h1 className={"heading"}>
                    <Animate>
                        My Text
                    </Animate>
                </h1>
                <DummyText />
            </div>
        </>
    )
}

export default ExampleOne
