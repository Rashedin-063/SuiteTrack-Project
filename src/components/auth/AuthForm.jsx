
import { auth } from '@/../auth';

// import { redirect } from "next/navigation";
import Image from 'next/image';
import SocialLogin from './SocialLogin';
import Logout from './Logout';
import LoginForm from './LoginForm';

const AuthForm = async () => {
  const session = await auth();
  console.log(session);
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
        <Logout/>
        </div>
      ) : (
          <div>
            <LoginForm/>
          <SocialLogin />
        </div>
      )}
    </div>
  );
};

export default AuthForm;
