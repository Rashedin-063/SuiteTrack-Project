"use client"

import TopSection from '@/Components/TopSection'
import Link from 'next/link';
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import bcrypt from "bcryptjs";

export default function Register() {
    const router = useRouter()
    const {mutateAsync : saveUser} = useMutation({
        mutationFn : async(user) => {
            const {data} = await axios.post('http://localhost:3000/api/registerdUsers', user)
            return data
        },

        onSuccess : () => {
            toast.success("User Registration Successful!")
            router.push('/login')
        }
    })
    const handleRegisterSubmit = async(event) => {
        event.preventDefault();

        const form = event.target;
        const username = form?.username?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        const photoURL = form?.photoURL?.value;

        const hashPassword = bcrypt.hashSync(password, 14);

        const registeredUser = {
            username, email, hashPassword, photoURL
        }

        try{
            await saveUser(registeredUser)
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='px-4 py-6 rounded-lg shadow-lg my-10'>
                <TopSection heading={'Join Epicurean Bliss'} subheading={"Create an account to savor a world of culinary delights"} />
                <hr className='mt-4' />
                <form className='mt-4 flex flex-col space-y-2' onSubmit={handleRegisterSubmit}>
                    <input type="text" name='username' placeholder='Enter your username**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <input type="email" name='email' placeholder='Create your email**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <input type="text" name='photoURL' placeholder='Enter your photo**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <input name='password' placeholder='Enter your password**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <button className='btn btn-success btn-block text-white' type='submit'>Register</button>
                    <p className='text-sm text-center'>Already have an account? <Link href={'/login'} className='font-semibold text-blue-500'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
