import React from 'react';
import Image from "next/image";
import { Timeline } from './ui/timeline';
import { FaArrowRightLong } from 'react-icons/fa6';

const FeaturedSection = () => {
  const data = [
    {
      title: "Concierge Service",
      content: (
        <div>
          <p className='uppercase text-[#BD9966] font-semibold'>concierge</p>
          <p className='text-xl uppercase font-semibold mt-1 hover:underline'>Stuff & Room service</p>
          <p className='text-2xl my-1 text-gray-600'>|</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our dedicated concierge team is committed to providing personalized assistance, ensuring your every need is met. From booking reservations to recommending local attractions, our concierge experts are here to enhance your stay.
          </p>
          <button className='border-2 border-[#BD9966] hover:bg-[#BD9966] p-2 uppercase text-black font-semibold flex items-center gap-2 mb-8'>View Details <FaArrowRightLong /></button>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fitness Center",
      content: (
        <div>
          <p className='uppercase text-[#BD9966] font-semibold'>Fitness</p>
          <p className='text-xl uppercase font-semibold mt-1 hover:underline'>Gym Training Grounds</p>
          <p className='text-2xl my-1 text-gray-600'>|</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our state-of-the-art fitness center is equipped with the latest cardio and strength training equipment. Whether you&apos;re a seasoned athlete or a casual fitness enthusiast, you&apos;ll find everything you need to maintain your workout routine.
          </p>
          <button className='border-2 border-[#BD9966] hover:bg-[#BD9966] p-2 uppercase text-black font-semibold flex items-center gap-2 mb-8'>View Details <FaArrowRightLong /></button>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Restaurant",
      content: (
        <div>
          <p className='uppercase text-[#BD9966] font-semibold'>Foods</p>
          <p className='text-xl uppercase font-semibold mt-1 hover:underline'>The Restaurant Center</p>
          <p className='text-2xl my-1 text-gray-600'>|</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Our on-site restaurant offers a diverse culinary experience, featuring delectable dishes prepared by our talented chefs. Savor the flavors of local and international cuisine, paired with fine wines.
          </p>
          <button className='border-2 border-[#BD9966] hover:bg-[#BD9966] p-2 uppercase text-black font-semibold flex items-center gap-2 mb-8'>View Details <FaArrowRightLong /></button>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mt-24">
      <Timeline data={data} />
    </div>
  );
};

export default FeaturedSection;