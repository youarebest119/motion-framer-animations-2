import DummyText from "../../../common/DummyText/DummyText";
import { m } from "framer-motion";
import dumyImg from "../../../../assets/images/scroll/example-one/scroll-example-one.jpg";
import "./ExampleOne.scss";
import { Container } from "react-bootstrap";

type TProps = {
    className?: string,
    src?: string,
    alt?: string,
}

const CustomImage = (props: TProps) => {
    const variants = {
        initial: {
            scale: 1.3,
            filter: "blur(0.5rem)",
        },
        animate: {
            scale: 1,
            filter: "blur(0rem)",
        },
    }
    return (
        <m.div
            className={`custom_image ${props.className || ""}`}
        >
            <m.img
                variants={variants}
                whileInView={"animate"}
                initial="initial"
                src={props.src}
                alt={props.alt}
                transition={{
                    duration: 0.4,
                    delay: 0.2,
                }}
            />
        </m.div>
    )
}



const ExampleOne = () => {
    return (
        <div id="scroll_example_one">
            <DummyText />
            <DummyText />
            <section
                className="section_image"
            >
                <Container>
                    <CustomImage
                        src={dumyImg}
                    />
                </Container>
            </section>
            <DummyText />
            <DummyText />
        </div>
    )
}

export default ExampleOne
