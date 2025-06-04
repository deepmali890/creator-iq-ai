'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimonial = () => {
    return (
        <section className="relative isolate overflow-hidden mx-auto rounded-4xl my-20 max-w-[1400px]  bg-white/5 mt-20 backdrop-blur-md  px-6 sm:py-32 lg:px-8">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            {/* Skewed shadow layer */}
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                {/* Brand Logo */}
                <Image
                    className="mx-auto grayscale"
                    src="https://www.svgrepo.com/show/443576/brand-xmpp.svg"
                    alt="CreatorIQ Logo"
                    width={48}
                    height={48}
                />

                {/* Quote */}
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            <Link href="/" className="text-gray-900 justify-center space-y-6 font-bold text-2xl flex items-center gap-1">
                                <div className=" relative">
                                    Creator IQ AI <Image width={30} height={30} className=' absolute right-[-25px] top-[-20px]' src={'/ai.svg'}
                                    />
                                </div>


                            </Link> Has completely changed how I grow my brand. With AI tools that feel like magic, I now focus on what matters — creating. Everything else is automated and smart.”
                        </p>
                    </blockquote>

                    {/* Author */}
                    <figcaption className="mt-10">
                        {/* <Image
              className="mx-auto rounded-full object-cover"
              src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?auto=format&fit=crop&w=80&h=80"
              alt="Creator Profile"
              width={64}
              height={64}
            /> */}
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Dilip Mali</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600"> FullStack Developer </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Testimonial
