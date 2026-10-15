import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "motion/react"

export default function Technologies() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}

            className=" border-b border-neutral-800 pb-24">
            <h2 className=" my-20 text-center text-4xl"> Technologies</h2>
            <div className=" flex flex-wrap items-center justify-center gap-4 ">
                <motion.div
                    animate={{ y: [20, -20, 20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className=" text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className=" text-7xl " />
                </motion.div>
                <motion.div
                    animate={{ y: [20, -20, 20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className=" text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className=" text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    animate={{ y: [20, -20, 20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className=" text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{
                        repeat: Infinity, duration: .6, ease: "linear",
                    }}
                    className=" rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className=" text-7xl text-sky-700" />
                </motion.div>
            </div>
        </motion.div>
    )
}
