import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from './ui/button';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const Offer = () => {
  // console.log(offerInfo);
  return (
    <div className='mt-24'>
      <Marquee>
        {
          offerInfo?.map((offerData) => (
            <div key={offerData.id} className='flex justify-center items-center border-x-8 border-white'>
              <div className='bg-[#00000066] bg-blend-multiply text-[#bd9966] text-center border-r-4 p-4' style={{
                backgroundImage: "url(https://i.postimg.cc/9X9JZgWH/interior-design-neoclassical-style-with-furnishings-decor-1.jpg)"
              }}>
                <div className='border-2 border-[#bd9966] py-4 px-10'>
                  <h6 className='text-white text-3xl font-bold uppercase'>{offerData.offer}% <br />off</h6>
                  <h6 className='border-2 border-[#bd9966] p-2 m-2 text-lg'>{offerData.category} Room</h6>
                  <ul>
                    {
                      offerData.speciality?.map((facilities, index) => (
                        <li key={index} className='flex items-center gap-1'><FaArrowRightLong />{facilities}</li>
                      ))
                    }
                  </ul>
                  <Link href="/rooms"><Button
                    borderradius="1.75rem"
                    className="dark:bg-white dark:text-white border-neutral-200 dark:border-white bg-[#bd9966] text-white p-2 m-2 uppercase text-sm rounded-none"
                  >
                    Book now
                  </Button></Link>
                </div>
              </div>
              <Image width={500} height={500} alt={offerData.category} src={offerData.image} className='w-[450px] h-[350px]' />
            </div>
          ))
        }
      </Marquee>
    </div >
  );
};

export default Offer;

const offerInfo = [
  {
    id: 1,
    category: 'Deluxe',
    offer: 45,
    image:
      'https://i.ibb.co.com/mRTGcnm/depositphotos-128166302-stock-photo-luxurious-bedroom-in-pastel-colours.webp',
    speciality: ['24/7 Service', 'Ocean view', '250 sqm', '8 person'],
  },
  {
    id: 2,
    category: 'Suite',
    offer: 40,
    image:
      'https://i.ibb.co.com/g3j7Cw2/05153526-11202122-presidential-suite-bedroom-2-cover-2000x1333-cover-1599x1066.jpg',
    speciality: ['24/7 Service', 'Mountain view', '230 sqm', '8 person'],
  },
  {
    id: 3,
    category: 'Standard',
    offer: 30,
    image:
      'https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg',
    speciality: ['24/7 Service', 'Sky view', '200 sqm', '8 person'],
  },
  {
    id: 4,
    category: 'Family',
    offer: 25,
    image:
      'https://i.ibb.co.com/THdnTL3/luxury-beige-brown-bedroom-hotel-room-home-with-large-bed-center-white-ivory-blank-wall-gray-linen-b.jpg',
    speciality: ['24/7 Service', 'Resort view', '180 sqm', '8 person'],
  },
];
