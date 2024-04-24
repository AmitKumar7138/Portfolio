import "./projects.scss";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const fullStack = [
    {
        title: "Edtech Web Development for Edspare",
        role: "Software Developer",
        duration: "Jan 2024 - Current",
        location: "Remote",
        imgURL: "./EDspare.png", // Modify the path as needed for accurate linking
        objective: "Develop and optimize a Edutech website and RESTful API to enhance data retrieval speeds and system scalability for a large user base.",
        keyAchievements: [
            "Performance Enhancement: Developed and optimized a nested RESTful API that resulted in a 40% improvement in data retrieval speeds, serving over 100,000 users.",
            "Security Implementation: Implemented advanced security measures using JWT and bcrypt to notably reduce unauthorized access.",
            "UI Responsiveness: Enhanced user interface responsiveness through the use of TypeScript, React, and Tailwind CSS, improving overall user experience.",
            "Backend Services: Built robust backend services with Node.js and Express.js, incorporating WebSocket for efficient real-time synchronization.",
            "Database Management: Streamlined MongoDB operations with Mongoose, achieving a 30% increase in data handling speed.",
            "Automation and Scalability: Automated CI/CD pipelines using GitHub Actions, transitioning to Jenkins to enhance scalability and reliability of the deployment process.",
            "Resource Efficiency: Improved resource efficiency and load distribution by 25% through the implementation of AWS ALB and EC2 auto-scaling.",
            "Cost Management: Reduced operational costs by 20%, significantly enhancing system scalability to accommodate a growing user base."
        ],
        skills: ["TypeScript", "NodeJS", "ExpressJS", "TailwindCSS", "WebSockets", "MongoDB", "AWS", "RestFul API", "GoogleMaps API", "Vite", "JWT-Authentication"],
        link: "https://www.edspare.com/",
    },
    {
        title: "End-to-End Hotel Booking App",
        role: "Software Developer",
        duration: "September 2023 - January 2024",
        location: "Remote",
        imgURL: "./TakeAChill.png",
        objective: "Design and deploy a user-centric hotel booking application with advanced functionality to streamline the booking process and enhance user satisfaction.",
        keyAchievements: [
            "Application Development: Designed and deployed a hotel booking application focused on user experience with features like sign-in, advanced search, and filtering options.",
            "Technology Stack: Employed the MERN stack (MongoDB, Express, React, Node.js) to create a robust and scalable application architecture.",
            "Security and Payments: Integrated secure payment systems using Stripe to ensure transaction safety and reliability.",
            "Operational Productivity: Enhanced the booking process, significantly improving operational productivity and user satisfaction."
        ],
        skills: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Stripe", "MERN Stack"],
        link: "https://hotel-booking-app-d7iw.onrender.com"
    },
    {
        title: "SaaS AI Web Application",
        role: "Software Developer",
        duration: "June 2023 - September 2023",
        location: "Remote",
        imgURL: "./Imagine.png",
        objective: "Engineer and launch a SaaS AI platform leveraging the ChatGPT API to enrich user interaction and engagement through advanced AI capabilities.",
        keyAchievements: [
            "Platform Development: Developed and launched a SaaS AI platform that uses ChatGPT API, focusing on enhancing the interactive web service experience.",
            "Security Integration: Ensured secure user sign-in and payment functionalities using Clerk and Stripe, maintaining high standards of data security.",
            "Technology Integration: Seamlessly integrated AI to manage and enhance user experience and data handling capabilities using a modern tech stack.",
            "Revenue Impact: Boosted user engagement which set a new standard in interactive services, contributing to a potential 30% increase in revenue."
        ],
        skills: ["NodeJS", "ExpressJS", "ReactJS", "JavaScript", "Clerk", "Stripe", "ChatGPT API", "Prisma", "SaaS"],
        link: "https://saas-ai-gilt.vercel.app"
    }
];

