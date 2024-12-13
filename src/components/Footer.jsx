import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';

const footerItems = [
  {
    title: 'Contact Us',
    link: 'mailto:support@SuitTrack.com',
    text: 'support@SuitTrack.com',
  },
  {
    title: 'About Us',
    link: '/about',
    text: 'Learn More About Us',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    text: 'Terms & Conditions',
  },
  {
    title: 'Social Links',
    icons: [
      { Icon: CiFacebook, link: 'https://facebook.com' },
      { Icon: BsTwitterX, link: 'https://twitter.com' },
      { Icon: FaLinkedin, link: 'https://linkedin.com' },
    ],
  },
];

const Footer = () => {
  return (
    <div className='bg-[rgb(29,29,29)]'>
      <footer className=' max-w-7xl mx-auto px-5 lg:px-10 lg:py-12 pt-20 text-darkPrimary'>
        <div>
          <div className='flex flex-col lg:flex lg:flex-row lg:justify-between space-y-6 lg:space-y-0'>
            <div className='space-y-6'>
              <h3 className='font-semibold text-3xl text-white'>
                Suite<span className='text-[#bd9966]'>Track</span>
              </h3>
              <p className='text-sm'>
                Experience hospitality like never before. Discover comfort, luxury, and impeccable service at every step of your journey.
              </p>
            </div>
            <div className='space-y-2'>
              <h3 className='text-2xl font-semibold'>
                Sign Up For Our Newsletter!
              </h3>
              <p className='text-sm max-w-xs'>
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <div className=''>
                <input
                  type='text'
                  placeholder='Your email address'
                  className='py-2 px-4 rounded-l-lg outline-none text-black'
                />
                <button className='px-4 py-2 bg-[#bd9966] text-white rounded-r-lg'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className='w-full mt-12 bg-[#1D1D1D] py-8'>
            <div className='max-w-7xl flex justify-between mx-auto px-4 lg:px-8'>
              {footerItems.map((item, index) => (
                <div key={index} className=' bg-gray-950 rounded-3xl  w-60 py-4'>
                  <p className='text-left lg:text-center font-semibold'>
                    {item.title}
                  </p>
                  {item.icons ? (
                    <div className='flex items-center justify-start lg:justify-center space-x-4 mt-2 '>
                      {item.icons.map(({ Icon, link }, iconIndex) => (
                        <Link
                          key={iconIndex}
                          href={link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Icon className='text-xl' />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className='text-left lg:text-center block mt-2'
                    >
                      {item.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='py-6 text-center bg-[#bd9966] text-white text-sm'>
          All rights reserved © 2024 | SuiteTrack
        </div>
      </footer>
    </div>
  );
};
export default Footer;
