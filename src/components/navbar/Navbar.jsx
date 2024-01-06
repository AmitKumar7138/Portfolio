import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Portfolio</motion.span>
                <div className="social">
                    <a href="https://github.com/AmitKumar7138/"><img src="/github.png" alt="" /></a>
                    <a href="https://www.instagram.com/amitprataprana/"><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/amit-kumar-7b72b9176/"><img src="/linkedin.png" alt="" /></a>
                    <a href="https://discord.com/channels/@me"><img src="/discord.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar