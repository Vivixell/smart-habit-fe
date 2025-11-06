"use client";

import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <div className="min-h-screen py-8 md:py-16 px-4" style={{ backgroundColor: '#EBF3FE',fontFamily: 'Montserrat, sans-serif' }}>
      <div className="text-center mb-8 md:mb-12 h-[34px]">
       <h2 className="mb-4 font-bold text-[34px] leading-none tracking-normal text-center"> Features </h2>
<div className="w-[100px] h-[8px] bg-blue-600 opacity-100 rounded-[8px] mx-auto" style={{ backgroundColor: '#1D4ED8' }}></div>
</div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center">

          <div className="flex justify-center xl:justify-start order-1 xl:order-1">
            <Image
              src="/features-image.png"
              alt="GrowTrack app on smartphones"
              width={550}
              height={442}
              className="w-full max-w-[550px] h-[442px] object-contain"
              priority
            />

          </div>

          
          <div className="space-y-6 xl:space-y-8 order-1 xl:order-2">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
              <div className="bg-white shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out w-[285px] h-[280px] rounded-[20px] opacity-100 p-6">
                <div className="bg-blue-100 hover:bg-[#dce9fc] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto mt-4 transition-colors duration-300 ease-in-out" style={{ width: '60px', height: '60px', opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/edit.svg"
                    alt="Edit icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 transition-colors duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Simple Habit Creation
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Create new habits in seconds with an easy, clutter-free setup
                </p>
              </div>

              
              <div className="bg-white shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out w-[285px] h-[280px] rounded-[20px] opacity-100 p-6">
                <div className="bg-blue-100 hover:bg-[#dce9fc] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300 ease-in-out" style={{ width: '60px', height: '60px', opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/bell.svg"
                    alt="Bell icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 transition-colors duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Smart Reminders
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Never miss a habit — gentle nudges arrive exactly when you need them.
                </p>
              </div>

             
              <div className="bg-white shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out w-[285px] h-[280px] rounded-[20px] opacity-100 p-6">
                <div className="bg-blue-100 hover:bg-[#dce9fc] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300 ease-in-out" style={{ width: '60px', height: '60px', opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/analytics.svg"
                    alt="Analytics icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 transition-colors duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Visual Progress Tracking
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Charts, streaks, and stats that keep you engaged
                </p>
              </div>

             
              <div className="bg-white shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out w-[285px] h-[280px] rounded-[20px] opacity-100 p-6">
                <div className="bg-blue-100 hover:bg-[#dce9fc] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300 ease-in-out" style={{ width: '60px', height: '60px', opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/star.svg"
                    alt="Star icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 transition-colors duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Gamified Motivation
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Earn points, badges, and celebrate milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
