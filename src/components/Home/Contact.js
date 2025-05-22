'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import TypewriterText from '../TypewriterText';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only initialize on client side
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      
      // Debug: Log environment variables to console
      console.log('EmailJS Config:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not set',
        recipientEmail: process.env.NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL
      });
    }
  }, []);

  const onSubmit = async (data) => {
    console.log('=== Form Submission Started ===');
    console.log('Form data:', data);
    
    // Log environment variables (safe since they're prefixed with NEXT_PUBLIC_)
    const envVars = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'Not set',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'Not set',
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set (hidden for security)' : 'Not set',
      recipientEmail: process.env.NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL || 'Not set'
    };
    console.log('Environment variables:', envVars);
    
    // Show loading state
    setIsSubmitting(true);
    
    try {
      // Basic validation with more detailed error messages
      const missingVars = [];
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
      if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
      if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) missingVars.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
      
      if (missingVars.length > 0) {
        throw new Error(`Missing required EmailJS configuration variables: ${missingVars.join(', ')}. Please check your .env.local file.`);
      }
      
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`.trim(),
        from_email: data.email,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL || 'murtjiznaqvi@gmail.com',
        phone: data.phone,
        message: data.message,
        reply_to: data.email
      };

      console.log('Sending email with params:', templateParams);

      // Re-initialize emailjs with the public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      
      // Send email using EmailJS
      console.log('Sending email with template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log('Using service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Pass public key as fourth parameter
      );
      
      console.log('EmailJS Response:', response);

      console.log('Email sent successfully:', response);
      reset();
      alert('Your message has been sent successfully! I\'ll get back to you soon.');
    } catch (error) {
      console.error('=== Email Sending Failed ===');
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        status: error.status || 'N/A',
        text: error.text || 'N/A',
        stack: error.stack || 'No stack trace'
      });
      
      // More user-friendly error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.status === 0) {
        errorMessage += 'Network error. Please check your internet connection.';
      } else if (error.status === 400) {
        errorMessage += 'Invalid request. Please check the form data and try again.';
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed. Please check your EmailJS configuration.';
      } else if (error.status >= 500) {
        errorMessage += 'Server error. Please try again later.';
      } else {
        errorMessage += error.message || 'Please try again or contact me directly at murtjiznaqvi@gmail.com';
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
      console.log('=== Form Submission Completed ===');
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
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 opacity-50 blur-3xl rotate-45 -z-10"></div>
      <div className="max-w-6xl mx-auto rounded-xl p-8 md:p-12">
        <div className="absolute inset-0 blur-3xl opacity-40 z-0" />

        <div className="text-center mb-8">
          <TypewriterText text="Get in Touch" id="contact-heading" />
        </div>

        <p className="mb-6 text-gray-600">
          I specialize in crafting elegant, user-focused digital solutions. Reach out to discuss your project or explore collaboration opportunities.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
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
                    value: /^03\d{9}$/,
                    message: 'Please enter a valid Pakistani phone number starting with 03 (e.g., 03123456789)',
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
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors bg-[#0077B5] hover:text-[#0077B5]/80`}
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
