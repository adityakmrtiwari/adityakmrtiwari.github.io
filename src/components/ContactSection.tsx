import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again later or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 min-h-[80vh] bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In <span className="text-blue-500 dark:text-blue-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="group bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 p-8 mb-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="text-blue-500 dark:text-blue-400" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        adityakmrtiwari@gmail.com
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="text-blue-500 dark:text-blue-400" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        +91 9507761511
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="text-blue-500 dark:text-blue-400" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bihar, India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="group bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', url: 'https://github.com/adityakmrtiwari' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adityakmrtiwari/ ' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-800 dark:text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="group bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Send Me a Message
              </h3>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-100 dark:bg-green-900/50 backdrop-blur-sm text-green-700 dark:text-green-300 p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  {error && (
                    <motion.div 
                      className="bg-red-100 dark:bg-red-900/50 backdrop-blur-sm text-red-700 dark:text-red-300 p-4 rounded-lg mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.div>
                  )}
                  <div className="space-y-6">
                    {[
                      { label: 'Your Name', type: 'text', name: 'name' },
                      { label: 'Your Email', type: 'email', name: 'email' },
                      { label: 'Subject', type: 'text', name: 'subject' }
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <label 
                          htmlFor={field.name} 
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      ></textarea>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;