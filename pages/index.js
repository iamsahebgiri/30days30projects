import React, { useEffect } from 'react';
import data from './../data.json';
import Shot from '../components/Shot';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function IndexPage() {
  return (
    <>
      <div className='main-container min-h-screen'>
        <Header />
        <Hero />
        <div className='container mx-auto px-4 py-32 grid  gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.map((project) => (
            <Shot key={project.day} project={project} />
          ))}
          {/* <Image src='/img/day1.png' width='1280' height='720' /> */}
        </div>
      </div>
    </>
  );
}
