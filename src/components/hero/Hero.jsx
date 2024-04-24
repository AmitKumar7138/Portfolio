import "./hero.scss"
import { motion } from "framer-motion"

const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },

        scrollAnimation: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: "infinity",
            },
        }
    };

    const sliderVariants = {
        initial: {
            x: 0,
        },

        animate: {
            x: "-220%",
            transition: {
                repeat: "infinity",
                repeatType: "mirror",
                duration: 15,
            },
        },
    };




    return (
        <div className="hero ">
            <div className="wrapper">
                <motion.div className="text-container" variants={textVariants} initial="initial" animate="animate">
                    <motion.h1 variants={textVariants}>Hii, I am Amit Kumar</motion.h1>
                    <motion.h2 variants={textVariants}>A FullStack Developer and ML Engineer.</motion.h2>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}> <a href="#Recent Works">See the latest Works</a></motion.button>
                        <motion.button variants={textVariants}> <a href="#Contacts">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div className="sliding-textcontainer" variants={sliderVariants} initial="initial" animate="animate">
                Developer and Travellor.
            </motion.div>

            <div className="img-container">
                <img src="./hero_img_2.png" alt="" />
            </div>
        </div >
    )
}

export default Hero