import Link from "next/link"
import AuthForm from './ui/AuthForm';



const Navbar = () => {


  return (
    <header className='bg-[#00000080] p-4  text-lightPrimary fixed z-10'>
      <div className='container flex justify-between h-14 lg:min-w-[1168px] mx-auto'>
        <Link
          href='/'
          rel='noopener noreferrer'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <h2 className='text-2xl lg:text-3xl font-bold text-white'>
            Suite<span className='text-lightSecondary'>Track</span>
          </h2>
        </Link>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          <li className='flex '>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 text-white hover:underline'
            >
              Home
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='about'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'

              href='#'
              className='flex items-center px-4 -mb-1 text-white hover:underline'

            >
              Rooms
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='gallery'
              className='flex items-center px-4 -mb-1 text-white hover:underline'
            >
              Gallery
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='event'
              className='flex items-center px-4 -mb-1 text-white hover:underline'
            >
              Event
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 text-white hover:underline'
            >
              About
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/contact'
              className='flex items-center px-4 -mb-1 text-white hover:underline'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='items-center flex-shrink-0 hidden lg:flex'>
          <AuthForm />
        </div>
      </div>
    </header>
  );
}
export default Navbar