import React from 'react'
import {Project} from '@/app/types/project'
import { FaGithub } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"
function Card({data}:{data:Project}) {
    return (

        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500 transition duration-500 active:scale-95">
            <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-xl p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {data.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {data.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                    {data.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs  border border-black dark:border-white font-medium rounded">{tech}</span>
                    
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                    <a href={data.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 text-xs   bg-black text-white rounded dark:text-black dark:bg-white hover:bg-gray-700 transition">
                        <FaGithub size={14}/>GitHub
                    </a>
                    <a href={data.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1 text-xs bg-black text-white rounded dark:text-black dark:bg-white hover:bg-gray-700 transition">
                        <CiGlobe size={14}/>Live Demo
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Card
