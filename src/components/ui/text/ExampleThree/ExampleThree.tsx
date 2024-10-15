import "./ExampleThree.scss";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import DummyText from "../../../common/DummyText/DummyText";

interface propTypes {
    children?: string;
    className?: string;
    final?: number,
    initial?: number;
}

const Animate = (props: propTypes) => {
    const SPRING = {
        stiffness: 100,
        damping: 40,
        restDelta: 0.001,
    };

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end 0.3"],
    });

    const springYProgress = useSpring(scrollYProgress, SPRING);
    const x = useTransform(springYProgress, [0, 1], [props.initial || 100, props.final || 0]);
    const opacity = useTransform(springYProgress, [0, 1], [0, 1]);
    return (
        <>
            <m.div
                ref={ref}
                className={`${props.className || ""}`}
                style={{ x, opacity, width: "fit-content", marginInline: "auto" }}
            >
                {props.children}
            </m.div>
        </>
    )
}

const ExampleThree = () => {
    return (
        <div id="text_example_three">
            <DummyText />
            <h1 className={"text"}>
                <Animate final={-100}>
                    This is My Text
                </Animate>
            </h1>
            <h1 className={"text"}>
                <Animate initial={-100} final={100}>
                    This is My Text
                </Animate>
            </h1>
            <DummyText />
        </div>
    )
}

export default ExampleThree
