import "./skills.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
    {
        Languages: ["JavaScript", "Python", "TypeScript", "Java", "C++"]
    },
    {
        FullStack: [
            "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL",
            "DynamoDB", "RESTful API", "JQuery", "JWT-Authentication", "GitHub Actions", "Spring Boot",
            "Tailwind CSS", "PHP"
        ]
    },
    {
        ML: [
            "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "SciPy",
            "NLTK", "Matplotlib", "BERT", "RoBERTa", "OpenCV", "ANN", "CNN", "RNN",
            "LSTM", "GANs", "Auto-Encoders", "Generative AI", "NLP", "Computer Vision",
            "Hugging Face", "Transformers", "OpenAI", "LLMs", "YOLO", "SSD", "ResNet", "FastRCNN"
        ]
    },
    {
        OtherSkills: [
            "Data Structures and Algorithms", "Object Oriented Programming", "UI/UX",
            "Docker", "Kubernetes", "Jira", "Git", "Linux", "AWS EC2", "AWS S3",
            "AWS Lambda", "AWS CI/CD", "AWS DynamoDB", "AWS ALB", "AWS Kinesis",
            "Big Data", "Apache Spark", "Redis", "Airflow"
        ]
    }
]
skills[0].Languages.map(skill => console.log(skill))

const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

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
        <motion.div
            className="skills "
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="text-container" variants={variants}>
                <p> I focus on creativity</p>
                <hr />
            </motion.div>

            <motion.div className="title-container" variants={variants}>
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Technological Skills</motion.b> and <motion.b whileHover={{ color: "orange" }}>Tools</motion.b> </h1>
                </div>
            </motion.div>

            <motion.div className="skill-container" variants={variants}>
                <motion.div className="languages">
                    <p className="skill-title">Languages</p>
                    <div className="skill-struct">
                        {
                            skills[0].Languages.map((skill) => (
                                <button className="skill-button">{skill}</button>
                            )
                            )
                        }
                    </div>

                </motion.div>

                <motion.div className="full-stack">
                    <p className="skill-title">Full Stack Development</p>
                    <div className="skill-struct">
                        {
                            skills[1].FullStack.map((skill) =>
                            (
                                <button className="skill-button">{skill}</button>
                            )
                            )
                        }
                    </div>

                </motion.div>

                <motion.div className="ml">
                    <p className="skill-title">Machine Learning</p>
                    <div className="skill-struct">
                        {
                            skills[2].ML.map((skill) =>
                            (
                                <button className="skill-button">{skill}</button>
                            )
                            )
                        }
                    </div>


                </motion.div>
                <motion.div className="others">
                    <p className="skill-title">Other Skills</p>
                    <div className="skill-struct">
                        {
                            skills[3].OtherSkills.map((skill) =>
                            (
                                <button className="skill-button">{skill}</button>
                            )
                            )
                        }
                    </div>

                </motion.div>
            </motion.div>

            <motion.div className="scroll-indicator" variants={variants}> 👈 Scroll 👉</motion.div>

        </motion.div>
    )
}

export default Services