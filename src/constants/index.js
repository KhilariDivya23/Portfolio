import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    typescript,
    mongodb,
    python,
    bootstrap,
    tailwind,
    materialui,
    sql,
    git,
    flipkart,
    flairlabs,
    amar,
    sustainable,
    learnbasics,
    cplusplus,
    socialmedia,
    memoryGame,
    tourAndTravel,
    transport
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Competitive Programmer",
        icon: backend,
    },
    {
        title: "Problem Solver",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Typescript",
        icon: typescript,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Materail Ui",
        icon: materialui,
    },
    {
        name: "C++",
        icon: cplusplus,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Mongo DB",
        icon: mongodb,
    },
    
];

const experiences = [
    {
        title: "Application Engineer - I",
        company_name: "Flipkart",
        icon: flipkart,
        iconBg: "#E6DEDD",
        date: "June 2024 - Present",
        points: [
            "Collaborating with senior developers to understand project requirements and deliver high-quality code."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Flair Labs",
        icon: flairlabs,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - May 2024",
        points: [
            "Identified and resolved bugs within the drag-and-drop website builder to enhance functionality and user experience.",
            "Designed and implemented a feature to copy entire components, including their child components and associated properties."
        ],
    },
    {
        title: "Project Trainee",
        company_name: "Amar Transport",
        icon: amar,
        iconBg: "#E6DEDD",
        date: "March 2023 - May 2023",
        points: [
            "Developed frontend components and templates for billing and chalan documents using React, ensuring a user-friendly and responsive interface.",
            "Designed and implemented visually appealing login and sign up pages using React, enhancing the overall user experience.",
            "Leveraged CSS animations to create engaging visual effects, elevating the interactivity and aesthetics of the web pages."
        ],
    },
    {
        title: "Research Intern",
        company_name: "Sustainable Living Org.",
        icon: sustainable,
        iconBg: "#E6DEDD",
        date: "February 2023 - March 2023",
        points: [
            "Developed a Python program to analyze a dataset of car images and automatically segregate them based on their respective brands.",
            "Employed popular Python libraries like OpenCV and scikit-learn to handle image manipulation, feature extraction, and classification tasks.",
            "Conducted comprehensive research on cutting-edge computer vision technologies and libraries available for Python programming."
        ]
    },
    {
        title: "Python Developer Intern",
        company_name: "Learn Basics",
        icon: learnbasics,
        iconBg: "#E6DEDD",
        date: "August 2022 - September 2022",
        points: [
            "Collaborated effectively within a dynamic three-person team to conceive, design, and create a versatile Daily Report Generator App.",
            "Utilized a skillful combination of Python, Pandas, and other essential libraries to automate the process of generating student reports in PDF format.",
            "Employed the power of PyLatex for seamlessly creating professional-grade PDF documents, ensuring a polished and presentable output."
        ]
    }
];

const projects = [
    {
        name: "Social Media Platform",
        description:
            " It is a Social Media Platform where people can like, post and manage their friends. It uses NodeJS for REST API’s, ReactJS library for frontend and MongoDB database.",
        tags: [
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "materialUi",
                color: "pink-text-gradient",
            }
        ],
        image: socialmedia,
        source_code_links: [
            "https://github.com/KhilariDivya23/SocialMedia-Frontend",
            "https://github.com/KhilariDivya23/SocialMedia-Backend"
        ],
        live_link: ""
    },
    {
        name: "Transport Management System",
        description:
            "In the collaborative endeavor of a This Project, my focus converged on the frontend realm, showcasing proficiency in ReactJS and SCSS. I created meticulously structured and reusable components.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            }
        ],
        image: transport,
        source_code_links: [
            "https://github.com/CryptCoders/amar-transport-frontend",
        ],
        live_link: ""
    },
    {
        name: "Memory Game",
        description:
            "An engaging memory game that seamlessly combines HTML, CSS, and JavaScript to deliver a captivating user experience. The game showcases a thoughtfully crafted user interface, enhancing player engagement and interaction. ",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: memoryGame,
        source_code_links: [
            "https://github.com/KhilariDivya23/Memory_Game",
        ],
        live_link: "https://khilaridivya23.github.io/Memory_Game/"
    },
    {
        name: "Tour And Travel",
        description:
            "An intricately designed static website, meticulously crafted using the trifecta of HTML, CSS, and JS. This immersive platform effortlessly guides users through a multitude of captivating pages, seamlessly weaving together the story of diverse destinations.",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: tourAndTravel,
        source_code_links: [
            "https://github.com/KhilariDivya23/Tour_And_Travel",
        ],
        live_link: "https://khilaridivya23.github.io/Tour_And_Travel/"
    }
];

export { services, technologies, experiences, projects };