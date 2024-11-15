import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1709678337824-adc29e1b6b09?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hamburger Menu and Links */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center space-x-4">
        {/* Hamburger Icon for small screens */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FFD700] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </motion.div>

        {/* Top-right links for medium and larger screens */}
        <motion.div
          className="hidden md:flex space-x-6 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["LinkedIn", "Instagram", "Gmail", "Portfolio"].map(
            (text, index) => (
              <a
                key={index}
                href={
                  {
                    Resume: "/resume.pdf",
                    LinkedIn:
                      "https://www.linkedin.com/in/rakshi-perween-156a42214",
                    Instagram:
                      "https://www.instagram.com/rakshiperween/profilecard",
                    Gmail: "mailto:2021archrakshi10665@poornima.edu.in",
                    Portfolio:
                      "https://issuu.com/rakshi_perween/docs/rakshi_perween",
                  }[text]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] text-base font-light hover:bg-[#FFD700] hover:text-black transition duration-300 rounded-full px-4 py-2"
              >
                {text}
              </a>
            )
          )}
          <button
            onClick={() => setShowAbout(true)}
            className="text-[#FFD700] text-base font-light hover:bg-[#FFD700] hover:text-black transition duration-300 rounded-full px-4 py-2"
          >
            About
          </button>
        </motion.div>
      </div>

      {/* Dropdown Menu for small screens */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-16 right-4 bg-black bg-opacity-80 rounded-md p-4 space-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {["Resume", "LinkedIn", "Instagram", "Gmail", "Portfolio"].map(
              (text, index) => (
                <a
                  key={index}
                  href={
                    {
                      Resume: "/resume.pdf",
                      LinkedIn:
                        "https://www.linkedin.com/in/rakshi-perween-156a42214",
                      Instagram:
                        "https://www.instagram.com/rakshiperween/profilecard",
                      Gmail: "mailto:2021archrakshi10665@poornima.edu.in",
                      Portfolio:
                        "https://issuu.com/rakshi_perween/docs/rakshi_perween",
                    }[text]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD700] text-sm font-light block hover:bg-[#FFD700] hover:text-black transition duration-300 rounded px-3 py-2"
                >
                  {text}
                </a>
              )
            )}
            <button
              onClick={() => {
                setShowAbout(true);
                setMenuOpen(false);
              }}
              className="text-[#FFD700] text-sm font-light block hover:bg-[#FFD700] hover:text-black transition duration-300 rounded px-3 py-2"
            >
              About
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!showAbout && (
          <motion.div
            className="w-full h-full flex flex-col justify-start items-start p-4 md:p-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "MedievalSharp, cursive" }} // Applying the imported font
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Rakshi Perween
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About section */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="w-full h-full flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative max-w-3xl p-6 md:p-10 bg-opacity-70 bg-black rounded-lg text-center text-white px-4 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                onClick={() => setShowAbout(false)}
                className="absolute top-4 left-4 md:top-8 md:left-8 text-white text-sm md:text-base font-light hover:bg-[#FFD700] hover:text-black transition duration-300 rounded-full px-3 py-1 md:px-4 md:py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Back
              </motion.button>
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From childhood, I was fascinated by buildings, always choosing
                to draw them in school. I loved watching carpenters work and
                seeing houses come together, even before I knew what
                architecture was. When people asked me what I wanted to be, I’d
                say “engineer” until I discovered, in ninth grade, that what I
                truly loved was called architecture. That’s when my journey
                began, turning a childhood passion into my life’s purpose. Now,
                as I study architecture, I’m driven by a vision to create
                sustainable buildings. My goal is to design homes that naturally
                stay comfortable, without relying on air conditioning, using
                passive design techniques that blend seamlessly with the
                environment. This isn’t just a career; it’s the fulfillment of a
                lifelong dream.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Dancing+Script&display=swap");
      `}</style>
    </div>
  );
}

export default App;
