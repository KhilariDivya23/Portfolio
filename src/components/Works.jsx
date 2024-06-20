import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../style.js";
import { github, livelink } from "../assets";
import { SectionWrapper } from "../hoc";
import {experiences, projects} from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import {VerticalTimeline} from "react-vertical-timeline-component";


const ProjectCard = ({ index, name, description, tags, image, source_code_links, live_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute gap-2 inset-0 flex justify-end m-3 card-img_hover">
                        {
                            source_code_links.map((source_code_link, idx) =>
                                <div
                                    key={idx}
                                    onClick={() => window.open(source_code_link, "_blank")}
                                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                            </div>
                            )
                        }
                        {  live_link !== "" &&
                            <div
                                onClick={() => window.open(live_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img src={livelink} alt="github" className="w-1/2 h-1/2 object-contain"/>
                            </div>
                        }
                    </div>
                </div>
                
                
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="text-justify mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        return (
                            <p
                                key={tag.name}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        )
                    })}
                </div>
            
            </Tilt>
        </motion.div>
    );
}
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>
            
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify"
                >
                    Embark on a journey through my portfolio of innovative projects, where technology meets creativity to forge solutions that inspire.Each project is accompanied by brief descriptions, link to code repositories and live demo. Explore a collection of endeavors that epitomize my dedication to innovation and problem-solving.
                </motion.p>
            </div>
            
            <div className="mt-20 flex flex-wrap gap-7">
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={`project-${index}`}
                                index={index}
                                {...project}
                            />
                        )
                    }
                    )
                }
                
            </div>
        </>
    )
}

export default SectionWrapper(Works, "");