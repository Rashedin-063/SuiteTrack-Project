import Link from "next/link"
import LoginForm from "./ui/LoginForm"



const Navbar = () => {
  

  return (
    <header className='p-4  text-lightPrimary'>
      <div className='container flex justify-between h-16 mx-auto'>
        <Link
          href='/'
          rel='noopener noreferrer'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <h2 className='text-2xl lg:text-3xl font-bold'>
            Suite<span className='text-lightSecondary'>Track</span>
          </h2>
        </Link>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          <li className='flex '>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2'
            >
              Home
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'
            >
              About
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='gallery'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'
            >
              Gallery
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='event'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'
            >
              Event
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'
            >
              Blog
            </Link>
          </li>
          <li className='flex'>
            <Link
              rel='noopener noreferrer'
              href='/contact'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='items-center flex-shrink-0 hidden lg:flex'>
     <LoginForm/>
         
        </div>
      </div>
    </header>
  );
}
export default Navbar