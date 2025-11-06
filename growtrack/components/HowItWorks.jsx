import { FaPencilAlt, FaCubes, FaChartLine } from "react-icons/fa";
import React from "react";
import { MdEdit } from "react-icons/md";

const DashedChevron = ({
  direction = "down",
  size = 260,
  color = "#4A71E0",
}) => {
  const points = direction === "up" ? "1,7 12,1 23,7" : "1,1 12,7 23,1";
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 24 12"
      fill="none"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="0.4 0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chev-svg"
    >
      <polyline points={points} />
    </svg>
  );
};

export default function HowItWorks() {
  return (
    <section
      className="my-[50px] bg-white py-[70px] overflow-hidden"
      style={{ paddingLeft: "60px", paddingRight: "60px",fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="flex flex-col items-center how-it-works-title">
        <p
          className="text-[34px] font-[700] text-[#242629] how-it-works-text"
        >
          How it Works
        </p>
        <div className="w-[100px] h-[8px] bg-[#1D4ED8] rounded-[8px] mt-[5px]" />
      </div>

      <p className="big-number hide-on-mobile font-[700] text-[64px] text-[#B9C8F3] mb-[-20px]">
        1
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center gap-[40px] relative">
          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2 ">
            1
          </p>

          <div className="flex flex-col items-center gap-[25px]">
            <div
              className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div
                className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] hover:bg-[#dce9fc] transition-colors duration-300 ease-in-out"
              >
                <MdEdit className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] hover:text-[#1D4ED8] transition-colors duration-300 ease-in-out" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">
              Define Your Goal
            </p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              Choose what you want to improve — health, productivity, or
              personal growth
            </p>
          </div>
        </div>

        <div className="h-[40px] mid-chevron hide-on-mobile hover:scale-110 transition-transform duration-300 ease-in-out">
          <DashedChevron direction="down" size={260} />
        </div>

        <div className="flex flex-col items-center gap-[40px] relative">
          <p className="big-number-step hide-on-mobile hidden lg:block font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-60px] -left-[60px]">
            2
          </p>

          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2">
            2
          </p>

          <div className="flex flex-col items-center gap-[25px]">
            <div
              className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div
                className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] hover:bg-[#dce9fc] transition-colors duration-300 ease-in-out"
              >
                <FaCubes className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] hover:text-[#1D4ED8] transition-colors duration-300 ease-in-out" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">
              Build your routine
            </p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              The app keeps you accountable with reminders and progress feedback
            </p>
          </div>
        </div>

        <div className="h-[390px] chevron-up mid-chevron hide-on-mobile hover:scale-110 transition-transform duration-300 ease-in-out">
          <DashedChevron direction="up" size={260} />
        </div>

        <div className="flex flex-col items-center gap-[40px] relative">
          <p className="big-number-step hide-on-mobile hidden lg:block font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-170px] -left-[50px]">
            3
          </p>

          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2">
            3
          </p>

          <div className="flex flex-col items-center gap-[25px]">
            <div
              className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div
                className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] hover:bg-[#dce9fc] transition-colors duration-300 ease-in-out"
              >
                <FaChartLine className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] hover:text-[#1D4ED8] transition-colors duration-300 ease-in-out" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">
              Track progress
            </p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              Watch your streaks grow and celebrate rewards along the way.
            </p>
          </div>
        </div>
      </div>

      <style>{`
  /* show/hide helpers using the 1020px threshold you wanted */
  .show-on-mobile { display: none; }
  .hide-on-mobile { display: block; }
 
  @media (max-width: 1024px) {
    .show-on-mobile { display: block !important; }   /* show numbers on stacked mode */
    .hide-on-mobile { display: none !important; }    /* hide big/row-only numbers & chevrons */
 
    .mobile-number {
      top: -80px; /* spacing between number and circle */
    }
 
    /* space between stacked steps only */
    .flex-col.lg\\:flex-row > div {
      margin-bottom: 8rem; /* space between steps */
    }
 
    .flex-col.lg\\:flex-row > div:last-child {
      margin-bottom: 0; /* no extra space after last step */
    }
 
    .how-it-works-title {
      margin-bottom: 8rem; /* space between title and first step */
    }
  }
/* Smooth dashed color change on hover */
.mid-chevron svg.chev-svg {
  transition: stroke 0.3s ease-in-out, transform 0.3s ease-in-out;
 
}
.chevron-up{
height:350px;
}
.mid-chevron:hover svg.chev-svg {
  stroke: #1D4ED8; /* darker blue on hover */
  transform: scale(1.1);
}

/* Outer circle hover glow */
.mid-circle:hover {
  box-shadow: 0 0 15px rgba(29, 78, 216, 0.3);
}

/* Inner circle hover tint */
.mid-inner:hover {
  background-color: #dce9fc;
}

/* Icon hover */
.mid-inner svg:hover {
  color: #1D4ED8;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}


  /* mid-range scaling: 1020px - 1150px */
  @media (min-width: 1020px) and (max-width: 1150px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 180px !important; height: 180px !important; }
    /* slightly smaller inner circles */
    .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 160px !important; height: 80px !important; }
    
  }



  @media (min-width: 1048px) and (max-width: 1270px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 200px !important; height: 200px !important; }
    /* slightly smaller inner circles */
    // .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    // .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    // .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 160px !important; height: 80px !important; }
  }


   @media (min-width: 1265px) and (max-width: 1322px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 220px !important; height: 220px !important; }
    /* slightly smaller inner circles */
    // .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    // .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    // .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 200px !important; height: 100px !important; }
  }
@media (min-width: 1322px)  {
.mid-chevron:hover svg.chev-svg {
  stroke: #1D4ED8; /* darker blue on hover */
  transform: scale(1);
}
  .chevron-up{
height:390px;
}
}
  @media (max-width: 380px) {
      .how-it-works-text {
        font-size: 24px;   /* smaller font */
      }
      .how-it-works-bar {
        width: 70px;       /* narrower underline */
        height: 6px;       /* slightly thinner bar */
      }
`}</style>
    </section>
  );
}
