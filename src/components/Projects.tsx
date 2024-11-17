// import { useState } from 'react';

// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Github } from 'lucide-react';
// import { Project } from '../types';

// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'E-Learning Platform',
//     description: 'Full-featured Online Course Selling Website with React, Node.js, and MongoDB',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'Full Stack',
//     techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
//     // liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com/smruti-29/modernized-odisha-frontend',
//     featured: true,
//   },
//   {
//     id: 2,
//     title: 'Banking Management App',
//     description: 'Collaborated with my college friends to develop a banking management system, focusing on seamless functionality and teamwork.',

//     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'Backend',
//     techStack: ['Core Java','React', 'TypeScript', 'Socket.io'],
//     githubUrl: 'https://github.com/smruti-29/Banking-Management-System-master.git',
//     featured: false,
//   },
//   {
//     id: 3,
//     title: 'Photo Design',
// description: 'Designed a photo editing software with tools for enhancing and customizing images.',

//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'Frontend',
//     techStack: ['JavaScript', 'HTML', 'CSS'],
//     githubUrl: 'https://github.com/smruti-29/PhotoDesign',
//     featured: true,
//   },
// ];

// const Projects = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [filter, setFilter] = useState('All');
//   const categories = ['All', ...new Set(projects.map((project) => project.category))];

//   const filteredProjects = projects.filter(
//     (project) => filter === 'All' || project.category === filter
//   );

//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
//           <div className="flex flex-wrap gap-4 mb-8">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setFilter(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   filter === category
//                     ? 'bg-purple-600 text-white'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence mode="wait">
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
//                 >
//                   <div className="relative h-48">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//                       {project.liveUrl && (
//                         <a
//                           href={project.liveUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
//                         >
//                           <ExternalLink className="w-5 h-5 text-gray-700" />
//                         </a>
//                       )}
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
//                       >
//                         <Github className="w-5 h-5 text-gray-700" />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="text-xl font-bold">{project.title}</h3>
//                       {project.featured && (
//                         <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
//                           Featured
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-gray-600 mb-4">{project.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.techStack.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Learning Platform',
    description: 'Full-featured Online Course Selling Website with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Full Stack',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/smruti-29/modernized-odisha-frontend',
    featured: true,
  },
  {
    id: 2,
    title: 'Banking Management App',
    description: 'Collaborated with my college friends to develop a banking management system, focusing on seamless functionality and teamwork.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Backend',
    techStack: ['Core Java', 'React', 'TypeScript', 'Socket.io'],
    githubUrl: 'https://github.com/smruti-29/Banking-Management-System-master.git',
    featured: false,
  },
  {
    id: 3,
    title: 'Photo Design',
    description: 'Designed a photo editing software with tools for enhancing and customizing images.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Frontend',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/smruti-29/PhotoDesign',
    featured: true,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AnimatePresence key={project.id} mode="sync">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-700" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
