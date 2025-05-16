'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import TypewriterText from '../TypewriterText';

/**
 * ContactForm component for user inquiries
 * @returns {JSX.Element} The rendered ContactForm section
 */
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form submission
   * @param {Object} data - Form data
   */
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Data:', data);
      reset();
      alert('Your message has been sent successfully.');
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden 
      transform transition-all duration-500 hover:scale-[1.02] border border-gray-200 text-gray-900"
      id="contact"
      aria-labelledby="contact-heading"
      role="region"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 opacity-50 blur-3xl rotate-45 -z-10"></div>
      <div className="max-w-6xl mx-auto rounded-xl p-8 md:p-12">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 blur-3xl opacity-40 z-0" />

        <div className="text-center mb-8">
          <TypewriterText text="Get in Touch" id="contact-heading" />
        </div>

        <p className="mb-6 text-gray-600">
          I specialize in crafting elegant, user-focused digital solutions. Reach out to discuss your project or explore collaboration opportunities.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 space-y-6"
            aria-label="Contact Form"
            noValidate
          >
            <div>
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-indigo-500'
                } bg-white`}
                {...register('firstName', { required: 'First name is required' })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-indigo-500'
                } bg-white`}
                {...register('lastName', { required: 'Last name is required' })}
                aria-invalid={errors.lastName ? 'true' : 'false'}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 focus:border-indigo-500'
                } bg-white`}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-indigo-500'
                } bg-white`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: 'Please enter a valid phone number',
                  },
                })}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 focus:border-indigo-500'
                } bg-white min-h-[150px]`}
                {...register('message', { required: 'Message is required' })}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white'
              }`}
              disabled={isSubmitting}
              aria-busy={isSubmitting ? 'true' : 'false'}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Submit Message</span>
              )}
            </button>
          </form>

          {/* Contact Info Section */}
          <aside className="flex-1 text-gray-300 text-sm lg:text-base">
            <p className="mb-6">
              I am available for new projects and collaborations. Contact me to discuss your ideas or inquire about my services.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Link href="https://wa.me/923447470874" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300 transition-colors">
                  <FaWhatsapp className="w-5 h-5 mr-3 text-blue-400" aria-hidden="true" />
                  +92 3447470874
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="mailto:murtjiznaqvi@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300 transition-colors">
                  <FaEnvelope className="w-5 h-5 mr-3 text-blue-400" aria-hidden="true" />
                  murtjiznaqvi@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-400" aria-hidden="true" />
                <span>Saddar, Rawalpindi, Pakistan</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
