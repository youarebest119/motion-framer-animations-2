import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import "./ExampleFour.scss";

type propTypes = {
    item: {
        title?: string,
    },
}

const Text = (props: propTypes) => {

    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const color = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.4)",])
    const filter = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)",])
    const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["0", "1", "1", "0",])
    return (
        <>
            <li className={"item"}>
                <m.h3 style={{ color, filter, opacity }} ref={ref}>{props.item.title}</m.h3>
            </li>
        </>
    )
}


const ExampleFour = () => {
    const features = [
        {
            title: "Expense",
        },
        {
            title: "Budgeting",
        },
        {
            title: "Payments",
        },
        {
            title: "Tracking",
        },
        {
            title: "Financials",
        },
        {
            title: "Secure",
        },
    ];
    return (
        <>
            <div id="text_example_four" className={"main"}>
                <div style={{ height: "200vh" }} />
                <section className={"home"}>
                    <Container fluid="md">
                        <div className={"custom_row"}>
                            <div className={"col_left"}>
                                <h2>[Features]</h2>
                            </div>
                            <div className={"col_right"}>
                                <ul>
                                    {
                                        features.map(item => (
                                            <Text key={item.title} item={item} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <div style={{ height: "200vh" }} />
            </div>

        </>
    )
}

export default ExampleFour
