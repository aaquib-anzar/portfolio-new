import React from 'react'

function Footer() {
    return (
        <div className="w-full border-t border-gray-300 dark:border-gray-700 mt-10 py-6 bg-white dark:bg-neutral-900">
            <h1 className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4">
                &copy; {new Date().getFullYear()} Developed and Designed by{' '}
                <a
                    href="https://github.com/aaquib-anzar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                    Aaquib Anzar
                </a>
            </h1>
        </div>

    )
}

export default Footer
