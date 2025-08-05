import React from 'react'
import { Project } from '@/app/types/project'
import { FaGithub } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"
import { ShineBorder } from '@/components/magicui/shine-border'
import { MagicCard } from '@/components/magicui/magic-card'
function Card({ data }: { data: Project }) {
    return (
        <MagicCard className="w-full p-6 rounded-xl border dark:border-gray-700 shadow-md">
            <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                    {data.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {data.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {data.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="text-md px-3 py-1 border hover:text-white hover:bg-black border-black dark:border-white dark:hover:text-black dark:hover:bg-white rounded font-bold"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 pt-2">
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-lg bg-black text-white rounded dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                    >
                        <FaGithub size={14} />
                        GitHub
                    </a>
                    <a
                        href={data.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-lg bg-black text-white rounded dark:text-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                    >
                        <CiGlobe size={14} />
                        Live Demo
                    </a>
                </div>
            </div>
        </MagicCard>

    )
}

export default Card
