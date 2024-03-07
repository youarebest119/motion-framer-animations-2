import { m, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from 'react';
import "./ExampleOne.scss";

const ExampleOne = () => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }
    useEffect(() => {
        window.onmousemove = e => {
            mousePosition.x.set(e.clientX - 5);
            mousePosition.y.set(e.clientY - 5);
        };
        return () => {
            window.onmousemove = null;
        };
    }, [mousePosition.x, mousePosition.y]);
    const spring = {
        stiffness: 250,
        damping: 25,
    }
    const springX = useSpring(mousePosition.x, spring);
    const springY = useSpring(mousePosition.y, spring);
    return (
        <>
            <div id="mouse_example_one">
                <m.div
                    className={"cursor"}
                    style={{
                        x: springX,
                        y: springY,
                    }}
                />
            </div>
        </>
    )
}

export default ExampleOne
