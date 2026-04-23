import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/BgVideo.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay to ensure text remains readable and blends with the dark theme */}
        <div className="absolute inset-0 bg-black/50 dark:bg-[#0a0a0a]/70 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </div>
      
      {/* Very subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 dark:bg-white/[0.02] rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="section-container relative z-10 w-full mt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Aswathy <br />
              <span className="text-gray-400 dark:text-gray-500">Sudhakaran.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-6">
              MERN Stack Developer
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Building robust, scalable, and beautifully engineered backend systems. Focused on minimal design and optimal performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link to="projects" smooth={true} duration={800} className="btn-primary cursor-pointer">
              View Work
            </Link>
            <Link to="contact" smooth={true} duration={800} className="btn-secondary cursor-pointer">
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors duration-300">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors duration-300">
              <Linkedin size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
