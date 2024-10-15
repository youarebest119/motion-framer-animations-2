import "./ExampleTwo.scss";
// import { m } from "framer-motion";
// import demoImg from "../../../../assets/images/scroll/example-two/scroll-example-two.jpg";
// import demoImg2 from "../../../../assets/images/scroll/example-two/image1.jpeg";
// import demoImg3 from "../../../../assets/images/scroll/example-two/image2.jpeg";
// import demoImg4 from "../../../../assets/images/scroll/example-two/image3.jpeg";
import { m } from 'framer-motion';
import { MouseEvent, useCallback, useMemo, useRef, useState } from "react";
import DummyText from "../../../common/DummyText/DummyText";


type TProps = {
    mousePosition: { x: number, y: number }
    title?: string,
    hiddenTitle?: string,
    className?: string,
}

const Box = (props: TProps) => {
    const [hovered, setMouseHovered] = useState(false);
    const size = useMemo(() => {
        return hovered ? 400 : 40;
    }, [hovered]);

    const ref = useRef<HTMLDivElement>(null);
    return (
        <div
            className="position-relative"
            ref={ref}
        >
            <div className={`box ${props.className || ""}`}>
                <h1>{props.title}</h1>
            </div>
            <m.div
                className={`box clip_box ${props.className || ""}`}
                animate={{
                    WebkitMaskPosition: `${props.mousePosition.x - (size / 2)}px ${(props.mousePosition.y - (ref.current && ref.current?.offsetTop && ref.current?.offsetTop > 0 && ref.current.offsetTop || 0)) - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`
                }}
                // style={{
                //     clipPath: `circle(${size}px at ${mousePosition.x}px ${mousePosition.y}px)`,
                // }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <h1 onMouseEnter={() => setMouseHovered(true)} onMouseLeave={() => setMouseHovered(false)}>{props.hiddenTitle}</h1>
            </m.div>
        </div >
    )
}

const ExampleTwo = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y, });
    }, []);
    return (
        <div id="scroll_example_two">
            <DummyText />
            <DummyText />
            <div className="position-relative"
                onMouseMove={handleMove}
            >
                <Box className="one"
                    mousePosition={mousePosition}
                    title="Green Box" hiddenTitle="Hidden Green">

                </Box>
                <Box className="two"
                    mousePosition={mousePosition}
                    title="Red Box" hiddenTitle="Hidden Red">
                </Box>
                <Box className="three"
                    mousePosition={mousePosition}
                    title="Another Great Box" hiddenTitle="Another Great Box">
                </Box>
            </div>
            <DummyText />
            <DummyText />
        </div>
    )
}

export default ExampleTwo
