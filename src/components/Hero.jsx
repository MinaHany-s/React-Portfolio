import profilePic from '../assets/MinaHany.jpg'
import { motion } from 'motion/react'
export default function Hero() {
    return (
        <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
            <div className=" flex flex-wrap">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                    className=" w-full lg:w-1/2">
                    <div className=" flex flex-col items-center lg:items-start">
                        <h1 className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl  ">Mina hany</h1>
                        <span className=" bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full stack Web Developer</span>
                        <p className=" my-2 max-w-xl py-6 font-light">Passionate Backend Developer focused on building secure, scalable, and efficient server-side applications using Node.js, Express.js, and databases. Experienced in developing RESTful APIs, implementing authentication and authorization, and designing reliable backend systems.</p>
                    </div>
                </motion.div>
                <div className='w-full lg:w-1/2 lg:p-8 '>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: 'ease', duration: 1 }}
                        className=' flex justify-center'>
                        <img className=' w-110' src={profilePic} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
