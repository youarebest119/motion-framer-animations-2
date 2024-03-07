import { useSpring, m, MotionValue } from "framer-motion";
import "./ExampleTwo.scss";
import { MouseEvent } from "react";
import wallpaper1 from "../../../../assets/images/mouse/example-two/wallpaper-1.jpg";
import wallpaper11 from "../../../../assets/images/mouse/example-two/wallpaper-11.jpg";
import wallpaper2 from "../../../../assets/images/mouse/example-two/wallpaper-2.jpg";
import wallpaper22 from "../../../../assets/images/mouse/example-two/wallpaper22.jpg";
import wallpaper3 from "../../../../assets/images/mouse/example-two/wallpaper-3.jpg";
import wallpaper33 from "../../../../assets/images/mouse/example-two/wallpaper33.jpg";


const projects = [
    {
        bg: wallpaper1,
        fg: wallpaper11,
        title: "Halloween Celebrations",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
    {
        bg: wallpaper2,
        fg: wallpaper22,
        title: "Summer Party",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
    {
        bg: wallpaper3,
        fg: wallpaper33,
        title: "Cars Exhibition",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
]



const Gallery = ({ title, bg, fg, subtext, mousePosition }: { title?: string, bg?: string, fg?: string, subtext?: string, mousePosition: { x: MotionValue, y: MotionValue } }) => {
    const { x, y } = mousePosition;

    return (
        <div
            className={"gallery"}
        >
            <div className={"gallery_in"}>
                <img src={bg} alt="" />
                <div className={"gallery_details"}>
                    <h2>{title}</h2>
                    <p>{subtext}</p>
                </div>
            </div>
            <m.div
                style={{ x, y }}
                className={"gallery_hover"}
            >
                <m.img
                    src={fg}
                    alt=""
                />
            </m.div>
        </div>
    )
}



const ExampleTwo = () => {
    const mousePosition = {
        x: useSpring(0, {
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }),
        y: useSpring(0, {
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }),
    }

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        mousePosition.x.set((clientX) - (300 / 2));
        mousePosition.y.set((clientY) - (400 / 2));
    }


    return (
        <>
            <div id="mouse_example_two">
                <section
                    className={"page"}
                    onMouseMove={handleMove}
                >
                    {
                        projects.map(item => (
                            <Gallery
                                mousePosition={mousePosition}
                                bg={item.bg}
                                title={item.title}
                                subtext={item.subtext}
                                fg={item.fg}
                            />
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default ExampleTwo
