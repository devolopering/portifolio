"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1  sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-400'>
              Hello,   I'm   {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ga'yrat",
                1000,
                'Frontend Developer',
                1000,
                'React Developer',
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] mb-6 lg:text-xl text-base sm:text-lg mr-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe tenetur!
          </p>
          <div>
            <button className='w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4'>
              Hire Me
            </button>
            <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white px-1 py-1 rounded-full mt-3 lg:mt-0'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
              src="/images/dev-img-3.png" 
              alt='hero img'
              height={400}
              width={400}
              className='absolute object-cover object-center w-full h-full rounded-full' 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
