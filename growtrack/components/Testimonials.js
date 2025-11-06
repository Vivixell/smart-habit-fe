"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I used to miss workouts all the time. Now GrowTrack keeps me accountable — I haven't skipped a day in 3 weeks.",
      author: "Ujunwa Princess Onyekaba",
      role: "Software Tester",
      picture: "/Princess.jpg"
    },
    {
      id: 2,
      text: "Balancing classes and work was overwhelming. The reminders keep me consistent, and I finally built a study routine that sticks.",
      author: "Betelhem Sintayehu",
      role: "Frontend Developer",
      picture: "/beti_web.jpg"
    },
    {
      id: 3,
      text: "I started small just writing 10 minutes a day. Now, its a habit I dont even think about missing.",
      author: "Soliyana Yalewdeg",
      role: "Frontend Developer",
      picture: "/S_photo.jpg"
    },
    {
      id: 4,
      text: "I used to miss workouts all the time. Now GrowTrack keeps me accountable — I haven't skipped a day in 3 weeks.",
      author: "MitchelleM",
      role: "Frontend Developer",
      picture: "/mitchellee.jpg"
    },
    {
      id: 5,
      text: "I started small just writing 10 minutes a day. Now, its a habit I dont even think about missing.",
      author: "Ginikanwa Soludo-Okoli",
      role: "Mobile App Developer",
      picture: "/Ginnika.jpg"
    },
    {
      id: 6,
      text: "I started small just writing 10 minutes a day. Now, its a habit I dont even think about missing.",
      author: "Pelumi Olusanmi",
      role: "UI/UX Designer",
      picture: "/Paulemi.jpg"
    },
    {
      id: 7,
      text: "I started small just writing 10 minutes a day. Now, its a habit I dont even think about missing.",
      author: "Tibenabui Reuben",
      role: "Product Manager",
      picture: "/Tibena.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Get orbit avatars based on current index (excluding current testimonial)
  const getOrbitAvatars = () => {
    const orbits = [];
    const orbitPositions = [0, 60, 120, 180, 240, 300];
    
    for (let i = 0; i < 6; i++) {
      const testimonialIndex = (currentIndex + i + 1) % testimonials.length;
      orbits.push({
        picture: testimonials[testimonialIndex].picture,
        position: orbitPositions[i],
        alt: `avatar-${i + 1}`
      });
    }
    
    return orbits;
  };

  const orbitAvatars = getOrbitAvatars();

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24" style={{ backgroundColor: '#EBF3FE' }}>
      <style>{`
        /* Orbit positioning - NO transitions */
        .avatar-orbit-0 { transform: rotate(0deg) translateX(100px) translateY(10px); }
        .avatar-orbit-60 { transform: rotate(60deg) translateX(100px); }
        .avatar-orbit-120 { transform: rotate(120deg) translateX(100px); }
        .avatar-orbit-180 { transform: rotate(180deg) translateX(100px); }
        .avatar-orbit-240 { transform: rotate(240deg) translateX(100px); }
        .avatar-orbit-300 { transform: rotate(300deg) translateX(100px) translateY(0px); }
        
        /* Extra small screens - ensure proper spacing */
        @media (max-width: 320px) {
          .testimonial-card {
            height: 240px !important;
          }
          .testimonial-content {
            padding-bottom: 24px !important;
          }
          .testimonial-author {
            bottom: 8px !important;
          }
        }
        
        /* Very small screens - additional spacing */
        @media (max-width: 280px) {
          .testimonial-card {
            height: 260px !important;
          }
          .testimonial-content {
            padding-bottom: 28px !important;
          }
          .testimonial-author {
            bottom: 10px !important;
          }
        }
        
        /* Extra small screens - less than 320px */
        @media (max-width: 319px) {
          .testimonial-card {
            height: 250px !important;
          }
          .testimonial-content {
            padding-bottom: 26px !important;
          }
          .testimonial-author {
            bottom: 9px !important;
          }
        }
        
        /* Screens 320px and above */
        @media (min-width: 320px) {
          .testimonial-card {
            height: 240px !important;
          }
          .testimonial-content {
            padding-bottom: 24px !important;
          }
          .testimonial-author {
            bottom: 8px !important;
          }
        }
        
        @media (min-width: 640px) {
          .avatar-orbit-0 { transform: rotate(0deg) translateX(120px); }
          .avatar-orbit-60 { transform: rotate(60deg) translateX(120px); }
          .avatar-orbit-120 { transform: rotate(120deg) translateX(120px); }
          .avatar-orbit-180 { transform: rotate(180deg) translateX(120px); }
          .avatar-orbit-240 { transform: rotate(240deg) translateX(120px); }
          .avatar-orbit-300 { transform: rotate(300deg) translateX(120px) translateY(0px); }
        }
        
        /* Large phones / small tablets - 641px to 768px */
        @media (min-width: 641px) and (max-width: 768px) {
          .testimonial-card {
            height: 280px !important;
          }
          .testimonial-content {
            padding-bottom: 30px !important;
          }
          .testimonial-author {
            bottom: 12px !important;
          }
        }
        
        @media (min-width: 768px) {
          .avatar-orbit-0 { transform: rotate(0deg) translateX(140px); }
          .avatar-orbit-60 { transform: rotate(60deg) translateX(140px); }
          .avatar-orbit-120 { transform: rotate(120deg) translateX(140px); }
          .avatar-orbit-180 { transform: rotate(180deg) translateX(140px); }
          .avatar-orbit-240 { transform: rotate(240deg) translateX(140px); }
          .avatar-orbit-300 { transform: rotate(300deg) translateX(140px) translateY(0px); }
        }
        
        /* Large screens - 769px to 1024px */
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonial-card {
            height: 300px !important;
          }
          .testimonial-content {
            padding-bottom: 32px !important;
          }
          .testimonial-author {
            bottom: 14px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .avatar-orbit-0 { transform: rotate(0deg) translateX(170px) translateY(10px); }
          .avatar-orbit-60 { transform: rotate(60deg) translateX(170px); }
          .avatar-orbit-120 { transform: rotate(120deg) translateX(170px); }
          .avatar-orbit-180 { transform: rotate(180deg) translateX(170px); }
          .avatar-orbit-240 { transform: rotate(240deg) translateX(170px); }
          .avatar-orbit-300 { transform: rotate(300deg) translateX(170px) translateY(0px); }
        }
        
        /* Extra large screens - 1025px and above */
        @media (min-width: 1025px) {
          .testimonial-card {
            height: 320px !important;
          }
          .testimonial-content {
            padding-bottom: 36px !important;
          }
          .testimonial-author {
            bottom: 16px !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif'}}>
       
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-[34px] leading-none tracking-normal text-center mb-4">
            Testimonials
          </h2>
          <div className="w-[100px] h-[8px] bg-blue-600 opacity-100 rounded-[8px] mx-auto" style={{ backgroundColor: '#1D4ED8'}}></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-around">
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] mx-auto">
            {/* Outer dotted circle */}
            <div className="absolute inset-3 sm:inset-4 lg:inset-5 border-2 border-dotted rounded-full" style={{ borderColor: '#1D4ED8' }}></div>
            
            {/* Blue background between dotted lines */}
            <div className="absolute inset-3 sm:inset-4 lg:inset-5 rounded-full" 
                 style={{
                   background: '#B9C8F3',
                   mask: 'radial-gradient(circle, transparent 68%, black 70%, black 82%, transparent 80%)',
                   WebkitMask: 'radial-gradient(circle, transparent 68%, black 70%, black 85%, transparent 80%)'
                 }}>
            </div>
            
            {/* Inner dotted circle */}
            <div className="absolute inset-4 sm:inset-5 lg:inset-7 border-2 border-dotted rounded-full" style={{ borderColor: '#1D4ED8' }}></div>

            {/* Central user picture - Active/Current */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-full overflow-hidden shadow-lg relative">
                <Image 
                  key={`center-${currentIndex}`}
                  src={currentTestimonial.picture} 
                  alt="Central user picture" 
                  fill
                  sizes="(max-width: 1024px) 192px, 240px"
                  className="object-cover rounded-full"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

           
            <div className="absolute inset-0 flex items-center justify-center">
              {orbitAvatars.map((avatar, index) => (
                <div key={`orbit-${currentIndex}-${index}`} className={`absolute avatar-orbit-${avatar.position}`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden relative" 
                       style={{ transform: `rotate(-${avatar.position}deg)` }}>
                    <Image 
                      src={avatar.picture} 
                      alt={avatar.alt} 
                      fill
                      sizes="48px"
                      className="object-cover" 
                      style={{ display: 'block' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full px-8 sm:px-12 md:px-16 lg:px-0">
            {/* Left Arrow*/}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity hover:opacity-70 sm:left-2 md:left-6 lg:absolute lg:-left-16 xl:-left-20"
            >
              <Image 
                src="/backward-arrow.svg" 
                alt="Previous testimonial"
                width={32}
                height={32}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
            </button>

            {/* main card container */}
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[460px]">
              <div className="absolute -top-2 -right-2 sm:-top-8 md:-top-10 lg:-top-20 lg:right-0 z-10 hidden lg:block">
                <Image 
                  src='/logo.png' 
                  alt='logo' 
                  width={80}
                  height={80}
                  className="w-[40px] h-[40px] sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-20 lg:h-20"
                />
              </div>
              
              <div className="relative">
                <div className="testimonial-card absolute top-4 sm:top-6 left-0 bg-white rounded-[20px] shadow-sm border-b-[0.5px] border-gray-100 opacity-100 w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[312px]"></div>
                <div className="testimonial-card absolute top-2 sm:top-3 left-0 bg-white rounded-[20px] shadow-sm border-b-[0.5px] border-gray-100 opacity-100 w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[312px]"></div>
                <div className="testimonial-card absolute top-0 left-0 bg-white rounded-[20px] shadow-sm border-b-[0.5px] border-gray-100 opacity-100 w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[312px]"></div>
                
             
                <div className="testimonial-card relative bg-white rounded-[20px] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg border-b-[0.5px] border-gray-100 opacity-100 w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[312px]">
                  {/* Content area with bottom padding for author section */}
                  <div className="testimonial-content h-full pb-24 sm:pb-24 md:pb-28 lg:pb-24 xl:pb-28">
                    <Image 
                      src="/Quotation.svg" 
                      alt="Quotation marks" 
                      width={48}
                      height={64}
                      className="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mb-2 sm:mb-3 md:mb-4"
                    />

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4 lg:mb-3" style={{ 
                      fontWeight: 400,
                      fontStyle: 'Regular'
                    }}>
                      {currentTestimonial.text}
                    </p>
                  </div>

                 
                  <div className="testimonial-author absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-4 xl:bottom-4 left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10 right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-blue-100 mr-2 sm:mr-3 md:mr-4 relative">
                        <Image 
                          src={currentTestimonial.picture} 
                          alt={currentTestimonial.author} 
                          fill
                          sizes="48px"
                          className="object-cover rounded-full"
                          style={{ display: 'block' }}
                        />
                      </div>
                      <div>
                        <h4 className="text-gray-800 text-xs sm:text-sm md:text-base" style={{fontSize: '16px'}}>{currentTestimonial.author}</h4>
                        <p className="text-gray-500 text-xs sm:text-sm" style={{fontSize: '12px'}}>- {currentTestimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

       
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity hover:opacity-70 sm:right-2 md:right-6 lg:absolute lg:-right-16 xl:-right-20"
            >
              <Image 
                src="/forward-arrow.svg" 
                alt="Next testimonial"
                width={32}
                height={32}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
