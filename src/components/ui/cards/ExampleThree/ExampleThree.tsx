import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import DummyText from "../../../common/DummyText/DummyText";
import "./ExampleThree.scss";



interface propTypes {
    name: string[],
    count: number,
    isEven: boolean,
}

const Box = (props: propTypes) => {
    const SPRING = {
        stiffness: 100,
        damping: 40,
        restDelta: 0.001,
    };
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });

    const springX = useSpring(scrollYProgress, SPRING);
    const springRotate = useSpring(scrollYProgress, SPRING);

    const rotate = useTransform(springX, [0, 1], [props.isEven ? 45 : -45, 0]);
    const x = useTransform(springRotate, [0, 1], [props.isEven ? "100%" : "-100%", "0%"]);

    return (
        <m.div ref={ref} style={{ x, rotate }} className={"card_example_three_item_box"}>
            <h2>{props.count}+</h2>
            <p>
                {props.name[0]} <br />
                {props.name[1]}
            </p>
        </m.div>
    )
}


const ExampleThree = () => {

    const data = [
        {
            name: ["awards", "recognition"],
            count: 50,
        },
        {
            name: ["creative", "minds"],
            count: 20,
        },
        {
            name: ["years of", "experience"],
            count: 30,
        },
        {
            name: ["Projects", "Completed"],
            count: 900,
        },
    ]
    return (
        <>
            <div id="card_example_three">
                <DummyText />
                <section className={"who_we_are"}>
                    <Container>
                        <div className={"card_example_three_grid"}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className={"card_example_three_item"}>
                                            <Box
                                                isEven={Boolean(index % 2)}
                                                count={item.count}
                                                name={item.name}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Container>
                </section>
                <DummyText />
            </div>
        </>
    )
}

export default ExampleThree
