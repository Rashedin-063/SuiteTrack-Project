import { doSocialLogin } from '@/app/actions';
import { FaGithub, FaGoogle } from '@/data/icons';

const SocialLogin = () => {
  return (
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
  );
};
export default SocialLogin;
