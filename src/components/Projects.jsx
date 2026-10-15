import { PROJECTS } from "../constants";
import { motion } from "motion/react";
export default function Projects() {
    return (
        <div className=" border-b border-neutral-900 pb-4">
            <h2 className=" my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((proj, idx) => (
                    <div key={idx} className=" mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .6, delay: idx * .2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full lg:w-1/4">
                            <img src={proj.image} alt="" width={150} height={150} className=" mb-6 rounded" />

                        </motion.div>
                        <motion.div
                         initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .6, delay: idx * .2 }}
                            viewport={{ once: true, amount: 0.3 }}
                         className=" w-full max-w-xl lg:w-3/4">
                            <h6 className=" mb-2 font-semibold   ">{proj.title}</h6>
                            <p className="mb-4 text-neutral-400">{proj.description}</p>
                            {proj.technologies.map((tech, idx) => (
                                <span key={idx} className=" mr-2 rounded bg-neutral-900 px-2 py1 text-sm font-medium text-purple-900 ">{tech}</span>
                            ))}
                        </motion.div>

                    </div>

                ))}
            </div>

        </div>
    )
}
