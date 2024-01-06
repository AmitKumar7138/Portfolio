import './mystory.scss';
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Mystory = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);




    return (
        <div className="mystory">
            <div className="wrapper">
                <div className="img-container" ref={ref}>
                </div>

                <motion.div className="content" style={{ y }}>
                    <motion.h1>Welcome to My World of Adventures and Melodies! 😊</motion.h1>
                    <motion.h2>Exploring the World and Music with My Crew</motion.h2>

                    <motion.div className="paragraph" >
                        <motion.p >"When I need a break from coding, I find my solace in traveling.
                            On these journeys, my travel playlist is incomplete without the legendary tunes of K.K. - his music adds a soulful touch to my travels."</motion.p>
                        <motion.p >"The mountains, especially, call out to me. I'm captivated by the sensation of the winds and the breathtaking views from the peaks.
                            If you share my enthusiasm for mountainous escapades, let's connect and plan our next adventure."</motion.p>
                        <motion.p >"The majestic Himalayas are not just mountains; they're a realm where fantasies feel real.
                            The warmth and love in the Himalayan communities reaffirm my faith in humanity.
                            And yes, for me, 'chai' is the elixir of travels - and just for the record, 'chai tea' is simply 'Tea Tea'.
                            So, are you ready to join me on a journey filled with music, mountains, and chai?"</motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Mystory;
