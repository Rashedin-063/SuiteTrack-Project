"use client"
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center py-4'>Gallery </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    gallery.map(gal => <div key={gal.id}>
                        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Image src={gal.image_url} width={3000} height={50} alt="" className="block object-cover w-fll object-center rounded-md h-72 dark:bg-gray-500" />
                                    <div className="flex items-center text-lg">
                                        <span>{gal.category}</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-xl font-semibold dark:text-gray-600">{gal.title}</h3>
                                    </a>
                                    <p className="leading-snug dark:text-gray-600">{gal.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;


const gallery = [
    {
        "id": 1,
        "image_url": "https://i.ibb.co.com/w0BWT1q/restaurant-2-1.jpg",
        "title": "Elegant Dining Area",
        "description": "A modern restaurant setting perfect for fine dining.",
        "category": "Dining"
    },
    {
        "id": 2,
        "image_url": "https://i.ibb.co.com/G9bvG1F/restaurant-1-1.jpg",
        "title": "Cozy Restaurant",
        "description": "Enjoy a cozy ambiance with delicious cuisine.",
        "category": "Dining"
    },
    {
        "id": 3,
        "image_url": "https://i.ibb.co.com/F7TqZRh/other-2-1.jpg",
        "title": "Spacious Banquet Hall",
        "description": "A grand venue for celebrations and events.",
        "category": "Facilities"
    },
    {
        "id": 4,
        "image_url": "https://i.ibb.co.com/T2wqRN1/insta-img-1.jpg",
        "title": "Luxury Suite Interior",
        "description": "A sneak peek into our luxurious and elegant suites.",
        "category": "Rooms"
    },
    {
        "id": 5,
        "image_url": "https://i.ibb.co.com/JrLJmxk/insta-img-2.jpg",
        "title": "Relaxing Spa Area",
        "description": "Rejuvenate your senses in our tranquil spa facilities.",
        "category": "Amenities"
    },
    {
        "id": 6,
        "image_url": "https://i.ibb.co.com/YNQH0db/insta-img-3.jpg",
        "title": "Infinity Pool View",
        "description": "A serene poolside view to unwind and relax.",
        "category": "Amenities"
    },
    {
        "id": 7,
        "image_url": "https://i.ibb.co.com/vQmRqpR/insta-img-4.jpg",
        "title": "Grand Lobby",
        "description": "Our elegant and welcoming lobby area.",
        "category": "Facilities"
    },
    {
        "id": 8,
        "image_url": "https://i.ibb.co.com/DwDLD6X/island-img-4.jpg",
        "title": "Outdoor Dining",
        "description": "Dine under the stars in our serene outdoor area.",
        "category": "Dining"
    },
    {
        "id": 9,
        "image_url": "https://i.ibb.co.com/bgZKkrp/island-1-1.jpg",
        "title": "Island View Suite",
        "description": "Rooms with stunning views of the nearby islands.",
        "category": "Rooms"
    }
];