const ML =
    [
        {
            title: "Big Five Personality Predictor",
            role: "NLP Researcher",
            duration: "Aug 2023 – Dec 2023",
            location: "University of Florida, Gainesville",
            imgURL: "./bigfive.png", // Update with actual image path
            objective: "Lead a pioneering research project on personality profiling using Big Five and advanced NLP techniques.",
            keyAchievements: [
                "Spearheaded a research project on Big Five Personality profiling, utilizing advanced natural language processing techniques.",
                "Conducted an in-depth comparison of machine learning models like XgBoost, SVM, Random Forest, BERT, and RoBERTa, focusing on F1 score optimization.",
                "Utilized the HyperGator supercomputer equipped with NVIDIA A100 GPU for efficient training of a large dataset comprising 3800 essays.",
                "Achieved an impressive average F1-score of 77.79% with the RoBERTa model, enhancing personalized data analysis and privacy measures."
            ],
            skills: ["NLP", "Python", "BERT", "RoBERTa", "XgBoost", "SVM", "Random Forest", "Data Analysis"],
            link: "https://github.com/AmitKumar7138/BigFive-Personality-classification"
        },
        {
            title: "Iris Recognitor",
            role: "Research Student",
            duration: "Jan 2023 – Apr 2023",
            location: "University of Florida, Gainesville",
            imgURL: "./Iris.png", // Update with actual image path
            objective: "Develop advanced biometric identification solutions using state-of-the-art machine learning models.",
            keyAchievements: [
                "Developed cost-effective training methods using Resnet50 and VGG19, optimizing resource utilization.",
                "Implemented YOLOv8 for high-precision iris detection and employed Siamese networks for robust recognition capabilities.",
                "Recorded outstanding model performance metrics with a training recall of 0.98 and precision of 0.92, alongside validation recall of 0.90 and precision of 0.84, setting a new benchmark in biometric security."
            ],
            skills: ["YOLOv8", "Siamese Neural Networks", "Resnet50", "VGG19", "Machine Learning", "Image Processing"],
            link: "https://github.com/AmitKumar7138/Iris_detection_and_recognition"
        },
        {
            title: "Algonauts Project 2023",
            role: "Research Student",
            duration: "Jan 2023 - Apr 2023",
            location: "University of Florida, Gainesville",
            imgURL: "./algonauts.png", // Update with actual image path
            objective: "Evaluate and compare various deep learning models to enhance image recognition capabilities for the Algonauts Project, aiming to significantly improve model accuracy and team performance.",
            keyAchievements: [
                "Conducted a comprehensive review of 10 deep learning models, analyzing their effectiveness and impact on image recognition accuracy.",
                "Led discussions on model selection and training strategies, which resulted in a consensus on the top-performing model and a 25% improvement in team performance.",
                "Achieved a 15% average accuracy improvement across tested models, contributing to an enhanced understanding and application of state-of-the-art deep learning architectures."
            ],
            skills: ["Deep Learning", "Model Analysis", "Python", "Data Analysis", "Team Leadership"],
            link: "https://github.com/AmitKumar7138/algonauts_project_2023"
        },
        {
            title: "Movie Recommender App",
            role: "ML Developer",
            duration: "Oct 2023 - Nov 2023",
            location: "University of Florida, Gainesville",
            imgURL: "./recommendation.png", // Update with actual image path
            objective: "Create a highly accurate movie recommender system based on TMDb reviews using advanced NLP techniques.",
            keyAchievements: [
                "Developed a movie recommender system leveraging the TMDb dataset, integrating NLP and machine learning for enhanced recommendation accuracy.",
                "Employed NLP tools such as SpaCy and NLTK for data processing, supplemented by data analytics tools like Pandas, Seaborn, and Matplotlib; fully deployed via Streamlit.",
                "Attained a notable 92.3% F1 score, demonstrating exceptional precision in generating personalized movie recommendations and significantly boosting user engagement."
            ],
            skills: ["NLP", "SpaCy", "NLTK", "Pandas", "Seaborn", "Matplotlib", "Machine Learning", "Data Processing", "Streamlit"],
            link: "https://github.com/AmitKumar7138/Movie_Recommendation_system"
        },
        {
            title: "Math Symbol Classifier",
            role: "Research Student",
            duration: "Oct 2022 - Dec 2022",
            location: "University of Florida, Gainesville",
            imgURL: "./digit.png",
            objective: "Develop an advanced model for recognizing handwritten mathematical symbols using VGG-16.",
            keyAchievements: [
                "Crafted and curated a unique dataset of handwritten mathematical symbols, showcasing skills in data collection and processing.",
                "Expertly trained the VGG-16 model using scratch-building and transfer learning techniques, achieving precise classification.",
                "Delivered outstanding validation accuracies of 95% and 92%, far exceeding the class average and proving model effectiveness."
            ],
            skills: ["VGG-16", "Data Collection", "Machine Learning", "Python", "Transfer Learning"],
            link: "https://github.com/AmitKumar7138/HandWritten_MathematicalSymbol_Classification"
        },
        {
            title: "Unreal Engine Simulator - Pothole Detection",
            role: "Research Engineer",
            duration: "Oct 2022 - Dec 2022",
            location: "University of Florida, Gainesville",
            imgURL: "./pothole.png",
            objective: "Implement a simulation system for detecting potholes to enhance autonomous vehicle navigation technologies.",
            keyAchievements: [
                "Gained firsthand experience with Blender, Quixel Mixer, Airsim Simulator, and Unreal Engine for realistic simulation development.",
                "Developed an Unreal Engine environment utilizing road spline structures integrated with solid road models from Blender.",
                "Achieved high bounding box precision of 80%, Segmentation precision of 74%, mAP50 of 70%, and mAP50 of 65% for bounding box and segmentation mask, respectively, enhancing potential applications in autonomous driving systems."
            ],
            skills: ["Unreal Engine", "Blender", "Simulation", "Autonomous Vehicles", "Quixel Mixer", "Airsim Simulator"],
            link: "https://github.com/AmitKumar7138/Pothhole_Detection_and_Segmentation"
        },
        {
            title: "NST - Latent Fingerprint Generator",
            role: "Research Assistant",
            duration: "Jul 2021 – Nov 2021",
            location: "National Institute of Technology, Patna",
            imgURL: "./latent.png",
            objective: "Generate a realistic latent fingerprint dataset using neural style transfer techniques for improved forensic analysis.",
            keyAchievements: [
                "Developed an innovative algorithm to incorporate the true nature of latent fingerprints into fingerprint images using Neural Style Transfer.",
                "Gained extensive experience in writing research papers, working with NST models, deep learning models, and image processing techniques.",
                "Successfully trained a Neural Style Transfer (NST) model using TensorFlow and OpenCV, achieving high similarity levels with actual latent fingerprints."
            ],
            skills: ["Neural Style Transfer", "Deep Learning", "TensorFlow", "OpenCV", "Research Writing"],
            link: ""
        },
        {
            title: "LATENT FINGERPRINT ENHANCEMENT USING GENERATIVE ADVERSARIAL NETWORKS (GAN)",
            role: "Research Assistant",
            duration: "Jan 2021 – Apr 2021",
            location: "National Institute of Technology, Patna",
            imgURL: "./fingerprint.png",
            objective: "Enhance the quality of latent fingerprint images using GANs to improve forensic identification processes.",
            keyAchievements: [
                "Developed and trained a Generative Adversarial Network (GAN) to transform latent fingerprint images into enhanced versions, facilitating easier and more accurate identification.",
                "Managed and created datasets from scratch for training the model using image processing tools such as OpenCV and Pillow.",
                "Achieved a high accuracy rate of 92.8% as true positive when matched with actual fingerprints, significantly surpassing existing benchmarks in fingerprint enhancement research."
            ],
            skills: ["Generative Adversarial Networks", "Deep Learning", "Data Management", "OpenCV", "Pillow"],
            link: ""
        }
    ]



