'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GrUserAdmin,
  GrLogout,
  GrDocumentConfig,
  GrDocumentCloud,
} from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import { FaRegAddressCard, FaUserCog } from 'react-icons/fa';
import { TbVocabulary } from 'react-icons/tb';
import logo from '@/../public/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-400 text-gray-100 flex justify-between lg:hidden'>
        <div className='p-4 bg-gray-300'>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              width={90}
              height={60}
              className='drop-shadow-xl'
            />
          </Link>
        </div>
        <button
          onClick={handleToggle}
          className='py-4 px-10 focus:outline-none bg-gray-300 text-black'
        >
          <AiOutlineBars className='h-6 w-6' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-800 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isOpen && 'translate-x-0'
        }  lg:translate-x-0  transition duration-300 ease-in-out`}
      >
        <div>
          <div className='w-full px-4 py-2 shadow-lg rounded-lg flex justify-center items-center bg-gray-800 z-50'>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                width={150}
                height={100}
                className='drop-shadow-xl'
              />
            </Link>
          </div>

          {/* Nav Items */}
          <nav className='mt-6 text-white'>
            <Link
              href='/dashboard/rooms'
              className='flex items-center px-4 py-2 rounded-full hover:text-rose-500'
            >
              <MdOutlineArticle size={24} />
              <span className='mx-4 font-medium'>Rooms</span>
            </Link>
            <Link
              href='/dashboard/add-rooms'
              className='flex items-center px-4 py-2 rounded-full hover:text-rose-500'
            >
              <FaRegAddressCard className='w-5 h-5' />
              <span className='mx-4 font-medium'>Add Rooms</span>
            </Link>
            <Link
              href='/add-packages'
              className='flex items-center px-4 py-2 rounded-full hover:text-rose-500'
            >
              <TbVocabulary size={22} />
              <span className='mx-4 font-medium'>Add Packages</span>
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div>
          <div className='bg-black h-[1px] w-11/12 mx-auto'></div>
          <Link
            href='/profile'
            className='flex items-center px-4 py-2 rounded-full hover:text-rose-500'
          >
            <GrUserAdmin className='w-5 h-5' />
            <span className='mx-4 font-medium'>Profile</span>
          </Link>
          <button className='flex w-full items-center px-4 py-2 rounded-full text-faded-pearl hover:text-amber-glow'>
            <GrLogout className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
