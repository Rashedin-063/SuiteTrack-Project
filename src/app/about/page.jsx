'use client';
import Image from 'next/image';
import React from 'react';
import { MdCurrencyExchange, MdOutlineBedroomParent } from 'react-icons/md';
import { GiCctvCamera, GiClothes } from 'react-icons/gi';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTv,
  FaTwitter,
  FaWifi,
} from 'react-icons/fa6';
import { FaCoffee } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import { IoStar } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div
        className='hero w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px]'
        style={{
          backgroundImage:
            'url(https://i.ibb.co.com/LJ2xdKd/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-phot.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-4xl sm:text-5xl font-bold'>About Us</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      {/* New Section 5: Eco-Friendly Initiatives */}
      <section className='py-20 bg-green-50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-3xl text-gray-800 font-bold text-center mb-12'
          >
            Our Eco-Friendly Initiatives
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid md:grid-cols-2 gap-8'
          >
            <motion.div variants={itemVariants} className='space-y-4'>
              <h3 className='text-2xl text-gray-800 font-semibold mb-4'>
                Committed to Sustainability
              </h3>
              <p className='text-gray-600'>
                We are dedicated to minimizing our environmental impact and
                promoting sustainable tourism. Our initiatives include:
              </p>
              <motion.ul
                variants={containerVariants}
                className='list-disc list-inside text-gray-600 space-y-2'
              >
                <motion.li variants={itemVariants}>
                  Solar power generation
                </motion.li>
                <motion.li variants={itemVariants}>
                  Water conservation programs
                </motion.li>
                <motion.li variants={itemVariants}>
                  Waste reduction and recycling
                </motion.li>
                <motion.li variants={itemVariants}>
                  Use of eco-friendly cleaning products
                </motion.li>
                <motion.li variants={itemVariants}>
                  Support for local conservation projects
                </motion.li>
              </motion.ul>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 ease-in-out'
              >
                Learn More About Our Green Initiatives
              </motion.button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className='relative h-96 rounded-lg overflow-hidden shadow-md'
            >
              <div className='relative h-96 rounded-lg overflow-hidden shadow-md'>
                <Image
                  src='https://i.ibb.co.com/Q9ZJdZW/DM-XMAS-2023-008.jpg'
                  alt='Eco-Friendly Practices'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* slider  */}

      <div className='my-12'>
        <h2 className='text-4xl text-center my-2 text-black'>
          Hotel Facilities
        </h2>
        <p className='text-md text-center text-gray-800'>
          Bring to the table win-win survival strategies to ensure proactive
          domination st the end of the day
        </p>
        <div className='container mx-auto'>
          <div className='bg-gray-100 text-black py-16 px-4'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {services.map((service, index) => (
                  <div key={index} className='flex items-start gap-6'>
                    <div className='rounded-full p-6 flex-shrink-0'>
                      <span className='text-3xl font-bold text-blue-600'>
                        {' '}
                        {service.icon}
                      </span>
                      {/* <MdOutlineBedroomParent className="w-8 h-8 text-[#B17F55]" /> */}
                    </div>
                    <div className='space-y-4'>
                      <h2 className='text-2xl font-serif'>{service.title}</h2>
                      <p className='text-gray-400 leading-relaxed'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Professionals */}
      <div className='py-8 px-4 bg-gray-300 rounded-md sm:px-6 lg:px-8'>
        <h2 className='text-black text-2xl sm:text-3xl text-center'>
          Professionals
        </h2>
        <h1 className='text-3xl sm:text-4xl font-bold text-black text-center mt-2'>
          Behind our Hotel
        </h1>
        <br />
        <div className='container mx-auto px-4 pt-8'>
          <Marquee>
            {professionals.map((person) => (
              <div
                key={person.name}
                className='w-[300px] mx-2 p-6 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg'
              >
                {/* Avatar */}
                <div className='relative'>
                  <div className='w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group'>
                    <Image
                      src={person.src}
                      alt={person.name}
                      width={150}
                      height={150}
                      className='transform transition-transform duration-300 group-hover:scale-110 object-cover'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h3 className='text-md font-bold text-gray-800'>
                      {person.name}
                    </h3>
                    <p className='text-sm text-gray-600 mb-2'> {person.role}</p>
                  </div>
                  <div className='flex gap-2 justify-center'>
                    <a
                      href='#'
                      aria-label='Facebook'
                      className='text-xl rounded-md text-gray-600 hover:text-blue-600'
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href='#'
                      aria-label='Github'
                      className='text-xl rounded-md text-gray-600 hover:text-blue-600'
                    >
                      <FaGithub />
                    </a>
                    <a
                      href='#'
                      aria-label='Linkedin'
                      className='text-xl rounded-md text-gray-600 hover:text-blue-600'
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href='#'
                      aria-label='Twitter'
                      className='gap-5 text-xl rounded-md text-gray-600 hover:text-blue-600'
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* New Section 7: Guest Reviews */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in-down'>
            What Our Guests Say
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                name: 'John D.',
                location: 'New York, USA',
                comment:
                  'Exceptional service and stunning views. Will definitely return!',
              },
              {
                name: 'Maria S.',
                location: 'London, UK',
                comment:
                  'The spa treatments were out of this world. So relaxing!',
              },
              {
                name: 'Hiroshi T.',
                location: 'Tokyo, Japan',
                comment:
                  'Impeccable attention to detail. A truly luxurious experience.',
              },
            ].map((review, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-blue-600 font-semibold'>name</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>review.name</h3>
                    <p className='text-gray-600 text-sm'>review.location</p>
                  </div>
                </div>
                <p className='text-gray-600 italic'>review.comment</p>
                <div className='flex mt-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStar
                      key={star}
                      className='h-5 w-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

const services = [
  {
    title: 'Free WiFi access',
    icon: <FaWifi />,
    description:
      'At the end of the day, going forward, a new normal that has evolved from generation is on the runway.',
  },
  {
    title: 'Free cable TV',
    icon: <FaTv />,
    description:
      'Right to find fault with a man who chooses to enjoy a pleasure that annoying consequences.',
  },
  {
    title: 'Exchange office',
    icon: <MdCurrencyExchange />,
    description:
      'Take a trivial example, which of us ever undertakes laborious physical obtain some advantage.',
  },
  {
    title: '24 Hrs Security',
    icon: <GiCctvCamera />,
    description:
      'Desires to obtain pain of itself it is because occasional circumstance some great pleasure.',
  },
  {
    title: 'Restaurant & cafe',
    icon: <FaCoffee />,
    description:
      'Take a trivial example, which of us ever undertakes laborious physical obtain some advantage.',
  },
  {
    title: '24 Hrs Security',
    icon: <GiCctvCamera />,
    description:
      'Desires to obtain pain of itself it is because occasional circumstance some great pleasure.',
  },
];
// professionals
const professionals = [
  {
    src: 'https://i.ibb.co.com/98yXrxv/155534222.jpg',
    name: 'Tahamina Hoq Any',
    role: 'Full-stack developer',
  },
  {
    src: 'https://i.ibb.co.com/swXsRck/fullstack-developer-html-css-bootstrap-tailwind-javascript-react-next-js-mongodb-firebase.png',
    name: 'Afrin',
    role: 'Full-stack developer',
  },
  {
    src: 'https://i.ibb.co.com/VSkr50W/138358968.jpg',
    name: 'Rasedin Islam',
    role: 'Full-stack developer',
  },
  {
    src: 'https://i.ibb.co.com/Rc7dcXn/110253020.png',
    name: 'Habib Hossian',
    role: 'Full-stack developer',
  },
  {
    src: 'https://i.ibb.co.com/QrGY7YY/115578505.jpg',
    name: 'Sabbir',
    role: 'Full-stack developer',
  },
];
