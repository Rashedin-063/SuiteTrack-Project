"use client"
import { doCredentialLogin } from '@/app/actions';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginForm = () => {

  const router = useRouter()

  async function onSubmit(event) {
    event.preventDefault();


    try {
      const formData = new FormData(event.currentTarget);
     return console.log('formData in login form', formData)
      
      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        toast.error(response.error);
      } else {
        router.push('/home');
      }
    } catch (e) {
      console.error(e);
      toast.error('Check your Credentials');
    }
  }

  return (
    <form
      className='my-5 mt-40 flex flex-col items-center border p-3 border-gray-200 rounded-md'
      onSubmit={onSubmit}
    >
      <div className='my-2'>
        <label htmlFor='email'>Email Address</label>
        <input
          className='border mx-2 border-gray-500 rounded'
          type='email'
          name='email'
          id='email'
        />
      </div>

      <div className='my-2'>
        <label htmlFor='password'>Password</label>
        <input
          className='border mx-2 border-gray-500 rounded'
          type='password'
          name='password'
          id='password'
        />
      </div>

      <button
        type='submit'
        className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'
      >
        Credential Login
      </button>
    </form>
  );
};
export default LoginForm;
