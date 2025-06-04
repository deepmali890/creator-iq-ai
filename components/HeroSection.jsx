'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {

    const imageRef = useRef(null)

    useEffect(()=>{

        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100; // Adjust this value as needed
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        // const scrollPosition = window.scrollY;
        // const scrollThreshold = 100; // Adjust this value as needed
        // if (scrollPosition > scrollThreshold) {
        //     imageElement.classList.add("scrolled");
        // }


    })
  return (
    <section className="w-full pt-36 md:pt-48 pb-16">
      <div className="text-center space-y-10 mx-auto px-4">
        {/* Title with gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-gradient-to-r from-gray-400 via-gray-500 to-gray-500 text-transparent bg-clip-text">
          Unlock New Opportunities with
          <br />
          AI-Powered Career Tools
        </h1>

        {/* Subtitle */}
        <p className="md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Turn your goals into action with personalized, AI-driven career insights.
          Discover the right paths, grow your skills, and stay ahead in today’s evolving job market.
        </p>

        {/* CTA */}
        <Link href="/dashboard">
          <Button size="lg" className="px-8 mb-6">
            Get Started
          </Button>
        </Link>

        {/* Hero Image */}
        <div className='hero-image-wrapper mt-5 md:mt-0'>
        <div ref={imageRef} className='hero-image'>
          <Image
            src="/banner.jpeg"
            width={1200}
            height={720}
            className="rounded-2xl shadow-2xl border mx-auto"
            alt="AI Career Illustration"
            priority
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
