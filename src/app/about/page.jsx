import Image from 'next/image';
import React from 'react';
import { MdCurrencyExchange, MdOutlineBedroomParent } from 'react-icons/md';
import { GiCctvCamera, GiClothes } from "react-icons/gi";
import { FaTv, FaWifi } from 'react-icons/fa6';
import { FaCoffee } from 'react-icons/fa';

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100">
            {/* Hero Section */}
            <div
                className="dark:bg-violet-600"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/LJ2xdKd/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-phot.webp')",
                    width: "100%",
                    height: "30vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex items-center justify-center h-full px-4 text-center bg-black bg-opacity-50">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
                        About Hotel
                    </h1>
                </div>
            </div><br />
            {/* about hottel */}
         <div className="bg-gray-200 p-2">
         <h1 className="text-3xl mt-2 font-bold text-center text-black">__About Our Hotel__</h1>
            <div className="hero bg-gray-200 text-black p-2">
            
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src="https://i.ibb.co.com/Q9ZJdZW/DM-XMAS-2023-008.jpg"
                        width={500}
                        height={300} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    <div className='justify-start'>
                     
                        <p className="py-2">
                            Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line
                        </p>
                        <p className="py-1 text-gray-500 text-justify">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                        </p>
                        <p className="py-2 text-justify">
                            At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                        </p>

                    </div>
                </div>
            </div>
         </div>
            {/* our services */}
            <div className='my-12'>
                <h2 className='text-5xl text-center my-2 text-black'>Hotel Facilities</h2>
                <p className='text-md text-center text-gray-800'>Bring to the table win-win survival strategies to ensure proactive domination st the end of the day
                </p>
                <div className="container mx-auto">
                    <div className="bg-gray-100 text-black py-16 px-4">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="rounded-full bg-[#dbdbdb] p-6 flex-shrink-0">
                                           <span className='text-3xl'> {service.icon}</span>
                                            {/* <MdOutlineBedroomParent className="w-8 h-8 text-[#B17F55]" /> */}
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-serif">{service.title}</h2>
                                            <p className="text-gray-400 leading-relaxed">
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
            <div className='py-8'>
                <h2 className="text-black text-2xl text-center">Professionals</h2>
                <h1 className="text-4xl font-bold text-black text-center">Behind our Hotel</h1><br />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            src: "https://i.ibb.co.com/HhMCDdj/client6.jpg",
                            name: "Leroy Jenkins",
                            role: "Full-stack developer",
                        },
                        {
                            src: "https://i.ibb.co.com/qgq0VjL/client5.jpg",
                            name: "Leroy Jenkins",
                            role: "Full-stack developer",
                        },
                        {
                            src: "https://i.ibb.co.com/KjnLG7n/client4.jpg",
                            name: "Leroy Jenkins",
                            role: "Full-stack developer",
                        },
                        {
                            src: "https://i.ibb.co.com/QKCvZ27/client3.jpg",
                            name: "Leroy Jenkins",
                            role: "Full-stack developer",
                        },
                    ].map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center max-w-xs mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800"
                        >
                            <Image
                                src={person.src}
                                width={300}
                                height={300}
                                alt={person.name}
                                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                            />
                            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{person.name}</h2>
                                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">{person.role}</p>
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        aria-label="GitHub"
                                        className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                                    >
                                        {/* Add your icons */}
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        aria-label="Dribble"
                                        className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                                    >
                                        {/* Add your icons */}
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        aria-label="Twitter"
                                        className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                                    >
                                        {/* Add your icons */}
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        href="#"
                                        aria-label="Email"
                                        className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                                    >
                                        {/* Add your icons */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    );
};

export default Page;
const services = [
    {
        title: "Free WiFi access",
        icon: <FaWifi />,
        description: "At the end of the day, going forward, a new normal that has evolved from generation is on the runway."
    },
    {
        title: "Free cable TV",
        icon: <FaTv />,
        description: "Right to find fault with a man who chooses to enjoy a pleasure that annoying consequences."
    },
    {
        title: "Exchange office",
        icon: <MdCurrencyExchange />,
        description: "Take a trivial example, which of us ever undertakes laborious physical obtain some advantage."
    },
    {
        title: "24 Hrs Security",
        icon: <GiCctvCamera />,
        description: "Desires to obtain pain of itself it is because occasional circumstance some great pleasure."
    },
    {
        title: "Restaurant & cafe",
        icon: <FaCoffee />,
        description: "Take a trivial example, which of us ever undertakes laborious physical obtain some advantage."
    },
    {
        title: "24 Hrs Security",
        icon: <GiCctvCamera />,
        description: "Desires to obtain pain of itself it is because occasional circumstance some great pleasure."
    }
]