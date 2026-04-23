import { motion } from 'framer-motion';

const skills = [
  "Node.js", "Express.js", "TypeScript", "REST API", "JWT & OAuth",
  "React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit", "HTML/CSS",
  "MongoDB", "Mongoose", "PostgreSQL", "AWS", "Firebase",
  "Git", "GitHub", "Postman", "Data Structures", "Problem Solving"
];

const Skills = () => {
  return (
    <section id="skills" className="relative border-t border-light-border dark:border-dark-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sticky top-32">
              Skills.
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="px-5 py-2.5 rounded-full border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-black dark:text-white text-sm font-medium hover:border-black dark:hover:border-white transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
