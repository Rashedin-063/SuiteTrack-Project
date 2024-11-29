"use client"

import TopSection from '@/Components/shared/TopSection'
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter()
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log(response)

      if (response?.error) {
        console.log("The error is : ", response.error);
        toast.error(response.error);
      }

      if (response?.ok) {
        toast.success("Login Successful!");
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Something went wrong!");
    }
  }
  return (
    <div className='py-10 flex items-center justify-center'>
      <div className='px-4 py-10 shadow-lg rounded-lg w-auto'>
        <TopSection heading={'Welcome Back to SuiteTrack'} subheading={'Log in to manage your bookings and unlock exclusive hotel deals!'} />
        <hr className='mt-4' />
        <form className='mt-4 flex flex-col space-y-2' onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder='Enter your email**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
          <div className='flex items-center space-x-2'>
            <input name='password' placeholder='Enter your password**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
          </div>
          <button className='btn btn-success btn-block text-white' type='submit'>Login</button>
        </form>
        <p className='text-center text-sm'>Don&apos;t have any account? <Link href={'/register'} className='font-semibold text-blue-500'>Register</Link></p>
      </div>
    </div>
  )
}
