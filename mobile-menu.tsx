"use client";

import { X, Twitter, Github, Linkedin, Dribbble } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={onClose}
        />
      )}

      {/* Slide-in menu - responsive width */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Lime green accent bar at top */}
        <div className="h-2 bg-lime-400" />

        {/* Menu content */}
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4 lg:p-6">
            <button
              onClick={onClose}
              className="text-purple-600 p-2 hover:bg-purple-100 rounded-lg transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex-1 px-4 lg:px-6 pt-4">
            <nav className="space-y-6">
              <Link
                href="/work"
                onClick={onClose}
                className="block text-purple-600 text-lg lg:text-xl font-medium font-montserrat hover:text-purple-700 transition-colors duration-300"
              >
                My Projects
              </Link>
              <Link
                href="#about"
                onClick={onClose}
                className="block text-purple-600 text-lg lg:text-xl font-medium font-montserrat hover:text-purple-700 transition-colors duration-300"
              >
                About Me
              </Link>
              <Link
                href="/resume"
                onClick={onClose}
                className="block text-purple-600 text-lg lg:text-xl font-medium font-montserrat hover:text-purple-700 transition-colors duration-300"
              >
                My Resume
              </Link>
            </nav>

            {/* Contact section */}
            <div className="mt-12 space-y-6">
              <h3 className="text-gray-400 text-sm font-medium font-montserrat tracking-wider uppercase">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:babalolatobi308@gmail.com"
                  className="block text-purple-600 text-base lg:text-lg font-medium font-montserrat hover:text-purple-700 transition-colors duration-300"
                >
                  babalolatobi308@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/tobi-babalola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-600 text-base lg:text-lg font-medium font-montserrat hover:text-purple-700 transition-colors duration-300"
                >
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Social links at bottom */}
          <div className="px-4 lg:px-6 pb-6">
            <div className="flex space-x-6">
              <a
                href="https://x.com/babalola_t4714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com/Tobi-Babalola123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tobi-babalola/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://dribbble.com/Tbabalola2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 hover:scale-110 transition-all duration-300"
                aria-label="Dribbble"
              >
                <Dribbble size={24} />
              </a>
            </div>
          </div>

          {/* Lime green accent bar at bottom */}
          <div className="h-2 bg-lime-400" />
        </div>
      </div>
    </>
  );
}
