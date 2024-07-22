import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h1>
            <div className="flex flex-col items-center px-4 md:px-12 lg:px-24">
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex w-full max-w-4xl flex-wrap justify-center lg:justify-between'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className='flex justify-center w-full lg:w-1/4 mb-6 lg:mb-0'>
                            <img src={project.image} width={200} height={150} alt={project.title} className='rounded' />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4">

                            <h6 className='mb-2 font-semibold'>
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                                        {project.title}
                                    </a>
                                ) : (
                                    project.title
                                )}
                            </h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;





