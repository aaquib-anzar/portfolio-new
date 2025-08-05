import React from 'react'
import Card from './ui/card'
import { projects } from "../data/projects"
import { MagicCard } from '@/components/magicui/magic-card';

const techStack = ["React", "Redux", "Node.js", "Express.js", "Javascript", "Python", "MySQL", "MongoDB", "TailwindCSS", "C++"]

function Main() {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 mb-10 text-center">
                Proof of Work
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                {projects.map((project, index) => (
                    <Card key={index} data={project} />
                ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 mb-10 text-center">
                Skills
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 text-lg bg-black text-white rounded dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition font-bold"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default Main
