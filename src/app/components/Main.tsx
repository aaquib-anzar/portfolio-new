import React from 'react'
import Card from './ui/card'
import { projects } from "../data/projects"

const techStack = ["React", "Redux", "Node.js", "Express.js", "Javascript", "Python", "MySQL", "MongoDB", "TailwindCSS", "C++"]
function Main() {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 mb-10 text-center">
                Proof of Work
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (<Card key={index} data={project} />))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 mb-10 text-center">
                Skills
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="text-sm sm:text-base px-4 py-1 bg-black text-white border border-white dark:border-black  dark:text-black dark:bg-white font-medium rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default Main
