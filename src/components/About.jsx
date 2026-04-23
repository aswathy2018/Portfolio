import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative border-t border-light-border dark:border-dark-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sticky top-32">
                About.
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-8 text-lg lg:text-xl leading-relaxed">
              <p>
                Hello. I'm <span className="text-black dark:text-white font-medium">Aswathy Sudhakaran</span>, a Backend-focused MERN Stack Developer. I build scalable, high-performance web applications with clean code and modern architecture.
              </p>
              <p>
                I specialize in Node.js, Express.js, MongoDB, and React. My expertise lies in designing robust RESTful APIs, implementing secure authentication systems (JWT, OAuth), and optimizing backend processes to ensure seamless data flow.
              </p>
              <p>
                With a strong foundation in Data Structures & Algorithms and over 180+ problems solved on LeetCode, I approach software engineering with a problem-solving mindset, always prioritizing scalability, error handling, and performance.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-light-border dark:border-dark-border mt-12">
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white mb-2">180+</h4>
                  <p className="text-sm text-light-muted dark:text-dark-muted">LeetCode</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white mb-2">5+</h4>
                  <p className="text-sm text-light-muted dark:text-dark-muted">Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white mb-2">2+</h4>
                  <p className="text-sm text-light-muted dark:text-dark-muted">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black dark:text-white mb-2">MERN</h4>
                  <p className="text-sm text-light-muted dark:text-dark-muted">Stack</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
