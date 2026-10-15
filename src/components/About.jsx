import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants/index'
import { motion } from 'motion/react'
export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' border-b  border-neutral-900 pb-4'>
            <h2 className=' my-20 text-center text-4xl'>About
                <span className=" text-neutral-500"> me </span> </h2>
            <div className=" flex flex-wrap">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}

                    className=" w-full lg:w-1/2 lg:p-8">
                    <div className=" flex items-center justify-center">
                        <img src={aboutImg} alt="" className=' rounded-2xl' />
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}

                    className='w-full lg:w-1/2'>
                    <div className=' flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'> {ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    )
}
