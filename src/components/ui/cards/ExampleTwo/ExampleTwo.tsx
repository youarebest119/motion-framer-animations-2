import { useScroll, m, useSpring, useTransform, useMotionValue } from "framer-motion";
import { DigitalIcon, GiftIcon, HouseIcon, PlaneIcon } from "../../../../assets/icons/icons";
import "./ExampleTwo.scss";
import { useRef, useState } from "react";
import DummyText from "../../../common/DummyText/DummyText";

const ExampleTwo = () => {
    // const lastSlide = 
    // {
    //     start: 0,
    //         end: 0,
    // }
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const SPRING = {
        stiffness: 100,
        damping: 40,
        restDelta: 0.001,
    };
    const springScrollYProgress = useSpring(scrollYProgress, SPRING);
    const data = [
        {
            icon: <PlaneIcon />,
            txt: "You use the Netgíro app to pay",
        },
        {
            icon: <DigitalIcon />,
            txt: "Netgiro ​​is like a digital payment card",
        },
        {
            icon: <HouseIcon />,
            txt: "All purchases are collected on one invoice that is payable at the end of the month",
        },
        {
            icon: <GiftIcon />,
            txt: "You can spread the bill or individual purchases just as you see fit",
        },
    ];
    return (
        <>
            <div id="card_example_two">
                <DummyText />
                <section ref={ref} className={"section"}>
                    <div className={"in"}>
                        {/* <m.h2 
                        style={{ x: "-50%", y: useTransform(springScrollYProgress, [lastSlide.start, lastSlide.end], ["-30%", "-50lastSlide%"]) }} 
                        >Safe and convenient</m.h2> */}
                        {/* <m.h2
                            style={{
                                opacity: useTransform(springScrollYProgress, [lastSlide.start, lastSlide.end], [0, 1]),
                            }}
                        >
                            Safe and convenient
                        </m.h2> */}
                        <ul>
                            {
                                data.map((item, index, array) => {
                                    // if (index === data.length - 1) {
                                    // lastSlide.start = (index * 0.2);
                                    // lastSlide.end = (((index + 1) * 0.2) + 0.1);
                                    // setLastSlide({
                                    //     start: (index * 0.2),
                                    //     end: (((index + 1) * 0.2) + 0.1),
                                    // })
                                    // }
                                    return (
                                        <li key={item.txt + index}>
                                            <m.div
                                                style={{
                                                    y: useTransform(springScrollYProgress, [(index * 0.2), ((index + 1) * 0.2) + 0.1], [0, -window.innerHeight]),
                                                    rotate: useTransform(springScrollYProgress, [(index * 0.2), ((index + 1) * 0.2) + 0.1], [index * -5, -45])
                                                }}
                                                className={"card_design"}
                                            >
                                                {item.icon}
                                                <p>{item.txt}</p>
                                            </m.div>
                                            {
                                                index === array.length - 1 &&
                                                <m.h2
                                                    style={{
                                                        opacity: useTransform(springScrollYProgress, [(index * 0.2) + 0.05, ((index + 1) * 0.2) + 0.1], [0, 1])
                                                    }}
                                                >
                                                    Safe and convenient
                                                </m.h2>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <DummyText />
            </div>
        </>
    )
}

export default ExampleTwo
