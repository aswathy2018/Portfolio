import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative border-t border-light-border dark:border-dark-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sticky top-32">
              Experience.
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-16">
              
              {/* Work Experience */}
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-8 border-b border-light-border dark:border-dark-border pb-4">Work Experience</h3>
                
                <div className="relative border-l border-light-border dark:border-dark-border ml-2 space-y-12">
                  <motion.div 
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black dark:bg-white"></div>
                    <div className="group">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-500 transition-colors">Testing Operator</h4>
                        <span className="text-sm font-medium text-light-muted dark:text-dark-muted font-mono mt-1 sm:mt-0">July 2023 – June 2024</span>
                      </div>
                      <h5 className="text-gray-700 dark:text-gray-300 font-medium mb-4">Nokia Solutions and Networks, Chennai</h5>
                      <ul className="list-disc list-outside ml-4 text-light-muted dark:text-dark-muted space-y-2 leading-relaxed">
                        <li>Performed testing and quality assurance on telecom PCB boards.</li>
                        <li>Ensured accuracy and reliability across multiple hardware components.</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-8 border-b border-light-border dark:border-dark-border pb-4">Education</h3>
                
                <div className="relative border-l border-light-border dark:border-dark-border ml-2 space-y-12">
                  <motion.div 
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black dark:bg-white"></div>
                    <div className="group">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-500 transition-colors">MERN Stack Development</h4>
                        <span className="text-sm font-medium text-light-muted dark:text-dark-muted font-mono mt-1 sm:mt-0">2024 – Present</span>
                      </div>
                      <h5 className="text-gray-700 dark:text-gray-300 font-medium mb-4">Brototype, Kochi</h5>
                      <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                        Intensive program focusing on modern full-stack web development with MongoDB, Express, React, and Node.js.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black dark:bg-white"></div>
                    <div className="group">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-500 transition-colors">Bachelor of Computer Applications</h4>
                        <span className="text-sm font-medium text-light-muted dark:text-dark-muted font-mono mt-1 sm:mt-0">2020 – 2023</span>
                      </div>
                      <h5 className="text-gray-700 dark:text-gray-300 font-medium mb-4">St. Joseph’s College, Irinjalakkuda</h5>
                      <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                        Studied core computer science concepts, programming, and software engineering principles.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
