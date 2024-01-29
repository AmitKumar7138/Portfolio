import "./contacts.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contacts = () => {
    const ref = useRef();
    const fromRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSucess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zjrdomn', 'template_taxkuuk', fromRef.current, '22Zklmo0DvO5UEKtQ')
            .then((result) => {
                setSucess(true)
            }, (error) => {
                setError(true)
            });
    };


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
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div className="contacts" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="text-container" variants={variants}>
                <motion.h1 variants={variants}>Let's work together.</motion.h1>
                <motion.div className="item" variants={variants}><h2>Mail</h2>
                    <span>amitprataprana41@gmail.com</span></motion.div>
                <motion.div className="item" variants={variants}><h2>Address</h2>
                    <span>3800 SW 34th Street, Gainesvill, FL</span></motion.div>
                <motion.div className="item" variants={variants}> <h2>Phone</h2>
                    <span>+1(352)-709-6601</span></motion.div>
            </motion.div>

            <div className="form-container">

                <motion.div className="phone-svg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    <img src="./phone.svg" alt="" height="450" width="450" />
                </motion.div>

                <motion.form ref={fromRef} onSubmit={sendEmail} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
                    <input type="text" required placeholder="Name" name="from_name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows="10" placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div >
    );
};

export default Contacts