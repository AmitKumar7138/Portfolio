import "./skills.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


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

            <motion.div className="list-container" variants={variants}>
                <motion.div className="box" whileHover={{ background: "grey", color: "black" }}>
                    <h2>Full Stack Development</h2>
                    <div className="list">
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>MySQL</li>
                            <li>NoSQL</li>
                            <li>SQL</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostgreSQL</li>
                            <li>Blockchain</li>
                            <li>Scss</li>
                            <li>MongoDB</li>
                            <li>RUST</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "grey", color: "black" }}>
                    <h2>Data Science</h2>
                    <div className="list">
                        <ul>
                            <li>Python, C++, C</li>
                            <li>Scikit-learn</li>
                            <li>MLlib</li>
                            <li>Keras</li>
                            <li>PowerBI</li>
                            <li>Tableau</li>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                            <li>SciPy</li>
                            <li>NLTK</li>
                            <li>XgBoost</li>
                            <li>LightGBM</li>
                            <li>Big Data</li>
                        </ul>
                    </div>

                </motion.div>
                <motion.div className="box" whileHover={{ background: "grey", color: "black" }}>
                    <h2>Machine Learning</h2>
                    <div className="list">
                        <ul>
                            <li>TensorFlow</li>
                            <li>PyTorch</li>
                            <li>ANN, CNN</li>
                            <li>RNN, GRU</li>
                            <li>YOLO, SSD</li>
                            <li>ResNet, FastRCNN</li>
                            <li>LSTM, GNN</li>
                            <li>GAN,</li>
                            <li>Auto-Encoders</li>
                            <li>Generative AI</li>
                            <li>BERT, GPT</li>
                            <li>HuggingFace</li>
                            <li>Transformers</li>
                            <li>OpenAI</li>
                            <li> LLMs, LangChain</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "grey", color: "black" }}>
                    <h2>Other Skills</h2>
                    <div className="list">
                        <ul>
                            <li>AWS</li>
                            <li>Google Cloud (GCP)</li>
                            <li>Azure</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Streamlit</li>
                            <li>Heroku</li>
                            <li>Statistics & Applied Mathematics</li>
                            <li>Signal Processing</li>
                            <li>Apache Spark</li>
                            <li>Linux</li>
                            <li>Git</li>
                            <li>Jira</li>
                            <li>Django</li>
                            <li>Flask</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="scroll-indicator" variants={variants}> 👈 Scroll 👉</motion.div>

        </motion.div>
    )
}

export default Services