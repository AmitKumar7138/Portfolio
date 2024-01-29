import "./projects.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const fullStackProjects = () => {

    const variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        <h1> Full Stack Development</h1>
                    </div>
                    <motion.div className="fscards" variants={variants} initial="initial" whileInView="animate">
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./ecommerce.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Ecommerce Website</Card.Title>
                                    <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Button className="button" variant="primary">See Demo</Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./hotel.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Hotel Booking Website</Card.Title>
                                    <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>

                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://hotel-booking-app-d7iw.onrender.com">See Demo</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./ai-companion.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Saas AI Companion Website</Card.Title>
                                    <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://saas-ai-gilt.vercel.app">See Demo</a></Button>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >


    );
}

const MLprojects = () => {

    const variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    return (

        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        <h1>Artificial Intelligence</h1>
                    </div>

                    <motion.div className="mlcards" variants={variants} initial="initial" whileInView="animate">

                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./bigfive.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Big Five Personality Classification</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/BigFive-Personality-classification.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./Iris.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Human Iris Recognition</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/Iris_detection_and_recognition.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./algonauts.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Algonauts Project 2023</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/algonauts_project_2023.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./pothole.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Pothole Detection and Segmentation</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/Pothhole_Detection_and_Segmentation.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./context-aware.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Student Score Prediction</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/StudentScorePrediction_EndtoENd_deployment.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '17.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '17rem' }}>
                                <Card.Img className="img" variant="top" src="./fingerprint.png" style={{ width: '100%', height: '10rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Latent Fingerprint Enhancement</Card.Title>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="">Github Link</a></Button>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>


    )
}

const DSprojects = () => {

    const variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };


    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        <h1> Data Science</h1>
                    </div>

                    <motion.div className="dscards" variants={variants} initial="initial" whileInView="animate">
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./powerBI.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Pizza Sales Chart</Card.Title>
                                    <Card.Text className="text">
                                        Utilizing PowerBI, this project showcases a detailed pizza sales chart, integrating various statistical graphs and charts sourced from a MySQL database. It provides an intuitive visual representation of sales trends and customer preferences, aiding in data-driven decision making.
                                    </Card.Text>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/PowerBI_DistributionChart_BasedOnPizza_Sales.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./recommendation.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Movie Recommendation System</Card.Title>
                                    <Card.Text className="text">
                                        An NLP-based movie recommendation system, this application analyzes text reviews and descriptions to suggest films, deployed end-to-end on the Streamlit platform. It leverages advanced text processing techniques to provide tailored movie suggestions, enhancing user experience through intuitive interaction.
                                    </Card.Text>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/Movie_Recommendation_system.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                        <motion.div className="card-conatiner" style={{ width: '25.05rem', height: '35.05rem' }} variants={variants}>
                            <Card className="card" style={{ width: '25rem', height: '35rem' }}>
                                <Card.Img className="img" variant="top" src="./digit.png" style={{ width: '100%', height: '15rem' }} />
                                <Card.Body className="card-body">
                                    <Card.Title className="title">Hand Written Digit Classification</Card.Title>
                                    <Card.Text className="text">
                                        A neural network-based system designed for classifying handwritten mathematical symbols, leveraging various Adam optimizers for enhanced accuracy. This solution effectively interprets diverse mathematical notations, demonstrating the robustness of neural network applications in pattern recognition
                                    </Card.Text>
                                </Card.Body>
                                <Button className="button" variant="primary"><a href="https://github.com/AmitKumar7138/HandWritten_MathematicalSymbol_Classification.git">Github Link</a></Button>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}


const items = [
    { component: fullStackProjects, title: "Full Stack Projects", id: 1 },
    { component: DSprojects, title: "Data Science Projects", id: 2 },
    { component: MLprojects, title: "Machine Learning Projects", id: 3 },

];


const Projects = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });


    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Project Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <div key={item.id}>
                    <item.component />
                </div>
            ))}

        </div>
    )
};

export default Projects;