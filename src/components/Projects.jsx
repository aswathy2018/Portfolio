import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Aurum Scents',
    description: 'A feature-rich full-stack MERN application demonstrating scalable backend architecture and secure data handling. Features wishlist, wallet system, order management, coupons, and Razorpay integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'Razorpay'],
    github: '#',
    demo: '#'
  },
  {
    title: 'User Management System',
    description: 'Developed backend using TypeScript ensuring type safety and scalable code structure. Implemented Role-Based Access Control (RBAC) and secure authentication workflows.',
    tech: ['Node.js', 'TypeScript', 'Express', 'JWT', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Think Board',
    description: 'Built REST APIs for real-time collaboration features using Node.js and Express.js. Secured APIs using JWT authentication and implemented proper authorization.',
    tech: ['Node.js', 'Express.js', 'React', 'JWT'],
    github: '#',
    demo: '#'
  },
  {
    title: 'React Todo App',
    description: 'A responsive task management app using React functional components with state management and real-time UI updates.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative border-t border-light-border dark:border-dark-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sticky top-32">
              Projects.
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 gap-6">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.title}
                className="card p-8 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-light-muted dark:text-dark-muted mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
