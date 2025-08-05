import React from 'react'
import Image from 'next/image'
import { RainbowButton } from "@/components/magicui/rainbow-button";

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
            <h1 className="text-4xl sm:text-3xl md:text-5xl text-center mt-5 font-bold">Hi, I&apos;m Aaquib Anzar</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-5 p-6 max-w-3xl mx-auto text-center">
                I break stuff, fix it better, and learn on the fly. Clean UI, fast logic, and creative code —
                that’s my thing.
                <br />
                Every bug teaches me something new, every project is a chance to push limits.
                <br />
                I build fast, learn faster, and always aim to make it better than before.
            </p>

            <RainbowButton asChild size="lg" className="text-xl px-6 py-3 rounded-xl">
                <a href="#contact" className="inline-block text-center">
                    Let&apos;s Connect
                </a>
            </RainbowButton>



        </div>
    )
}

export default Hero
