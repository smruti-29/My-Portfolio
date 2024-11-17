// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Database, Wrench } from 'lucide-react';
// import { Skill } from '../types';

// const skills: Skill[] = [
//    { name: 'React', level: 63, category: 'frontend' },
//   { name: 'Vite', level: 80, category: 'frontend' },
//   { name: 'Next', level: 30, category: 'frontend' },
//   { name: 'TypeScript', level: 60, category: 'frontend' },
//   { name: 'Node.js', level: 70, category: 'backend' },
//   { name: 'Express', level: 76, category: 'backend' },
//   { name: 'SpringBoot', level: 40, category: 'backend' },
//   { name: 'MongoDB', level: 80, category: 'backend' },
//   { name: 'SQL', level: 60, category: 'backend' },
//   { name: 'Docker', level: 55, category: 'tools' },
// ];

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const categoryIcons = {
//     frontend: <Code2 className="w-6 h-6" />,
//     backend: <Database className="w-6 h-6" />,
//     tools: <Wrench className="w-6 h-6" />,
//   };

//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//             <img
//               src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               alt="About Me"
//               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold mb-6">About Me</h2>
//             <p className="text-gray-600 mb-6">
//             Hi, I’m Smruti Ranjan Basantia! I’m passionate about creating meaningful digital experiences and love exploring new opportunities. Currently starting my freelancing journey, I’m excited to collaborate and bring creative ideas to life. Let’s connect and make something amazing together!
//             </p>

//             <div className="space-y-6">
//               {Object.entries(
//                 skills.reduce((acc, skill) => {
//                   if (!acc[skill.category]) acc[skill.category] = [];
//                   acc[skill.category].push(skill);
//                   return acc;
//                 }, {} as Record<string, Skill[]>)
//               ).map(([category, categorySkills]) => (
//                 <div key={category}>
//                   <div className="flex items-center gap-2 mb-3">
//                     {categoryIcons[category as keyof typeof categoryIcons]}
//                     <h3 className="text-lg font-semibold capitalize">{category}</h3>
//                   </div>
//                   <div className="space-y-3">
//                     {categorySkills.map((skill) => (
//                       <div key={skill.name}>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm font-medium text-gray-600">
//                             {skill.name}
//                           </span>
//                           <span className="text-sm text-gray-500">{skill.level}%</span>
//                         </div>
//                         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                           <motion.div
//                             initial={{ width: 0 }}
//                             animate={inView ? { width: `${skill.level}%` } : {}}
//                             transition={{ duration: 1, delay: 0.2 }}
//                             className="h-full bg-black rounded-full"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-20"
//         >
//           <h3 className="text-2xl font-bold mb-6">Career Timeline</h3>
//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
//             {[
//               {
//                 year: '2024',
//                 title: 'Freelance Full-Stack Developer',
//                 company: 'Self-Employed',
//                 description: 'Starting a career in freelancing, focusing on building high-quality, scalable web applications for diverse clients. Specializing in the MERN stack to deliver tailored digital solutions.',
//               },
              
//               {
//                 year: '2024',
//                 title: 'Full-Stack Developer Trainee',
//                 company: 'Tap Academy.',
//                 description: 'Developed scalable web applications',
//               },
//               {
//                 year: '2020-23',
//                 title: 'Bachelor Of Computer Application',
//                 company: 'Bhadrak Autonomous College, Odisha',
//                 description: 'Started journey in web development',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.2 * index }}
//                 className={`relative ${
//                   index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
//                 } md:w-1/2 mb-8`}
//               >
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <div className="absolute top-6 -mt-1.5 w-3 h-3 rounded-full bg-black border-4 border-white"
//                     style={{
//                       [index % 2 === 0 ? 'left' : 'right']: '-1.5rem',
//                     }}
//                   />
//                   <span className="text-sm text-gray-600 font-semibold">
//                     {item.year}
//                   </span>
//                   <h4 className="text-lg font-bold mt-1">{item.title}</h4>
//                   <p className="text-gray-600 text-sm">{item.company}</p>
//                   <p className="text-gray-500 mt-2">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench } from 'lucide-react';
import { Skill } from '../types';
import PinkunImage from '../assets/images/Pinkun.jpg'; // Import your local image

const skills: Skill[] = [
  // { name: 'React', level: 63, category: 'frontend' },
  { name: 'Vite', level: 80, category: 'frontend' },
  { name: 'Tailwind Css', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 60, category: 'frontend' },
  // { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Express', level: 76, category: 'backend' },
  // { name: 'SpringBoot', level: 40, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'SQL', level: 60, category: 'backend' },
  { name: 'GitHub', level: 70, category: 'tools' },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryIcons = {
    frontend: <Code2 className="w-6 h-6" />,
    backend: <Database className="w-6 h-6" />,
    tools: <Wrench className="w-6 h-6" />,
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Updated Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={PinkunImage}
              alt="Smruti Ranjan Basantia"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              Hi, I’m Smruti Ranjan Basantia! I’m passionate about creating meaningful digital
              experiences and love exploring new opportunities. Currently starting my freelancing
              journey, I’m excited to collaborate and bring creative ideas to life. Let’s connect
              and make something amazing together!
            </p>

            <div className="space-y-6">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, Skill[]>)
              ).map(([category, categorySkills]) => (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-3">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                    <h3 className="text-lg font-semibold capitalize">{category}</h3>
                  </div>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-black rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
            {[
              {
                year: '2024',
                title: 'Freelance Full-Stack Developer',
                company: 'Self-Employed',
                description:
                  'Starting a career in freelancing, focusing on building high-quality, scalable web applications for diverse clients. Specializing in the MERN stack to deliver tailored digital solutions.',
              },
              {
                year: '2024',
                title: 'Full-Stack Developer Trainee',
                company: 'Tap Academy',
                description: 'Developed scalable web applications.',
              },
              {
                year: '2020-23',
                title: 'Bachelor Of Computer Application',
                company: 'Bhadrak Autonomous College, Odisha',
                description: 'Started journey in web development.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2 mb-8`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div
                    className="absolute top-6 -mt-1.5 w-3 h-3 rounded-full bg-black border-4 border-white"
                    style={{
                      [index % 2 === 0 ? 'left' : 'right']: '-1.5rem',
                    }}
                  />
                  <span className="text-sm text-gray-600 font-semibold">{item.year}</span>
                  <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.company}</p>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
