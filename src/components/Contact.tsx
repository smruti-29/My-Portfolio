// import { useState } from 'react';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const Contact = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     try {
//       await emailjs.send(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         {
//           from_name: data.name,
//           from_email: data.email,
//           message: data.message,
//         },
//         'YOUR_PUBLIC_KEY'
//       );
//       setSubmitStatus('success');
//       reset();
//     }  catch (error) {
//       const err = error as Error; // Type assertion
//       console.error(err.message); // Safely access the message property
//       setSubmitStatus('error');
//     }
//     setIsSubmitting(false);
//     setTimeout(() => setSubmitStatus(null), 5000);
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-2 gap-12"
//         >
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//             <p className="text-gray-600 mb-8">
//               I'm always open to discussing new projects, creative ideas or
//               opportunities to be part of your visions.
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p className="text-gray-600">contact@example.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                   <Phone className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p className="text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                   <MapPin className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Location</h3>
//                   <p className="text-gray-600">San Francisco, CA</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="font-semibold mb-4">Follow Me</h3>
//               <div className="flex gap-4">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                 >
//                   <Github className="w-5 h-5 text-gray-700" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5 text-gray-700" />
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                 >
//                   <Twitter className="w-5 h-5 text-gray-700" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   {...register('name', { required: 'Name is required' })}
//                   className={`w-full px-4 py-2 rounded-lg border ${
//                     errors.name ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   {...register('email', {
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: 'Invalid email address',
//                     },
//                   })}
//                   className={`w-full px-4 py-2 rounded-lg border ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   {...register('message', { required: 'Message is required' })}
//                   className={`w-full px-4 py-2 rounded-lg border ${
//                     errors.message ? 'border-red-500' : 'border-gray-300'
//                   } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                 />
//                 {errors.message && (
//                   <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>

//               {submitStatus === 'success' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="p-4 bg-green-100 text-green-700 rounded-lg"
//                 >
//                   Message sent successfully!
//                 </motion.div>
//               )}

//               {submitStatus === 'error' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="p-4 bg-red-100 text-red-700 rounded-lg"
//                 >
//                   Failed to send message. Please try again.
//                 </motion.div>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_iykd7so', // Replace with your EmailJS service ID
        'template_n3u3ibr', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'KNIOOkLNTUFgRpJpd' // Replace with your EmailJS public key
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">sranjanbasantia@gmail.com</p> {/* Replace with your email */}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 7205049120</p> {/* Replace with your phone number */}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Odisha, India</p> {/* Update with your location */}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/smruti-29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/smruti-ranjan-basantia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://x.com/SmrutiBasantia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 text-red-700 rounded-lg"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

 