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
import img7 from "../Images/standard.png"
import img8 from "../Images/deluxe.png"
import img9 from "../Images/suite.png"
import img10 from "../Images/family.png"
import img11 from "../Images/wifi.png"
import img12 from "../Images/concierge.png"
import img13 from "../Images/laundry.png"
import img14 from "../Images/info-desk.png"
import img15 from "../Images/car-rent.png"
import img16 from "../Images/airport.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";


const Facilities = () => {

    return (
        <>
            <Carousel
                plugins={[Autoplay({ delay: 15000 })]}
                opts={{
                    align: "start",
                }}
                className="mt-20"
            >
                <CarouselContent className="max-w-7xl">
                    <CarouselItem className="">
                        <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center gap-2 p-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-4">
                                    <p className="border-4 border-red-700 bg-red-700 w-6 h-6"></p>
                                    <h1 className="text-5xl font-bold text-white uppercase">Serene Retreats</h1>
                                </div>
                                <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-red-700"><FaArrowRightLong></FaArrowRightLong></span></button>
                                <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="bg-red-700 text-black p-4"><FaArrowRightLong></FaArrowRightLong></span>
                                    <button className="flex items-center gap-2">House <FaArrowDown></FaArrowDown></button>
                                </div>
                                <div className="grid grid-cols-2 gap-4 bg-no-repeat bg-cover bg-center px-10 md:px-44 lg:px-28 py-12" style={{ backgroundImage: "url(https://i.postimg.cc/dtFK70k8/Blog-Dark-Moody-Bedroom-Hero.jpg)" }}>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img7} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Standard</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img8} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Deluxe</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img9} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Suite</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img10} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Family</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center p-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-4">
                                    <p className="border-4 border-red-700 bg-red-700 w-6 h-6"></p>
                                    <h1 className="text-5xl font-bold text-white uppercase">Our Facilities</h1>
                                </div>
                                <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-red-700"><FaArrowRightLong></FaArrowRightLong></span></button>
                                <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="bg-red-700 text-black p-4"><FaArrowRightLong></FaArrowRightLong></span>
                                    <button className="flex items-center gap-2">House <FaArrowDown></FaArrowDown></button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-no-repeat bg-cover bg-center px-8 py-12" style={{ backgroundImage: "url(https://i.postimg.cc/CMJr8g1Z/img6.jpg)" }}>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img1} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Parking</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img2} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">restaurant</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img3} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Spa</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img4} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Bar</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img5} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Banquet</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img6} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Gym</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="">
                        <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center p-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-4">
                                    <p className="border-4 border-red-700 bg-red-700 w-6 h-6"></p>
                                    <h1 className="text-5xl font-bold text-white uppercase">Our Amenities</h1>
                                </div>
                                <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-red-700"><FaArrowRightLong></FaArrowRightLong></span></button>
                                <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="bg-red-700 text-black p-4"><FaArrowRightLong></FaArrowRightLong></span>
                                    <button className="flex items-center gap-2">House <FaArrowDown></FaArrowDown></button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-no-repeat bg-cover bg-center px-8 py-12" style={{ backgroundImage: "url(https://i.postimg.cc/sXzGTNVB/img8.avif)" }}>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img11} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Wifi</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img12} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Concierge</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img13} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Laundry</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img14} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">24 Info desk</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img15} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Car rent</p>
                                    </div>
                                    <div className="bg-[#f9fafb80] border-2 border-white rounded-lg p-4">
                                        <div className="flex justify-center">
                                            <Image width="100" height="100" alt="Photo" src={img16} className="w-10"></Image>
                                        </div>
                                        <p className="text-center text-sm text-black uppercase pt-2">Airport Shuttle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};

export default Facilities;

