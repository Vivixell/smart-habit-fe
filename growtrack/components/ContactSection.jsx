"use client";

import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await fetch(
        "https://smart-habit-be.onrender.com/contacts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error.message || "An error occurred while sending your message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-16 `}>
      {/* Section Header without background */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-[34px] font-bold text-gray-900"
          >
            Contact Us
          </h2>
          <div className="w-[100px] h-[6px] bg-blue-500 mx-auto mt-4 rounded-[8px]"></div>
        </div>
      </div>

      {/* Content with partial sky blue background */}
      <div className="bg-sky-50 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2
              id="contact-subheading"
              className="text-[24px] md:text-3xl font-bold text-gray-800 mb-6 px-6 sm:px-10 md:px-14"
            >
              We would love to hear from you
            </h2>

            {/* Status Message */}
            {submitStatus.success !== null && (
              <div
                className={`mx-6 sm:mx-10 md:mx-14 mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                data-testid="status-message"
              >
                {submitStatus.message}
              </div>
            )}

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6 px-6 sm:px-10 md:px-14"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[14px] font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  data-testid="name-input"
                />
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  data-testid="email-input"
                />
              </div>
              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[14px] font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject of your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  data-testid="subject-input"
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[14px] font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  data-testid="message-input"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                id="submit-button"
                disabled={isSubmitting}
                className="w-54 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-4 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-md"
                data-testid="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-[14px]" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Social Media Section */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <p id="social-heading" className="text-gray-600">
                  Follow us on:
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com"
                    id="instagram-link"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                    aria-label="Instagram"
                    data-testid="instagram-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    id="facebook-link"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label="Facebook"
                    data-testid="facebook-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    id="twitter-link"
                    className="text-dark hover:text-blue-500 transition-colors"
                    aria-label="Twitter"
                    data-testid="twitter-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    id="linkedin-link"
                    className="text-blue-700 hover:text-blue-800 transition-colors"
                    aria-label="LinkedIn"
                    data-testid="linkedin-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
