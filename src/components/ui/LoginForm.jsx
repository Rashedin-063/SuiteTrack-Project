"use serve"
import { doSocialLogin } from '@/app/actions';
import { auth } from "@/../auth";

// import { redirect } from "next/navigation";
import Image from 'next/image';
   

const LoginForm = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div>
      {session ? (
        <h1>{session?.user?.name}</h1>
       
      ) : (
        <form action={doSocialLogin} className='flex gap-2'>
          <button
            className='bg-pink-400 text-white p-1 rounded-md m-1 text-lg'
            type='submit'
            name='action'
            value='google'
          >
            Sign In With Google
          </button>

          <button
            className='bg-black text-white p-1 rounded-md m-1 text-lg'
            type='submit'
            name='action'
            value='github'
          >
            Sign In With GitHub
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
