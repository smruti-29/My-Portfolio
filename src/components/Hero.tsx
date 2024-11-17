import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe } from 'lucide-react'; // Replace Github with Globe or similar icon
import ProfileImage from '../assets/images/own.jpg'; // Local profile image

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Full-Stack Developer | MERN Stack Specialist
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Empowering businesses with innovative, high-performance web applications. With
              expertise in the MERN stack, I specialize in crafting seamless user experiences and
              scalable architectures. Let’s build something extraordinary together.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <Code2 className="w-5 h-5" />
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full hover:bg-gray-50 transition-colors"
              >
                Let’s Collaborate
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/smruti-29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Visit my website"
              >
                <Globe className="w-6 h-6" />
              </a>
              <div className="text-sm text-gray-500">Explore my portfolio and  work</div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-lg mx-auto">
              <img
                src={ProfileImage}
                alt="Smruti Ranjan Basantia - Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-sm font-semibold text-gray-800">Available for</div>
              <div className="text-black font-bold">Freelance Projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
