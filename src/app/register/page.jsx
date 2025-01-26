'use client';

import TopSection from '@/components/shared/TopSection';
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { imageUpload } from '@/utils';
import createUser from '@/queries/createUser';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import getSingleUser from '@/queries/getSingleUser';

// Zod schema for validation
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    .regex(
      /(?=.*[0-9])/,
      'Password must contain at least one numeric character'
    )
    .regex(
      /(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must contain at least one special character'
    ),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Form submission handler
  const handleRegister = async ({ name, email, password }) => {
    const image_url = await imageUpload(imageFile);
    const hashedPassword = bcrypt.hashSync(password, 5);

    // console.log(password, hashedPassword);
    // return console.log(name, email, password, image_url);

    // find if the user is already exists

    const existingUser = await getSingleUser(email);

    // console.log(existingUser.email, userInfo.email)

    if (email === existingUser?.email) {
      toast.error('User already exist, please sign in');
      router.push('/login')
      return;
    }

    const userInfo = {
      displayName: name,
      email,
      hashedPassword,
      photoURL: image_url,
      subscription: 'usual',
      role: 'user',
      status: 'verified',
    };

    createUser(userInfo);
    router.push('/');
  };

  // Handle file input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='p-6  bg-gray-700 rounded-lg shadow-lg my-10'>
        <TopSection
          heading={'Join SuiteTrack Today'}
          subheading={
            'Create an account to discover premium hotels and personalized booking experiences!'
          }
        />
        <hr className='mt-4' />
        <form
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className='form-control'>
            <input
              type='text'
              {...register('name')} // Ensure this matches the Zod schema
              placeholder='Name'
              className='input input-bordered'
            />
            {errors.name && (
              <p className='text-red-500 mt-2'>{errors.name.message}</p>
            )}
          </div>
          <div className='flex justify-between items-center py-1 bg-gray-800 rounded-md my-2'>
            <label
              htmlFor='photo'
              className='block mb-2 pt-2 pl-[14px] min-w-40 font-semibold'
            >
              Select Image:
            </label>
            <input
              required
              type='file'
              id='photo'
              accept='image/*'
                          onChange={handleImageChange}
            />
            {errors.photo && (
              <p className='text-red-500 mt-2'>{errors.photo.message}</p>
            )}
          </div>
          <div className='form-control'>
            <input
              type='email'
              {...register('email')} // Ensure this matches the Zod schema
              placeholder='Email'
              className='input input-bordered'
            />
            {errors.email && (
              <p className='text-red-500 mt-2'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control relative flex flex-col mt-3'>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')} // Ensure this matches the Zod schema
              placeholder='Password'
              autoComplete='new-password'
              className='input input-bordered'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-4 right-8 cursor-pointer'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
          </div>
          <div className='form-control mt-6'>
            <button
              type='submit'
              className='btn bg-green-700 text-white hover:bg-green-800 border-none mt-2'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
