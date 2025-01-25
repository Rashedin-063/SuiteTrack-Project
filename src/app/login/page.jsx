'use client';

import TopSection from '@/components/shared/TopSection';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log(response);

      if (response?.error) {
        console.log('The error is : ', response.error);
        toast.error(response.error);
      }

      if (response?.ok) {
        toast.success('Login Successful!');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || 'Something went wrong!');
    }
  };


   const onSubmit2 = async ({ email, password }) => {
      try {
        setLoading(true);
        await logInUser(email, password);
        swalAlert('success', 'Sign Up Successful', 'top-right');
        navigate(from);
      } catch (err) {
        //console.log(err);
        toast.error(err.message);
        setLoading(false);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text -mb-1'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              placeholder='Email'
              className='input input-bordered'
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
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-12 right-8 cursor-pointer'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover text-base'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control'>
            <button
              type='submit'
              className='btn bg-green-700
              hover:bg-green-800
              hover text-base text-gray-300 border-none'
            >
              Sign In
            </button>
          </div>
          {/* <SocialLogin /> */}
        </form>
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
