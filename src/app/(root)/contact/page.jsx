'use client';
import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
    <div className='min-h-screen text-center bg-lightBackground pt-28'>
      <div className='max-w-3xl mx-auto text-darkPrimary border-2 border-b-4 border-r-4 border-slate-900 p-8 rounded-3xl shadow-2xl bg-amber-50'>
        <h1 className='text-3xl xl:text-4xl  font-bold text-lightPrimary mb-8'>
          Suit<span className='text-lightSecondary'>Track</span> ⇒ Contact with
          Us
        </h1>

        {/* form */}

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 '
        >
          {/* Name Input */}
          <div className='flex flex-col'>
            {errors.from_name ? (
              <span className='text-red-500 text-start font-semibold ml-1'>
                {errors.from_name.message}
              </span>
            ) : (
              <label
                htmlFor='from_name'
                className='text-left text-lightPrimary font-semibold ml-1'
              >
                Name
              </label>
            )}
            <input
              id='name'
              type='text'
              {...register('from_name', { required: 'Name is required' })}
              className={`p-3 border ${
                errors.from_name ? 'border-red-500' : 'border-gray-600'
              } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
              placeholder='Your Name'
            />
          </div>

          {/* Email Input */}
          <div className='flex flex-col'>
            {errors.reply_to ? (
              <span className='text-red-500 text-start font-semibold ml-1'>
                {errors.reply_to.message}
              </span>
            ) : (
              <label
                htmlFor='email'
                className='text-left font-semibold text-lightPrimary ml-1'
              >
                Email
              </label>
            )}
            <input
              id='email'
              type='email'
              {...register('reply_to', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className={`p-3 border ${
                errors.reply_to ? 'border-red-500' : 'border-gray-600'
              } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
              placeholder='Your Email'
            />
          </div>

          {/* Message Input */}
          <div className='flex flex-col'>
            {errors.message ? (
              <span className='text-red-500 text-start font-semibold ml-1'>
                {errors.message.message}
              </span>
            ) : (
              <label
                htmlFor='message'
                className='text-left font-semibold text-lightPrimary ml-1'
              >
                Message
              </label>
            )}
            <textarea
              id='message'
              {...register('message', { required: 'Message is required' })}
              rows={4}
              className={`p-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              } rounded-md focus:outline-none focus:bg-gray-800 focus:border-gray-600 bg-gray-600 border-gray-600 mt-1 focus:shadow-glow2`}
              placeholder='Write your message here'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-3 px-6 bg-gray-800 text-darkPrimary font-semibold rounded-md hover:bg-slate-900 transition duration-300'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
