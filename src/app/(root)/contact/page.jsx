'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  const onSubmit = async () => {
    if (formRef.current) {
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          {
            publicKey: publicKey,
          }
        );

        if (result.status === 200) {
          toast.success('Message sent successfully!');
          reset();
        } else {
          toast.error('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-28 dark:bg-gray-900">
      <div className="text-center px-4 sm:px-8">
        <h2 className="text-3xl font-bold leading-tight text-[#bd9966] lg:text-4xl">
          Contact Us!
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We’re here to help! If you have any questions, feedback, or need assistance, don’t hesitate to reach out to us.
        </p>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-16 mx-auto md:px-12 lg:px-16 xl:px-32 lg:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-800 dark:text-gray-200">📧 Email: support@suite-track.com</p>
            <p className="text-gray-800 dark:text-gray-200">📞 Phone: +1 (123) 456-7890</p>
            <p className="text-gray-800 dark:text-gray-200">🌐 Website: www.suite-track.com</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6435114593187!2d90.4102138798014!3d23.79570562356292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c774a2484447%3A0x6424c6b057aff344!2sC%20House%20Milano%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1722250694052!5m2!1sen!2sbd"
            className="w-full h-64 sm:h-80 lg:h-96 rounded-md shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing The Lux Tower location"
          ></iframe>
        </div>

        {/* Right Section */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* <h2 className="text-[#bd9966] text-center text-2xl">Have questions?</h2> */}

          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="from_name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('from_name', { required: 'Name is required' })}
              className={`mt-1 p-3 border rounded-md ${errors.from_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Name"
            />
            {errors.from_name && (
              <span className="text-xs text-red-500 mt-1">
                {errors.from_name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="reply_to" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('reply_to', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className={`mt-1 p-3 border rounded-md ${errors.reply_to ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Email"
            />
            {errors.reply_to && (
              <span className="text-xs text-red-500 mt-1">
                {errors.reply_to.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows={3}
              className={`mt-1 p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Write your message here"
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-500 mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-[#bd9966] rounded-md hover:bg-[#9a7c52] focus:outline-none focus:ring-2 focus:ring-[#9c7b4c] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
