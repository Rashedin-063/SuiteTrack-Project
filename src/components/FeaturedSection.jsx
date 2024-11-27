import React from 'react';
import { features } from '@/data'
// import { Fade } from 'react-awesome-reveal';

const FeaturedSection = () => {
  return (
    <section className=' py-12 px-6'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-lightPrimary mb-8 lg:mb-12'>
          Features & Services
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
          {/* <Fade direction='up'> </Fade> */}
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white shadow-md drop-shadow-xl hover:scale-[1.02] hover:brightness-110 hover:drop-shadow-2xl transition duration-300 ease-in rounded-lg p-6 hover:shadow-lg'
            >
              <div className='text-5xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
