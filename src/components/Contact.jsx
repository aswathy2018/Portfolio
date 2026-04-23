import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="relative border-t border-light-border dark:border-dark-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sticky top-32">
              Contact.
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="max-w-2xl">
              <p className="text-lg text-light-muted dark:text-dark-muted mb-10 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    placeholder=" "
                    className="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-border dark:border-dark-border appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors"
                    {...register("name", { required: "Name is required" })}
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute text-sm text-light-muted dark:text-dark-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                  {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    placeholder=" "
                    className="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-border dark:border-dark-border appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-sm text-light-muted dark:text-dark-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                  {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    rows="4"
                    placeholder=" "
                    className="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-light-border dark:border-dark-border appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors resize-none"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-light-muted dark:text-dark-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                  {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-500 mt-4">Message sent successfully.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-500 mt-4">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
