"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img1 from "../Images/parking.png"
import img2 from "../Images/restaurant.png"
import img3 from "../Images/spa.png"
import img4 from "../Images/bar.png"
import img5 from "../Images/banquet.png"
import img6 from "../Images/gym.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";


const Facilities = () => {

    const message = [
        {
            id: 1,
            title: "Bed"
        },
        {
            id: 1,
            title: "sofa"
        },
        {
            id: 1,
            title: "chair"
        },
        {
            id: 1,
            title: "Table"
        }
    ]

    return (
        <>
            <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                opts={{
                    align: "start",
                }}
                className="mt-20"
            >
                <CarouselContent>
                    {
                        message.map((data, index) => (
                            <CarouselItem key={index} className="">
                                <div className="border-2 border-white bg-black w-full h-[500px] mx-auto flex items-center p-10 rounded-3xl">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4">
                                            <p className="border-4 border-red-700 bg-red-700 w-6 h-6"></p>
                                            <h1 className="text-5xl font-bold text-white uppercase">Our Facilities</h1>
                                        </div>
                                        <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-red-700"><FaArrowRightLong></FaArrowRightLong></span></button>
                                        <p className="border-l-2 border-white ml-6 pl-10 pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <span className="bg-red-700 text-black p-4"><FaArrowRightLong></FaArrowRightLong></span>
                                            <button className="flex items-center gap-2">House <FaArrowDown></FaArrowDown></button>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 bg-no-repeat bg-cover bg-center px-8 py-12" style={{ backgroundImage: "url(https://i.postimg.cc/CMJr8g1Z/img6.jpg)" }}>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img1} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img2} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img3} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img4} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img5} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                            <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                                <div className="flex justify-center">
                                                    <Image width="100" height="100" alt="Photo" src={img6} className="w-10"></Image>
                                                </div>
                                                <p className="text-center text-sm text-black uppercase pt-2">Valet Parking</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

export default Facilities;