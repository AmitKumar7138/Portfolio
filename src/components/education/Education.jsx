import "./education.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {


    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacaity: 0,
        },

        animate: {
            x: 0,
            opacaity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        },


    };



    return (
        <motion.div className="education"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="quote-container" variants={variants}>
                <motion.div className="title">
                    <h1>Education</h1>
                </motion.div>
                <motion.div className="quote">
                    <p>“Education is the passport to the future, for tomorrow <br /> belongs to those who prepare for it today.” <br />- Malcolm X</p>
                    <hr />
                </motion.div>

            </motion.div>
            <motion.div className="title-container" variants={variants}>
                <motion.div className="education">
                    <motion.div className="img">
                        <img src="education.png" alt="" />
                    </motion.div>

                </motion.div>

                <motion.div className="edu-info">
                    <motion.div className="UF" whileHover={{ scale: 1.5, textShadow: "0px 0px 8px rgb(255,255,255)" }}>
                        <motion.div className="logo">
                            <img src="UF_logo.jpg" alt="" />
                        </motion.div>
                        <motion.div className="content">
                            <h1>University of Florida</h1>
                            <h2> 2022 - 2024</h2>
                            <h3> MS Electraical And Computer Engineering.</h3>
                        </motion.div>


                    </motion.div>
                    <motion.div className="NIT" whileHover={{ scale: 1.5, textShadow: "0px 0px 8px rgb(255,255,255)" }}>
                        <motion.div className="logo">
                            <img src="NIT_logo.webp" alt="" />
                        </motion.div>
                        <motion.div className="content">
                            <h1>National Institute of Technology Patna.</h1>
                            <h2> 2017 - 2021</h2>
                            <h3> BTech Computer Science and Engineering.</h3>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}
export default Education