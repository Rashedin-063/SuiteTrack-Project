
import { auth } from '@/../auth';

// import { redirect } from "next/navigation";
import Image from 'next/image';
import SocialLogin from './SocialLogin';
import Logout from './Logout';

const AuthForm = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {session ? (
        <div className='flex justify-center items-center gap-2'>
          <Image
            src={session?.user?.image ?? session.user.photoURL}
            alt={session?.user?.name ?? session.user.displayName}
            referrerPolicy='no-referrer'
            width={36}
            height={36}
            className='rounded-full'
          />
        <Logout/>
        </div>
      ) : (
          <div>
          <SocialLogin />
        </div>
      )}
    </div>
  );
};

export default AuthForm;
