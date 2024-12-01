// "use client"

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import img1 from "../Images/parking.png"
// import img2 from "../Images/restaurant.png"
// import img3 from "../Images/spa.png"
// import img4 from "../Images/bar.png"
// import img5 from "../Images/banquet.png"
// import img6 from "../Images/gym.png"
// import img7 from "../Images/standard.png"
// import img8 from "../Images/deluxe.png"
// import img9 from "../Images/suite.png"
// import img10 from "../Images/family.png"
// import img11 from "../Images/wifi.png"
// import img12 from "../Images/concierge.png"
// import img13 from "../Images/laundry.png"
// import img14 from "../Images/info-desk.png"
// import img15 from "../Images/car-rent.png"
// import img16 from "../Images/airport.png"
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowDown } from "react-icons/fa";
// import Rating from '@mui/material/Rating';


// const RoomSection = () => {


//     return (
//         <>
//             <Carousel
//                 plugins={[Autoplay({ delay: 1500 })]}
//                 opts={{
//                     align: "start",
//                 }}
//                 className="mt-20"
//             >
//                 <CarouselContent className="max-w-7xl">
//                     <CarouselItem className="relative">
//                         <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center gap-2 p-10">
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-4">
//                                     <p className="border-4 border-[#b41a1a] bg-white w-6 h-6"></p>
//                                     <h1 className="text-5xl font-bold text-white uppercase">Discover Our Rooms</h1>
//                                 </div>
//                                 <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-[#b41a1a]"><FaArrowRightLong></FaArrowRightLong></span></button>
//                                 <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
//                             </div>
//                             <div className="flex-1">
//                                 <div className="flex justify-between items-center">
//                                     <span className="bg-[#b41a1a80] text-white p-4"><FaArrowRightLong></FaArrowRightLong></span>
//                                     <button className="flex items-center text-white bg-[#b41a1a80] p-2 rounded-lg gap-2">Featured <FaArrowDown></FaArrowDown></button>
//                                 </div>
//                                 <iframe width="560" height="315" src="https://www.youtube.com/embed/MnuQLIktb5o?si=g8X73FRzkV6U7TbL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                             </div>
//                         </div>
//                         <div className="bg-[#b41a1a80] flex justify-center items-center gap-28 p-4 max-w-2xl mx-auto absolute -bottom-0 left-[400px]">
//                             <p className="text-[#bd9966] font-bold text-2xl">$1000.00/<span className="font-normal text-lg text-white">night</span></p>
//                             <Rating value={5} />
//                         </div>
//                     </CarouselItem>
//                     <CarouselItem className="relative">
//                         <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center gap-2 p-10">
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-4">
//                                     <p className="border-4 border-[#b41a1a] bg-white w-6 h-6"></p>
//                                     <h1 className="text-5xl font-bold text-white uppercase">Discover Our Rooms</h1>
//                                 </div>
//                                 <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-[#b41a1a]"><FaArrowRightLong></FaArrowRightLong></span></button>
//                                 <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
//                             </div>
//                             <div className="flex-1">
//                                 <div className="flex justify-between items-center">
//                                     <span className="bg-[#b41a1a80] text-white p-4"><FaArrowRightLong></FaArrowRightLong></span>
//                                     <button className="flex items-center text-white bg-[#b41a1a80] p-2 rounded-lg gap-2">Featured <FaArrowDown></FaArrowDown></button>
//                                 </div>
//                                 <iframe width="560" height="315" src="https://www.youtube.com/embed/Cm05NBgtOso?si=i-Fdk_aoXrQCNHlh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                             </div>
//                         </div>
//                         <div className="bg-[#b41a1a80] flex justify-center items-center gap-28 p-4 max-w-2xl mx-auto absolute -bottom-0 left-[400px]">
//                             <p className="text-[#bd9966] font-bold text-2xl">$1500.00/<span className="font-normal text-lg text-white">night</span></p>
//                             <Rating value={4.5} />
//                         </div>
//                     </CarouselItem>
//                     <CarouselItem className="relative">
//                         <div className="border-2 border-white bg-black lg:w-[1100px] lg:h-[500px] mx-auto lg:flex items-center gap-2 p-10">
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-4">
//                                     <p className="border-4 border-[#b41a1a] bg-white w-6 h-6"></p>
//                                     <h1 className="text-5xl font-bold text-white uppercase">Discover Our Rooms</h1>
//                                 </div>
//                                 <button className="text-white font-thin uppercase border-2 border-white flex items-center gap-2 p-2 my-8 hover:bg-slate-800">Discover More <span className="text-[#b41a1a]"><FaArrowRightLong></FaArrowRightLong></span></button>
//                                 <p className="border-l-2 border-white text-white ml-6 pl-10 md:pr-8 py-4">A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience</p>
//                             </div>
//                             <div className="flex-1">
//                                 <div className="flex justify-between items-center">
//                                     <span className="bg-[#b41a1a80] text-white p-4"><FaArrowRightLong></FaArrowRightLong></span>
//                                     <button className="flex items-center text-white bg-[#b41a1a80] p-2 rounded-lg gap-2">Featured <FaArrowDown></FaArrowDown></button>
//                                 </div>
//                                 <iframe width="560" height="315" src="https://www.youtube.com/embed/hQ0n9gxAAmc?si=VtoqGHjp84d5lnXL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                             </div>
//                         </div>
//                         <div className="bg-[#b41a1a80] flex justify-center items-center gap-28 p-4 max-w-2xl mx-auto absolute -bottom-0 left-[400px]">
//                             <p className="text-[#bd9966] font-bold text-2xl">$10000.00/<span className="font-normal text-lg text-white">night</span></p>
//                             <Rating value={5} />
//                         </div>
//                     </CarouselItem>
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </>
//     );
// };

// export default RoomSection;

