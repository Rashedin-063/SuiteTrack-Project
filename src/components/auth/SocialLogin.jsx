import { doSocialLogin } from '@/app/actions';
import { FaGithub, FaGoogle } from '@/data/icons';

const SocialLogin = () => {
  return (
    <form action={doSocialLogin} className='flex justify-between'>
      <button
        className='bg-red-500 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg w-36 flex gap-4 items-center'
        type='submit'
        name='action'
        value='google'
      >
        <FaGoogle />
        <span>Google</span>
      </button>

      <button
        className='bg-gray-500 hover:brightness-90 text-white py-2 px-6 rounded-md text-lg w-36 flex gap-4 items-center'
        type='submit'
        name='action'
        value='github'
      >
        <FaGithub />
        <span> Github</span>
      </button>
    </form>
  );
};
export default SocialLogin;
