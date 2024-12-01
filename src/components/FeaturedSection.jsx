import React from 'react';
import { features } from '@/data'
import SectionTitle from './SectionTitle';

const FeaturedSection = () => {
  return (
    <section className=' py-12'>
      <SectionTitle heading="Features & Amenities" description="Create lasting memories with your loved ones. Our family-friendly hotel offers a range of activities and amenities, including a kids' club, outdoor pool, and spacious family rooms."></SectionTitle>
      <div className='container mx-auto text-center'>
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