const FullStackProjects = () => {
    const [count, setCount] = useState(0);

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

    const rightClick = () => {
        setCount(prevCount => (prevCount + 1) % fullStack.length);
    };

    const leftClick = () => {
        setCount(prevCount => (prevCount - 1 + fullStack.length) % fullStack.length);
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        <h1>Full Stack Development</h1>
                    </div>

                    <motion.div className="carousel cards" variants={variants} initial="initial" whileInView="animate">

                        <div className="content">
                            <div className="img-div">
                                <img
                                    className="img"
                                    src={fullStack[count].imgURL}
                                    alt={`${fullStack[count].title} Image`} />
                            </div>
                            <div className="description">
                                <div className="title">
                                    <h2>{fullStack[count].title}</h2>
                                </div>
                                <div className="role-duration-location">
                                    <p>Role: {fullStack[count].role} | Duration: {fullStack[count].duration} | Location: {fullStack[count].location}</p>
                                </div>
                                <div className="objective">
                                    <p>{fullStack[count].objective}</p>
                                </div>
                                <div className="longDes">
                                    <ul>
                                        {fullStack[count].keyAchievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="skills">
                                    {fullStack[count].skills.map((skill, index) => (
                                        <button key={index} className="skill-button">
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                                <button className="link">
                                    <a href={fullStack[count].link}>Link </a>
                                </button>
                            </div>
                        </div>


                        <button
                            onClick={leftClick}
                            className="button left">
                            &lt;
                        </button>
                        <button
                            onClick={rightClick}
                            className="button right">
                            &gt;
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const MLprojects = () => {

    const [count, setCount] = useState(0);

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

    const rightClick = () => {
        setCount(prevCount => (prevCount + 1) % ML.length);
    };

    const leftClick = () => {
        setCount(prevCount => (prevCount - 1 + ML.length) % ML.length);
    };

    return (

        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="heading">
                        <h1>Artificial Intelligence</h1>
                    </div>

                    <motion.div className="carousel cards" variants={variants} initial="initial" whileInView="animate">

                        <div className="content">
                            <div className="img-div">
                                <img
                                    className="img"
                                    src={ML[count].imgURL}
                                    alt={`${ML[count].title} Image`} />
                            </div>
                            <div className="description">
                                <div className="title">
                                    <h2>{ML[count].title}</h2>
                                </div>
                                <div className="role-duration-location">
                                    <p>Role: {ML[count].role} | Duration: {ML[count].duration} | Location: {ML[count].location}</p>
                                </div>
                                <div className="objective">
                                    <p>{ML[count].objective}</p>
                                </div>
                                <div className="longDes">
                                    <ul>
                                        {ML[count].keyAchievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="skills">
                                    {ML[count].skills.map((skill, index) => (
                                        <button key={index} className="skill-button">
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                                <button className="link">
                                    <a href={ML[count].link}>Link </a>
                                </button>
                            </div>
                        </div>


                        <button
                            onClick={leftClick}
                            className="button-ML left-ML">
                            &lt;
                        </button>
                        <button
                            onClick={rightClick}
                            className="button-ML right-ML">
                            &gt;
                        </button>

                    </motion.div>

                </div>
            </div>
        </section>


    )
}



const items = [
    { component: FullStackProjects, title: "Full Stack Projects", id: 1 },
    { component: MLprojects, title: "Machine Learning Projects", id: 2 },

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