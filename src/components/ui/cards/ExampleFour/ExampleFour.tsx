import { AnimatePresence, animate, m, stagger, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../../../assets/icons/icons";
import { CommentIcon, Instagram, SaveIcon, ShareIcon, TwitterIcon2, WhatsappIcon } from "../../../../assets/icons/icons.tsx";
import sahara from "../../../../assets/images/cards/example-four/sahara.jpeg";
import DummyText from "../../../common/DummyText/DummyText";
import Lottie from "lottie-react";
import "./ExampleFour.scss";
import likeAnimation from "../../../../assets/animations/cards/example-four/like.json";



const LikeButton = () => {
    const [start, setStart] = useState(false);
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    }
    useEffect(() => {
        if (liked) {
            setStart(true);
            setTimeout(() => {
                setStart(false);
            }, 1000);
        }
    }, [liked])
    return (
        <>
            <button onClick={handleClick} disabled={start} className={"like_btn"}>
                {
                    start &&
                    <Lottie className={"animation"} animationData={likeAnimation} loop={true} />
                }
                <HeartIcon active={liked} />
            </button>
        </>
    )
}



const ExampleFour = () => {
    const [show, setShow] = useState(false);
    const [img, setImg] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.8], [6, 1]);

    useMotionValueEvent(scale, "change", latestValue => {
        if (latestValue === 1) {
            setImg(sahara);
        } else {
            setImg("");
        }
    });

    useEffect(() => {
        if (show) {
            animate(
                "#share_list li",
                {
                    y: [100, 0]
                },
                {
                    delay: stagger(0.1),
                }
            );
        }
    }, [show])
    return (
        <div id="card_example_four">
            <DummyText />
            <section
                ref={ref}
                className={"home"}
            >
                <div className={"in"}>
                    <m.div style={{ scale }} className={"frame"}>
                        <AnimatePresence mode="popLayout">
                            <m.img
                                className={"frame_img"}
                                src={img}
                                key={img}
                                alt=""
                                initial={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                                animate={{
                                    filter: "brightness(1) blur(0px)",
                                }}
                                exit={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                            />
                        </AnimatePresence>
                        <div className={"frame_footer"}>
                            <div>
                                <LikeButton />
                            </div>
                            <div>
                                <button
                                    onClick={() => toast.success("comment")}
                                >
                                    <CommentIcon />
                                </button>
                            </div>
                            <div className="position-relative">
                                {
                                    show &&
                                    <div className={"overlay"} onClick={() => setShow(false)} />
                                }
                                <AnimatePresence>
                                    {
                                        show &&
                                        <m.ul
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            id="share_list"
                                            className={"share_list"}>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.whatsapp.com/" className={"whatsapp"}><WhatsappIcon /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.instagram.com/" className={"instagram"}><Instagram /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.twitter.com/" className={"twitter"}><TwitterIcon2 /></Link>
                                            </li>
                                        </m.ul>
                                    }
                                </AnimatePresence>
                                <button
                                    onClick={() => setShow(!show)}
                                    className={"share_btn"}
                                >
                                    <ShareIcon />
                                </button>
                            </div>
                            <div className="ms-auto">
                                <button onClick={() => toast.success("post saved")}>
                                    <SaveIcon />
                                </button>
                            </div>
                        </div>
                    </m.div>
                    <h2 className={"title"}>Public Profile</h2>
                </div>
            </section>
            <DummyText />
        </div>
    )
}

export default ExampleFour
