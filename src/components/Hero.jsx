import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/Azhar profile pic final.jpg"
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition:{duration: 0.5, delay:delay},
    },
});


const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
            <div className="flex flex-wrap">
                <div className="w-full  md:px-24 lg:px-0 lg:w-1/2 ">
                    <div className="flex flex-col  px-12">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className=' text-4xl font-thin tracking-tight  lg:mt-16  lg:text-5xl'>Mohammed Azhar Dongre</motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='  pt-6 bg-gradient-to-r from-pink-300 via-red-500 to-orange-900 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                 <div className="w-full md:justify-center lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center items-center ">
                        <motion.img 
                        initial={{x: 100, opacity:0 }}
                        animate={{ x:0, opacity:1}}
                        transition={{duration:1, delay: 1.2}}
                        className='rounded-2xl size-72 md:size-[470px] lg:size-96' src={profilePic} alt="Mohd Azhar"/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Hero
