import { doLogout, doSocialLogin } from '@/app/actions';
import { auth } from "@/../auth";
import {FaGithub, FaGoogle} from "@/data/icons"

// import { redirect } from "next/navigation";
import Image from 'next/image';
   

const AuthForm = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div>
      {session ? (
        <div className='flex justify-center items-center gap-2'>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            referrerPolicy='no-referrer'
            width={36}
            height={36}
            className='rounded-full'
          />
          <form action={doLogout}>
            <button
              className='bg-darkSecondary my-2 text-white py-1 px-3  hover:brightness-90 rounded-md'
              type='submit'
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <form action={doSocialLogin} className='flex gap-2'>
          <button
            className='bg-red-500 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg'
            type='submit'
            name='action'
            value='google'
          >
            <FaGoogle />
          </button>

          <button
            className='bg-gray-700 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg'
            type='submit'
            name='action'
            value='github'
          >
            <FaGithub />
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
