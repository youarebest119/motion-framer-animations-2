import { ReactNode } from "react";
import { SidebarExampleOne } from "../components/ui/sidebars";
import { PREVIEWS } from "../assets/images/previews";
import { TextExampleFour, TextExampleOne, TextExampleThree, TextExampleTwo } from "../components/ui/text";
import { ModalExampleOne } from "../components/ui/modals";
import { CardExampleFive, CardExampleFour, CardExampleOne, CardExampleThree, CardExampleTwo } from "../components/ui/cards";
import { MouseExampleOne, MouseExampleTwo } from "../components/ui/mouse";
import { HeaderExampleOne, HeaderExampleTwo } from "../components/ui/headers";
import { ScrollExampleOne, ScrollExampleTwo } from "../components/ui/scroll";

interface component {
    id: string,
    preview?: string,
    title: string,
    description?: string,
    videoPreview?: string,
    childrens: {
        id: string,
        component: () => ReactNode,
        preview?: string,
        title: string,
        description?: string,
        videoPreview?: string,
        createdOn: string,
        prerequisites: {
            packages?: {
                name: ("framer-motion" | "sass" | "react-router-dom" | "bootstrap" | "react-bootstrap" | "react-hot-toast" | "lottie-react"),
                link?: string,
            }[],
            css?: string[],
            media?: string[],
            others?: string[],
        }
    }[],
}

export const COMPONENTS: component[] = [
    {
        id: "sidebars",
        title: "Sidebars",
        childrens: [
            {
                id: "example-1",
                component: SidebarExampleOne,
                preview: PREVIEWS.SIDEBAR.EXAMPLE_ONE,
                videoPreview: "",
                title: "Example 1",
                description: "full screen sidebar for desktop size with one toggle button and a sidebar",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        {
                            name: "framer-motion",
                            link: "https://www.framer.com/motion/",
                        },
                        {
                            name: "sass",
                            link: "https://www.npmjs.com/package/sass"
                        },
                        {
                            name: "bootstrap",
                            link: "https://getbootstrap.com/",
                        },
                        {
                            name: "react-router-dom",
                            link: "https://www.npmjs.com/package/react-router-dom",
                        },
                        {
                            name: "react-bootstrap",
                            link: "https://react-bootstrap.github.io/",
                        }
                    ],
                    css: ["src/index.scss", "./ExampleOne.scss"],
                    media: ["src/assets/images/sidebar-images/example-sidebar-one"],
                    others: [],
                },
            },
        ],
    },
    {
        id: "headers",
        title: "Headers",
        childrens: [
            {
                id: "example-1",
                component: HeaderExampleOne,
                title: "Example One",
                preview: PREVIEWS.HEADER.EXAMPLE_ONE,
                description: "header with left logo and right side navbar and action buttons with toggle button in responsive",
                createdOn: "Thu Mar 08 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                        { name: "react-router-dom", },
                        { name: "react-bootstrap", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-2",
                component: HeaderExampleTwo,
                preview: PREVIEWS.HEADER.EXAMPLE_TWO,
                title: "Example Two",
                description: "header with left logo , centered navbar and right size action buttons with toggle button in responsive",
                createdOn: "Thu Mar 08 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                        { name: "react-router-dom", },
                        { name: "react-bootstrap", },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "buttons",
        title: "Buttons",
        childrens: [],
    },
    {
        id: "cards",
        title: "Cards",
        childrens: [
            {
                id: "example-1",
                component: CardExampleOne,
                title: "Example One",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                preview: PREVIEWS.CARDS.EXAMPLE_ONE,
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", }
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-2",
                component: CardExampleTwo,
                preview: PREVIEWS.CARDS.EXAMPLE_TWO,
                title: "Example Two",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", }
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-3",
                component: CardExampleThree,
                title: "Example Three",
                preview: PREVIEWS.CARDS.EXAMPLE_THREE,
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "react-bootstrap", },
                        { name: "framer-motion" },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-4",
                component: CardExampleFour,
                preview: PREVIEWS.CARDS.EXAMPLE_FOUR,
                title: "Example Four",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "react-hot-toast" },
                        { name: "react-router-dom" },
                        { name: "framer-motion" },
                        { name: "lottie-react" },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-5",
                component: CardExampleFive,
                // preview: PREVIEWS.CARDS.EXAMPLE_FOUR,
                title: "Example Five",
                createdOn: "Thu Mar 08 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "react-bootstrap" },
                        { name: "framer-motion" },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "dropdowns",
        title: "Dropdowns",
        childrens: [],
    },
    {
        id: "loaders",
        title: "Loaders",
        childrens: [],
    },
    {
        id: "modals",
        title: "Modals",
        childrens: [
            {
                id: "example-1",
                component: ModalExampleOne,
                title: "Example One",
                preview: PREVIEWS.MODALS.EXAMPLE_ONE,
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "react-hot-toast", },
                        { name: "react-bootstrap", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "mouse",
        title: "Mouse",
        childrens: [
            {
                id: "example-1",
                component: MouseExampleOne,
                title: "Example One",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                description: "custom cursor ",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-2",
                component: MouseExampleTwo,
                title: "Example Two",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "roadmaps",
        title: "Roadmaps",
        childrens: [],
    },
    {
        id: "scroll",
        title: "Scroll",
        childrens: [
            {
                id: "example-1",
                component: ScrollExampleOne,
                title: "Example One",
                createdOn: "Thu Mar 18 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-2",
                component: ScrollExampleTwo,
                title: "Example Two",
                createdOn: "Thu Mar 27 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "sliders",
        title: "Sliders",
        childrens: [],
    },
    {
        id: "tables",
        title: "Tables",
        childrens: [],
    },
    {
        id: "tabs",
        title: "Tabs",
        childrens: [],
    },
    {
        id: "text",
        title: "Text",
        childrens: [
            {
                id: "example-1",
                component: TextExampleOne,
                title: "Example One",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-2",
                component: TextExampleTwo,
                title: "Example Two",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                        { name: "react-bootstrap", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-3",
                component: TextExampleThree,
                title: "Example Three",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                    ],
                    others: [],
                    media: [],
                }
            },
            {
                id: "example-4",
                component: TextExampleFour,
                title: "Example Four",
                createdOn: "Thu Mar 07 2024 15:13:19 GMT+0530 (India Standard Time)",
                prerequisites: {
                    packages: [
                        { name: "sass", },
                        { name: "framer-motion", },
                        { name: "react-bootstrap" },
                    ],
                    others: [],
                    media: [],
                }
            },
        ],
    },
    {
        id: "tokenomics",
        title: "Tokenomics",
        childrens: [],
    },
]