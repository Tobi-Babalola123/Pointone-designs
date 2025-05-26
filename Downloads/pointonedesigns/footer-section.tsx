import { MapPin, Menu, Twitter, Github, Linkedin, Dribbble } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-8">
        <div className="text-lime-400 p-2">
          <MapPin size={24} />
        </div>
        <button className="text-lime-400 p-2">
          <Menu size={24} />
        </button>
      </header>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Left side - Contact */}
            <div className="space-y-8">
              <h3 className="text-purple-300 text-sm font-medium font-montserrat tracking-wider uppercase">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@alexdev.com"
                  className="block text-lime-400 text-xl font-medium font-montserrat hover:text-lime-300 transition-colors duration-300"
                >
                  hello@alexdev.com
                </a>
                <a
                  href="https://t.me/alexdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lime-400 text-xl font-medium font-montserrat hover:text-lime-300 transition-colors duration-300"
                >
                  t.me/alexdev
                </a>
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="space-y-6">
              <nav className="space-y-4">
                <a
                  href="#work"
                  className="block text-lime-400 text-xl font-medium font-montserrat hover:text-lime-300 transition-colors duration-300"
                >
                  My Projects
                </a>
                <a
                  href="#about"
                  className="block text-lime-400 text-xl font-medium font-montserrat hover:text-lime-300 transition-colors duration-300"
                >
                  About Me
                </a>
                <a
                  href="#resume"
                  className="block text-lime-400 text-xl font-medium font-montserrat hover:text-lime-300 transition-colors duration-300"
                >
                  My Resume
                </a>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-purple-400 opacity-30 mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-lime-400 text-sm font-medium font-montserrat">© Tobi Babalola 2025</p>

            {/* Social links with icons */}
            <div className="flex space-x-6">
              <a
                href="https://x.com/babalola_t4714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/Tobi-Babalola123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="www.linkedin.com/in/tobi-babalola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://dribbble.com/Tbabalola2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 hover:scale-110 transition-all duration-300"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
