'use client';

import TopSection from '@/components/shared/TopSection';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { doCredentialLogin } from '../actions';
import SocialLogin from '@/components/auth/SocialLogin';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async ({ email, password }) => {
   const formData = { email, password };

   try {
     const response = await doCredentialLogin(formData);

     if (response.error) {
       toast.error(response.error);
     } else {
      //  router.push('/'); // Navigate to home on success
     }
   } catch (error) {
     console.error(error);
     toast.error('Check your Credentials');
   }
 };
  

  return (
    <div className='min-h-screen py-10 flex items-center justify-center'>
      <div className='px-4 py-10 bg-gray-700 shadow-lg rounded-lg w-auto'>
        <TopSection
          heading={'Welcome Back to SuiteTrack'}
          subheading={
            'Log in to manage your bookings and unlock exclusive hotel deals!'
          }
        />
        <hr className='mt-4' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text -mb-1'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              placeholder='Email'
              className='input input-bordered'
              autoComplete='off'
            />
            {errors.email && (
              <p className='text-red-500 mt-2'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control relative flex flex-col mt-1'>
            <label className='label -mb-1'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder='Password'
              autoComplete='current-password'
              className='input input-bordered'
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-12 right-8 cursor-pointer'
              role='button'
              tabIndex={0}
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
          </div>
          <div className='form-control my-4'>
            <button
              type='submit'
              className='btn bg-green-700
              hover:bg-green-800
              hover text-base text-gray-300 border-none'
            >
              Sign In
            </button>
          </div>
        </form>
          <SocialLogin />
        <div className='text-center text-sm mt-6'>
          Don&apos;t have any account?{' '}
          <Link href={'/register'} className='font-semibold text-blue-500'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
