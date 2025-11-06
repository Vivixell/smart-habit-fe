"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribeBtn = async() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Please Enter your Email");
      return;
    } 
    else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsSubscribe(false);
       return;
    } 
    try {
      const res = await fetch("https://smart-habit-be.onrender.com/newsletter/subscribe",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      if(res.ok){
        setIsSubscribe(true);
        setError("");
        setEmail("");  
      }
      else{
        const data = await res.json();
        setError(data.message || "This email is already subscribed");
        setIsSubscribe(false);
      }
    }
    catch(err){
      setError("Network error. Please try again later.");
      setIsSubscribe(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkGroups = [
    {
      title: "Links",
      items: [
        // { name: "Nav", id: "navbar" },
        // { name: "Hero", id: "hero" },
        { name: "Features", id: "features" },
        { name: "How It Works", id: "how-it-works" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact Us", id: "contact" },
      ],
    },
    {
      title: "Socials",
      items: [
        { name: "Instagram", url: "https://www.instagram.com" },
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "LinkedIn", url: "https://www.linkedin.com" },
        { name: "Twitter(X)", url: "https://twitter.com" },
      ],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <>
      <section
        className="
          bg-[#EBF3FE] 
          flex flex-col items-center text-center 
          py-20 px-6
          md:grid md:grid-cols-2 md:text-left 
          lg:flex lg:flex-row lg:justify-around lg:items-start
          mt-[50px]
        "
        style={{ fontFamily: 'Montserrat, sans-serif'}}
      >
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <img src="../logo.png" alt="" className="w-10 h-10" />
            <p className="text-[20px] font-[700] text-[#242629]">GrowTrack</p>
          </div>
          <p className="font-[500] text-[20px] text-[#242629]">
            Helping you build <br /> habits that last
          </p>
        </div>


        {/* Footer Link Groups */}
        {linkGroups.map((group) => (

          <div key={group.title}>
            <p className="text-[#242629] text-[20px] font-[700] mb-[10px]">
              {group.title}
            </p>
            <ul className="flex flex-col gap-[12px] font-[500] text-[14px] text-[#242629]">
              {group.items.map((item) =>
                typeof item === "string" ? (
                  <li
                    key={item}
                    className="hover:text-[#1D4ED8] cursor-pointer"
                  >
                    {item}
                  </li>
                ) : item.id ? (
                  <li
                    key={item.name}
                    className="hover:text-[#1D4ED8] cursor-pointer"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </li>
                ) : (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1D4ED8]"
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        {/* Subscribe Section */}
        <div className="flex flex-col gap-4">
          <p className="font-[700] text-[20px] text-[#242629]">
            Subscribe to our Newsletter
          </p>

          <div
            className="
              border border-[#153799] rounded-[20px]
              flex items-center bg-white 
              w-full max-w-[323px] min-w-[260px] h-[48px] 
              mx-auto md:mx-0 px-2 sm:px-3
            "
          >
            <input
              type="email"
              placeholder="Enter your email address here"
              id="emailnewsletter"
              onChange={(e) => setEmail(e.target.value)}
              className="
                flex-1 text-sm sm:text-[12px] font-[400] text-[#242629] 
                placeholder:text-[#242629] 
                focus:outline-none 
                pr-2
              "
              required
            />
            <button
              className="
                flex-shrink-0
                flex items-center justify-center 
                bg-[#1D4ED8] rounded-full cursor-pointer 
                hover:bg-[#153799] transition-colors 
                w-9 h-9 sm:w-10 sm:h-10
              "
              onClick={handleSubscribeBtn}
            >
              <FaArrowRight className="text-[#FAFAFA] text-lg sm:text-[20px]" />
            </button>
          </div>

          {isSubscribe && !error && (
            <p className="font-[400] text-[16px] text-[#242629] sm:text-[18px] md:text-[20px]">
              You're in! Thanks for subscribing
            </p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
      </section>

      <div className="h-[76px] bg-[#153799] flex items-center justify-center font-[400] text-[14px] text-[#FAFAFA] text-center px-4">
        &copy; 2025 Smart Habit Tracker. All rights reserved.
      </div>
    </>
  );
}
