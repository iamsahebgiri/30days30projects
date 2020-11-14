import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className='mt-12 text-center'>
      <h1 className='heading font-heading gradient-shift font-bold text-4xl tracking-tight sm:text-4xl md:text-5xl xl:text-5xl leading-tight'>
        30 Days 30 Projects
      </h1>
      <div className='w-full mt-6 px-4 flex items-center justify-center'>
        <p className='leading-relaxed max-w-md text-gray-600'>
          Learn to code by building projects. Share your progress with the
          world. Send us ideas by creating github issues.
        </p>
      </div>
      <div className='flex mt-10 justify-center'>
        <Link href='/explore'>
          <a className='rounded-md px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-primary-1 hover:bg-primary-2 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md'>
            Watch Videos
          </a>
        </Link>
        <a
          href='#contribute'
          className='ml-4 rounded-md px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md'
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
