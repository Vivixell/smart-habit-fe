"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Build ",
      titleBlue: "Better",
      titleRest: " Habits, One Day at a Time",
      description:
        "Stay consistent with smart reminders, streak tracking, and rewards designed to keep you motivated.",
      cta: "Download App",
      stats: "20k+ Users",
      image: "/Hero.jpg",
      showLogo: true,
      layout: "side-by-side",
    },
    {
      id: 2,
      title: "Turn Small ",
      titleBlue: "Actions",
      titleRest: " Into Big Wins.",
      description:
        "Stay consistent with habits that matter. Track progress, earn rewards, and see yourself grow every day.",
      cta: "Download App",
      image: "/Hand.png",
      showLogo: false,
      layout: "stacked",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // SVG components for the second slide - hidden on small screens
  const ClipPathGroup = () => (
    <svg
      width="198"
      height="198"
      viewBox="0 0 198 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block absolute bottom-80 right-45 w-32 h-32 lg:w-42 lg:h-42 z-0 opacity-80"
    >
      <mask
        id="mask0_2249_89065"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="198"
        height="198"
      >
        <path d="M198 0H0V198H198V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2249_89065)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 0H198V49.5V148.5L148.5 198V49.5H0L49.5 0ZM0 163.416V99H64.4163L0 163.416ZM99 198H35.4199L99 134.42V198Z"
          fill="#EBF3FE"
        />
      </g>
    </svg>
  );

  const Ellipse11 = () => (
    <svg
      width="1012"
      height="395"
      viewBox="0 0 1012 395"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block absolute top-75 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 lg:h-[465px] z-0 opacity-90"
    >
      <path
        d="M1012 506C1012 438.988 998.689 372.643 972.84 310.817C946.991 248.991 909.119 192.916 861.422 145.845C813.725 98.7751 757.153 61.6479 694.991 36.619C632.828 11.59 566.313 -0.842118 499.307 0.0442668C432.301 0.930652 366.138 15.1179 304.659 41.7824C243.181 68.447 187.611 107.058 141.176 155.373C94.7404 203.689 58.3647 260.746 34.1602 323.235C9.95567 385.723 -1.59556 452.396 0.177059 519.385L506 506L1012 506Z"
        fill="#EBF3FE"
      />
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden"
          >
            {/* Add SVG backgrounds for the second slide - only show on lg screens and above */}
            {slide.id === 2 && (
              <>
                <ClipPathGroup />
                <Ellipse11 />
              </>
            )}

            {slide.layout === "side-by-side" ? (
              // Side-by-side layout (first slide)
              <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mt-4 lg:mt-10">
                {/* Content */}
                <div className="space-y-3 lg:space-y-4 order-2 lg:order-1 lg:ml-12">
                  {/* Logo (desktop only) - Aligned with "Better" */}
                  {slide.showLogo && (
                    <div className="hidden lg:flex mb-2 lg:mb-3 ml-50">
                      <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                        <Image
                          src="/logo.png"
                          alt="GrowTrack Logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <h1 className="text-3xl lg:text-[56px] md:text-[38px] font-bold text-gray-700 text-center lg:text-left">
                    Build <span className="text-blue-600">Better</span>
                    <br />
                    Habits, One Day
                    <br />
                    at a Time
                  </h1>

                  <p className="text-[20px] text-gray-700 text-center lg:text-left max-w-md lg:max-w-none mx-auto lg:mx-0">
                    {slide.description}
                  </p>

                  {/* CTA + Avatars */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 justify-center lg:justify-start">
                    <a
                      href="#ready-to-build-better-habits"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 lg:px-8 rounded-xl transition-colors shadow-lg text-center"
                    >
                      {slide.cta}
                    </a>

                    {slide.stats && (
                      <div className="flex items-center justify-center lg:justify-start">
                        <div className="flex -space-x-2 mr-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white overflow-hidden"
                            >
                              <Image
                                src={`/user-${item}.jpg`}
                                alt="User"
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {slide.stats}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 w-full">
                  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-64 sm:h-80 md:h-96 lg:h-[36rem]">
                    <Image
                      src={slide.image}
                      alt="Habit Tracker App"
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Second slide - Stacked layout with single-line heading
              <div className="max-w-5xl mx-auto text-center mt-6 lg:mt-10">
                {/* Content with reduced spacing */}
                <div className="space-y-3 mb-6">
                  <h1 className="text-3xl lg:text-[48px] md:text-[38px] font-bold text-gray-700">
                    Turn Small <span className="text-blue-600">Actions</span>{" "}
                    Into Big Wins.
                  </h1>

                  <p className="text-[20px] text-gray-700 max-w-2xl mx-auto mt-2">
                    {slide.description}
                  </p>

                  {/* CTA Button with gap */}
                  <div className="mt-4">
                    <a
                      href="#ready-to-build-better-habits"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 lg:px-8 rounded-xl transition-colors shadow-lg text-center"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>

                {/* Hero Image with floating effect */}
                <div className="flex justify-center relative z-20">
                  <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
                    <Image
                      src={slide.image}
                      alt="Habit Tracker App"
                      fill
                      className="object-contain drop-shadow-2xl"
                      style={{
                        filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                      }}
                    />

                    {/* Optional: Add some decorative elements around the image */}
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-lg"></div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-lg"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
