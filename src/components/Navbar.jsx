import Link from "next/link"
import AuthForm from './ui/AuthForm';



const Navbar = () => {


  return (
    <header className='p-4  text-lightPrimary fixed z-10 bg-[#00000066]'>
      <div className='container flex justify-around h-16 lg:min-w-[1168px] mx-auto'>
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
              href='#'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Home
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Room
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='gallery'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Gallery
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='event'
              className='flex items-center px-4 -mb-1 hover:underline'
            >
              Event
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='#'
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
        </ul>
        <div className='items-center flex-shrink-0 hidden lg:flex'>
          <AuthForm />
        </div>
      </div>
    </header>
  );
}
export default Navbar