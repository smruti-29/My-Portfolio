// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Download, Award } from 'lucide-react';
// import { Experience as ExperienceType } from '../types';

// const experiences: ExperienceType[] = [
//   {
//     id: 1,
//     company: 'Gold Badge in Java Programming',
//     logo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80',
//     role: 'Hakerrank',
//     period: '2023 - Present',
//     achievements: [
//       'Earned a Gold Badge in Java on HackerRank, showcasing strong problem-solving skills.',
//     ],
//   },
//   {
//     id: 2,
//     company: 'Completed a virtual internship',
//     logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80',
//     role: 'Accenture',
//     period: '2021 - 2023',
//     achievements: [
//       'Completed a virtual internship as a Software Engineer at Accenture, gaining practical industry knowledge.',
//     ],
//   },
//   {
//     id: 3,
//     company: 'StartUp Hub',
//     logo: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80',
//     role: 'Leet Code',
//     period: '2019 - 2021',
//     achievements: [
//       'Successfully completed a Full-Stack Development course, mastering MERN stack and Core Java.',
//     ],
//   },
// ];

// const Experience = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="experience" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex justify-between items-center mb-12">
//             <h2 className="text-3xl font-bold">Personal Achievements</h2>
//             <motion.a
//               href="/resume.pdf"
//               download
//               className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Download className="w-5 h-5" />
//               Download Resume
//             </motion.a>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                 <Award className="w-5 h-5 text-purple-600" />
//                 Achievements and Honors
//               </h3>
//               <div className="space-y-8">
//                 {experiences.map((experience, index) => (
//                   <motion.div
//                     key={experience.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex gap-4"
//                   >
//                     <img
//                       src={experience.logo}
//                       alt={experience.company}
//                       className="w-12 h-12 rounded-full object-cover flex-shrink-0"
//                     />
//                     <div>
//                       <h4 className="font-bold">{experience.role}</h4>
//                       <p className="text-gray-600">{experience.company}</p>
//                       <p className="text-sm text-gray-500 mb-2"></p>
//                       <ul className="space-y-1">
//                         {experience.achievements.map((achievement, i) => (
//                           <li key={i} className="text-sm text-gray-600">
//                             • {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-6">Resume Preview</h3>
//               <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
//                 <iframe
//                   src="/resume.pdf"
//                   title="Resume Preview"
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
// import { Experience as ExperienceType } from '../types';

// const experiences: ExperienceType[] = [
//   {
//     id: 1,
//     company: 'HackerRank',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
//     role: 'Problem Solver',
//     period: '2024',
//     achievements: ['Gold Badge in Java, showcasing problem-solving expertise.'],
//   },
//   {
//     id: 2,
//     company: 'Datacom',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Datacom_logo.png',
//     role: 'Virtual Intern',
//     period: '2024',
//     achievements: [
//       'Completed a Software Engineer Virtual Internship, gaining industry knowledge.',
//     ],
//   },
//   {
//     id: 3,
//     company: 'Accenture',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Accenture_logo.png',
//     role: 'Certificate Holder',
//     period: '2024',
//     achievements: ['Earned an Accenture Virtual Certificate in business solutions.'],
//   },
//   {
//     id: 4,
//     company: 'LeetCode',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_black.png',
//     role: 'Competitive Programmer',
//     period: 'Ongoing',
//     achievements: [
//       // <span>
//       //   Actively solving challenges on{' '}
//       //   <a
//       //     href="https://leetcode.com/"
//       //     target="_blank"
//       //     rel="noopener noreferrer"
//       //     className="text-purple-600 hover:underline"
//       //   >
//       //     LeetCode
//       //   </a>.
//       // </span>,
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experiences.map((experience) => (
//             <motion.div
//               key={experience.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: experience.id * 0.1 }}
//               className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
//             >
//               {/* Logo */}
//               <img
//                 src={experience.logo}
//                 alt={experience.company}
//                 className="w-16 h-16 rounded-full mb-4 object-cover"
//               />
//               {/* Role */}
//               <h3 className="text-xl font-semibold">{experience.role}</h3>
//               <p className="text-gray-500 text-sm">{experience.period}</p>
//               {/* Achievements */}
//               <ul className="mt-4 space-y-2">
//                 {experience.achievements.map((achievement, index) => (
//                   <li key={index} className="text-gray-700 text-sm">
//                     • {achievement}
//                   </li>
//                 ))}
//               </ul>
//               {/* External Link */}
//               {experience.id === 4 && (
//                 <a
//                   href="https://leetcode.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 text-purple-600 hover:underline flex items-center justify-center gap-1"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   View Profile
//                 </a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Trophy, Star, BookOpen, Code2, GitBranch } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'HackerRank Gold Badge',
    description: 'Java Programming Excellence',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    link: 'https://www.hackerrank.com/profile/sranjanbasantia',
    stats: ['5⭐ Java programming', 'Core Java Certification']
  },
  {
    id: 2,
    title: 'LeetCode Profile',
    description: '100+ Problems Solved',
    icon: <Star className="w-6 h-6 text-blue-500" />,
    link: 'https://leetcode.com/u/smruti_29/',
    stats: ['100+ Problems', '20+ Hard Problems']
  },
  {
    id: 3,
    title: 'Virtual Internship',
    description: 'Accenture Technology Program',
    icon: <BookOpen className="w-6 h-6 text-green-500" />,
    link: 'https://docs.google.com/document/d/1S9T0cbuF0lvSB_4mgPvcLMywZQJQAbslYYx_iDHS1LM/edit?tab=t.0#bookmark=id.gjdgxs',
    stats: ['Cloud Architecture', 'Agile Development', 'Software Engineering']
  }
];

const skills = [
  {
    category: 'Programming',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'C'],
    icon: <Code2 className="w-5 h-5" />
  },
  {
    category: 'Tools and Technologies',
    items: ['React', 'Node.js', 'Spring Boot', 'MongoDB Atlas', 'maven', 'Git','RESTful APIs'],
    icon: <GitBranch className="w-5 h-5" />
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Achievements & Skills</h2>
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Achievements */}
            <div className="lg:col-span-2 space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{achievement.title}</h3>
                        <motion.a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-black transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Profile →
                        </motion.a>
                      </div>
                      <p className="text-gray-600 mt-1">{achievement.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {achievement.stats.map((stat, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-50 text-sm text-gray-700 rounded-full"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg sticky top-24">
                <div className="mb-8 space-y-1">
                  <h3 className="text-2xl font-bold">Smruti Ranjan Basantia</h3>
                  <p className="text-gray-600">Aspiring Software Developer</p>
                  <div className="h-1 w-20 bg-black mt-4"></div>
                </div>

                <div className="space-y-8">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {skillGroup.icon}
                        <h4 className="font-semibold">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-50 text-sm rounded-full hover:bg-gray-100 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="font-semibold mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        <span className="text-sm">HackerRank Gold Badge Holder</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        <span className="text-sm">100+ LeetCode Problems Solved</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        <span className="text-sm">Accenture Virtual Internship</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;