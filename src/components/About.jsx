import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { styles } from '../style';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={ fadeIn("right", "spring", 0.5 * index, 0.75) }
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={ icon } alt={ title } className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{ title }</h3>
                </div>
            </motion.div>
            
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={ textVariant() }>
                <p className={ styles.sectionSubText }>
                    Introduction
                </p>
                <h2 className={ styles.sectionHeadText }>
                    Overview
                </h2>
            </motion.div>
            
            <motion.p
                variants={ fadeIn("", "", 0.1, 1) }
                className="mt-4 text-secondary text-[17px] leading-[30px] text-justify"
            >
                I'm a final-year engineering enthusiast from Mumbai University set to graduate in 2024. My true passion lies in coding and creative problem-solving, which has led me to embark on an exhilarating journey into competitive programming and mastering the intricacies of Data Structures and Algorithms. Alongside, I'm diligently honing my skills in the dynamic MERN stack, eager to craft innovative projects. With an unwavering drive to excel and a penchant for exciting challenges, I'm poised to make a significant impact in the world of technology.
            </motion.p>
            
            <div className="mt-20 flex flex-wrap gap-10">
                {
                    services.map((service, index) =>
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    )
                }
                
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");