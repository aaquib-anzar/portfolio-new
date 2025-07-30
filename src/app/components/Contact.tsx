"use client"
import React, { useState } from 'react'

function Contact() {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const handleSubmit = (async (e: React.FormEvent) => {
        e.preventDefault()
        setSuccess("")
        setError("")

        try {
            const res = await fetch("/api/sendemail", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, subject })
            })
            const data = await res.json()
            if (res.ok) {
                setSuccess(data.message)
                setEmail("")
                setSubject("")
            } else {
                setError(data.message || "Something went wrong");

            }
        } catch (err) {
            setError("Network error or server not responding");
        }
    })
    return (
        <div className="flex flex-col items-center justify-center px-4">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 mb-4 text-center">
                Let&apos;s Connect
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-1">Have a Question?</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">Reach out via Email!</p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="subject" className="mb-1 text-sm font-medium">
                        Subject
                    </label>
                    <textarea
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter your subject"
                        rows={4}
                        className="px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
                {success && <p className="text-green-500 font-medium text-center">{success}</p>}
                {error && <p className="text-red-500 font-medium text-center">{error}</p>}
            </form>
        </div>

    )
}

export default Contact
