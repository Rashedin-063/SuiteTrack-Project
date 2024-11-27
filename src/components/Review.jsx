"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { IoStar } from "react-icons/io5";

export function Review() {
    return (
        <div className="max-w-screen-xl mx-auto bg-[#1A1A1D]">
            <section className="py-12 ">
                <h2 className="text-4xl text-[#FEF9F2] text-center font-bold">Our client Review</h2>
                <p className="text-center py-2 text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, amet! Ducimus temporibus molestias qui <br />
                    deleniti eveniet possimus amet iste eum.
                </p>
                <div className="container mx-auto px-4">
                    <Marquee gradient={false} speed={50}>
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="w-[350px] h-96 mx-4 p-6 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg"
                            >
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            width={120}
                                            height={50}
                                            className=""
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-md font-bold text-gray-800">Name : {review.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">Company : {review.company}</p>
                                    </div>

                                    {/* review Box */}
                                    <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg relative">
                                        <div
                                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                                  border-l-[8px] border-l-transparent
                                  border-r-[8px] border-r-transparent
                                  border-b-[8px] border-b-gray-800"
                                        ></div>
                                        <p className="text-sm leading-relaxed">{review.review}</p>
                                    </div>

                                    {/* Name and Rating */}
                                    <div className="mt-4 text-center">

                                        <div className="flex justify-center gap-1">
                                            <IoStar className="text-[#FFD700] text-lg md:text-2xl lg:text-2xl" />
                                            <IoStar className="text-[#FFD700] text-lg md:text-2xl lg:text-2xl" />
                                            <IoStar className="text-[#FFD700] text-lg md:text-2xl lg:text-2xl" />
                                            <IoStar className="text-[#FFD700] text-lg md:text-2xl lg:text-2xl" />
                                            <IoStar className="text-[#FFD700] text-lg md:text-2xl lg:text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </div>
    );
}

const reviews = [
    {
        id: 1,
        name: "Alice Johnson",
        avatar: "https://i.ibb.co.com/QKCvZ27/client3.jpg",
        company: "Tech Co",
        review: "Amazing service! Highly recommended.",
    },
    {
        id: 2,
        name: "Bob Smith",
        avatar: "https://i.ibb.co.com/KjnLG7n/client4.jpg",
        company: "Design Inc",
        review: "Great experience working with this team.",
    },
    {
        id: 3,
        name: "Carol White",
        avatar: "https://i.ibb.co.com/qgq0VjL/client5.jpg",
        company: "Marketing Pro",
        review: "Exceeded our expectations in every way.",
    },
    {
        id: 4,
        name: "David Brown",
        avatar: "https://i.ibb.co.com/HhMCDdj/client6.jpg",
        company: "Startup X",
        review: "Innovative solutions and excellent support.",
    },
    {
        id: 5,
        name: "Eva Green",
        avatar: "https://i.ibb.co.com/hysRhVQ/client2.jpg",
        company: "Global Corp",
        review: "Reliable and professional. Would work with them again.",
    },
];
