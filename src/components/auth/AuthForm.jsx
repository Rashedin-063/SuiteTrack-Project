
import { auth } from '@/../auth';
import userPlaceholder from '@../../public/user.png'
// import { redirect } from "next/navigation";
import Image from 'next/image';

import Logout from './Logout';
import Link from 'next/link';

const AuthForm = async () => {
  const session = await auth();
  // console.log(session);

  return (
    <div>
      {session ? (
        <div className='flex justify-center items-center gap-2'>
          <Image
            src={session?.user?.image ?? userPlaceholder}
            alt={session?.user?.name || 'user'}
            referrerPolicy='no-referrer'
            width={30}
            height={30}
            className='rounded-full w-10 h-10 object-cover'
          />
        <Logout/>
        </div>
      ) : (
          <div>
            <Link href="/login">
             <button className='bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700'>Login</button>
            </Link>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
