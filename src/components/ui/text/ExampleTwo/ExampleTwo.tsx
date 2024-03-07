import { Container } from "react-bootstrap";
import DummyText from "../../../common/DummyText/DummyText";
import "./ExampleTwo.scss";
import { useScroll, m, useTransform } from "framer-motion";
import { useRef } from "react";

const ExampleTwo = () => {
    return (
        <>
            <div id="text_example_two">
                <DummyText />
                <Container>
                    <h3 className={"heading"}>
                        <WordByWord>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem commodi aliquid quia porro, officiis, iusto cumque suscipit, possimus dolor qui et facere in.
                        </WordByWord>
                    </h3>
                </Container>
                <DummyText />
                <Container>
                    <h3 className={"heading"}>
                        <LetterByLetter>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugit rerum, numquam ut consequatur et voluptas ex quo molestiae quasi dolor ducimus! Maxime, beatae?
                        </LetterByLetter>
                    </h3>
                </Container>
                <DummyText />
            </div>
        </>
    )
}



interface propTypes {
    children: string,
}

const WordByWord = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });
    return (
        <>
            <div
                className={"word_by_word"}
                ref={ref}
            >
                {
                    props.children.split(" ").map((item, index, array) => {
                        const interval = 1 / array.length;
                        const start = index * interval;
                        const end = (index + 1) * interval;
                        return (
                            <m.span
                                key={item + index}
                                style={{
                                    opacity: useTransform(scrollYProgress, [start, end], [0.2, 1]),
                                }}
                            >
                                {item}&nbsp;
                            </m.span>
                        )
                    })
                }
            </div>
        </>
    )
}

const LetterByLetter = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });
    return (
        <>
            <div
                className={"letter_by_letter"}
                ref={ref}
            >
                {
                    props.children.split(" ").map((item, index, array) => {
                        const outerInterval = 1 / array.length;
                        const isLastWord = array.length === (index + 1);
                        return (
                            <div key={item + index}>
                                {
                                    item.split("").map((letter, letterIndex, word) => {
                                        const interval = outerInterval / word.length;
                                        const start = (index * outerInterval) + (letterIndex * interval);
                                        const end = (index * outerInterval) + ((letterIndex + 1) * interval);
                                        return (
                                            <m.span
                                                key={letter + letterIndex}
                                                style={{
                                                    color: useTransform(scrollYProgress, [start, end], ["#ccc", "#000"]),
                                                }}
                                            >
                                                {letter}
                                            </m.span>
                                        )
                                    })
                                }
                                {
                                    !isLastWord &&
                                    <>&nbsp; </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}



export default ExampleTwo
