import { doLogout } from '@/app/actions';
const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className='bg-darkSecondary my-2 text-white py-1 px-3  hover:brightness-90 rounded-md'
        type='submit'
      >
        Logout
      </button>
    </form>
  );
};
export default Logout;
