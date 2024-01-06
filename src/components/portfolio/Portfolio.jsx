import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {

    const items = [
        {
            id: 1,
            title: "React Commerce",
            img: "https://images.pexels.com/photos/12915136/pexels-photo-12915136.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            discription: "Sit quis sit irure culpa ut et nulla sint ea anim. Non eu nostrud duis ea culpa amet elit ad adipisicing reprehenderit id. Veniam amet minim reprehenderit duis.",
        },
        {
            id: 2,
            title: "Next js Commerce",
            img: "https://images.pexels.com/photos/18712697/pexels-photo-18712697/free-photo-of-kaikoura-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            discription: "Sit quis sit irure culpa ut et nulla sint ea anim. Non eu nostrud duis ea culpa amet elit ad adipisicing reprehenderit id. Veniam amet minim reprehenderit duis.",
        },
        {
            id: 3,
            title: "Vanilla Commerce",
            img: "https://images.pexels.com/photos/17504093/pexels-photo-17504093/free-photo-of-fabrics-over-street-in-town.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            discription: "Sit quis sit irure culpa ut et nulla sint ea anim. Non eu nostrud duis ea culpa amet elit ad adipisicing reprehenderit id. Veniam amet minim reprehenderit duis.",
        },
        {
            id: 4,
            title: "Music App",
            img: "https://images.pexels.com/photos/19501707/pexels-photo-19501707/free-photo-of-portrait-of-woman-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            discription: "Sit quis sit irure culpa ut et nulla sint ea anim. Non eu nostrud duis ea culpa amet elit ad adipisicing reprehenderit id. Veniam amet minim reprehenderit duis.",
        },

    ];

    const Single = ({ item }) => {
        const ref = useRef();

        const { scrollYProgress } = useScroll({ target: ref });

        const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

        return (
            <section>
                <div className="container">
                    <div className="wrapper">
                        <div className="img-container" ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        <motion.div className="text-container" style={{ y }}>
                            <h2>{item.title}</h2>
                            <p>{item.discription}</p>
                            <button>See Demo</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    };


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
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {
                items.map((item) => (
                    <Single item={item} key={item.id} />
                ))
            }
        </div>
    );
};

export default Portfolio
