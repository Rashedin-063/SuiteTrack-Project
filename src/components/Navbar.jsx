import Link from 'next/link';
import AuthForm from './auth/AuthForm';

const Navbar = () => {
  return (
    <header className='container mx-auto p-4 px-5 lg:px-10 text-lightPrimary fixed z-50  bg-black/60 w-[92.1%]'>
      <div className=' flex justify-between  h-16'>
        <Link
          href='/'
          rel='noopener noreferrer'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <h2 className='text-2xl lg:text-3xl text-white font-bold'>
            Suite<span className='text-lightSecondary'>Track</span>
          </h2>
        </Link>
        <ul className='items-stretch hidden space-x-3 text-white lg:flex'>
          <li className='flex '>
            <Link
              rel='noopener noreferrer'
              href='/'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Home
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/rooms'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Room
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/gallery'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Gallery
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/event'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Event
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/about'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              About
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/contact'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Contact
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/dashboard'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div>
          <button>Login</button>
        </div>
        <div className='items-center flex-shrink-0 hidden lg:flex'>
          <AuthForm />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
