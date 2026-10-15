import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { motion } from "motion/react"
const NavBar = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: 20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: .6 }}

            className="mt-8 mb-20 flex items-center justify-between p-6">

            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                    repeat: Infinity, duration: 1, ease: "linear",
                }}

                className=" flex shrink-0 items-center">
                <img className=' mx-2 w-10' src={logo} alt="" />
            </motion.div>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className=' flex items-center justify-center gap-4 text-2xl '>
                {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map(
                    (Icon, index) => (
                        <motion.span key={index} variants={itemVariants}>
                            <Icon />
                        </motion.span>
                    )
                )}
            </motion.div>
        </motion.nav>
    )
}

export default NavBar
