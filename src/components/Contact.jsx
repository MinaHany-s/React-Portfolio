import { CONTACT } from "../constants";
import { motion } from "motion/react";
export default function Contact() {
    return (
        <motion.div
        initial={{opacity:0 , y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{ease:"easeIn" , duration:.6}}
         className=' border-b border-neutral-900 pb-20 '>
            <h2 className="my-10 text-center text-4xl">Get in touch</h2>
            <div className="text-center tracking-tighter">
                <p className=" my-4">
                    {CONTACT.address}
                </p>
                <p className=" my-4">
                    {CONTACT.phoneNo}
                </p>
                <a href="#" className=" underline">{CONTACT.email}</a>
            </div>
        </motion.div>
    )
}
