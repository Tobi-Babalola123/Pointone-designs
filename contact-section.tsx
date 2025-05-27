"use client"

import type React from "react"
import emailjs from '@emailjs/browser';
import { MapPin, Menu, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "./use-scroll-animation"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { ref, isVisible } = useScrollAnimation(0.2)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

emailjs.send(
  'service_892r8lc',
  'template_17rhutr',
  {
    user_name: formData.name,
    user_email: formData.email,
    message: formData.message,
  },
  'PZr-nn48BM-uNPTJg'
)
.then((result) => {
  console.log('Email sent successfully:', result.text);
  alert('Message sent!');
})
.catch((error) => {
  console.error('Email sending error:', error);
  alert('Error sending message.');
});
  }


  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-600 relative overflow-hidden">
      {/* Background decorative elements - responsive */}
      <div className="absolute inset-0">
        <div
          className={`absolute right-4 lg:right-8 top-1/2 space-y-3 lg:space-y-4 transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`${i === 4 ? "w-3 h-3 lg:w-4 lg:h-4 border-2 border-white" : "w-2 h-2 lg:w-3 lg:h-3 bg-white"} rotate-45 hover:scale-125 transition-all duration-300`}
              style={{
                animationDelay: `${i * 200}ms`,
                animation: isVisible ? "pulse 2s infinite" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex justify-between items-center p-4 lg:p-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
      >
        <div className="text-purple-600 p-2 hover:scale-110 transition-transform duration-300">
          <MapPin size={20} className="lg:w-6 lg:h-6" />
        </div>
        <button className="text-purple-600 p-2 hover:rotate-90 transition-transform duration-300">
          <Menu size={20} className="lg:w-6 lg:h-6" />
        </button>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div
            className={`space-y-4 lg:space-y-6 mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-purple-600 leading-tight hover:scale-105 transition-transform duration-300">
              Let's collaborate!
            </h2>
            <p
              className={`text-gray-700 text-base lg:text-lg font-montserrat leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
            >
              Have an exciting project in mind? Let's discuss how we can bring your vision to life together.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
            {/* Name and Email Row - stacked on mobile */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Name Field */}
              <div
                className={`space-y-3 transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <label htmlFor="name" className="block text-left text-gray-600 text-sm font-medium font-montserrat">
                  Your Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-0 border-b-2 border-gray-400 focus:border-purple-600 outline-none py-3 text-gray-800 placeholder-gray-500 font-montserrat transition-all duration-300 group-hover:border-purple-400"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div
                className={`space-y-3 transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <label htmlFor="email" className="block text-left text-gray-600 text-sm font-medium font-montserrat">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-400 focus:border-purple-600 hover:border-purple-400 outline-none py-3 text-gray-800 placeholder-gray-500 font-montserrat transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div
              className={`space-y-3 transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <label htmlFor="message" className="block text-left text-gray-600 text-sm font-medium font-montserrat">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, goals, and how I can help bring your ideas to life..."
                rows={4}
                className="w-full bg-transparent border-0 border-b-2 border-gray-400 focus:border-purple-600 hover:border-purple-400 outline-none py-3 text-gray-800 placeholder-gray-500 font-montserrat resize-none transition-all duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <div
              className={`pt-4 lg:pt-8 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <button
                type="submit"
                className="group flex items-center space-x-4 px-8 lg:px-12 py-3 lg:py-4 border-2 border-purple-600 text-purple-600 font-semibold font-montserrat hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300 mx-auto text-sm lg:text-base"
              >
                <span>SEND MESSAGE</span>
                <ArrowRight
                  size={16}
                  className="lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
