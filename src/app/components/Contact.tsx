"use client"
import React, { useState } from 'react'
import { toast } from "react-toastify"

function Contact() {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const handleSubmit = (async (e: React.FormEvent) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !subject) {
            toast.error("Missing fields")
            return
        }

        const isValidEmail = emailRegex.test(email)
        if (!isValidEmail) {
            toast.error("Incorrect Email")
            return
        }

        try {
            const res = await fetch("/api/sendemail", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, subject })
            })
            if (res.ok) {
                toast.success("Email sent successfully")
                setEmail("")
                setSubject("")
            } else {
                toast.error("Something went wrong");

            }
        } catch (err) {
            console.error("Network error or server not responding", err)
            toast.error("Network error or server not responding");
        }
    })
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col items-center text-center mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Let&apos;s Connect
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                    Have a Question? Reach out via Email!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                        Your Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject" className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                        Subject
                    </label>
                    <textarea
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter your message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-lg transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>


    )
}

export default Contact
