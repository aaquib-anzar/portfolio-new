import React from 'react'
import Image from 'next/image'




function Hero() {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>

            <Image
                src="/hero.jpeg"
                alt="description"
                width={600}
                height={400}
                className='h-32 w-32 items-center justify-center rounded-full object-cover'
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mt-5">Hi, I&apos;m Aaquib Anzar</h1>
            <p className='text-xl sm:text-2xl md:text-3xl mt-5 p-6 '>I break stuff, fix it better, and learn on the fly. Clean UI, fast logic, and creative code — that’s my thing.
                Every bug teaches me something new, every project is a chance to push limits. I build fast, learn faster, and always aim to make it better than before.</p>
            <a href="#contact" className="p-[3px] relative rounded-lg group overflow-hidden inline-block mt-5">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="relative px-8 py-2 bg-black rounded-[6px] text-white transition-colors duration-300 group-hover:bg-transparent">
                    Let&apos;s Connect
                </div>
            </a>


        </div>
    )
}

export default Hero
