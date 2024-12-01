"use client"
import { FaCouch } from "react-icons/fa6";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Rating from '@mui/material/Rating';
import { BiLinkExternal } from "react-icons/bi";
import SectionTitle from "./SectionTitle";

const Rooms = () => {

    return (
        <div className="mt-24">
            <SectionTitle heading="SuiteTrack's Rooms & Suites" description="Elevate Your Hotel Operations with SuiteTrack. Our robust features cater to the specific needs of hotels of all sizes, from boutique inns to large resorts."></SectionTitle>
            <div className="h-[30rem] flex items-center justify-center gap-4">
                {
                    roomInfo?.map((roomData) => (
                        <DirectionAwareHover key={roomData.id} imageUrl={roomData.image} className="relative">
                            <div className="bg-[#00000026] p-2">
                                <p className="font-bold text-xl flex justify-between items-center">{roomData.name}<BiLinkExternal /></p>
                                <p className="font-normal text-sm">{roomData.size} SQ.FT/Rooms</p>
                                <div className="flex justify-between items-center gap-6 mt-6">
                                    <p className="flex items-center gap-2"><FaCouch></FaCouch> 2 King Bed</p>
                                    <Rating className="flex" value={5} />
                                </div>
                            </div>
                            <button className="bg-[#bd9966] absolute -right-0 bottom-72 px-4 py-2">${roomData.rent} | Night</button>
                        </DirectionAwareHover>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button className="bg-[#bd9966] text-white uppercase px-4 py-2">View More</button>
            </div>
        </div>
    );
};

export default Rooms;

const roomInfo = [
    {
        id: 1,
        name: "Double Suite Room",
        size: 1500,
        rent: 500,
        image: "https://i.ibb.co.com/MRKq7BF/cq5dam-web-1280-1280.jpg"
    },
    {
        id: 2,
        name: "Double Standard Room",
        size: 1500,
        rent: 500,
        image: "https://i.ibb.co.com/mtKcJ31/Sofitel-Dubai-Wafi-Luxury-Room-Bedroom-Skyline-View-Image1-WEB.jpg"
    },
    {
        id: 3,
        name: "Double Suite Room",
        size: 2000,
        rent: 700,
        image: "https://i.ibb.co.com/fGrjTqV/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
    },
    {
        id: 4,
        name: "Double Deluxe Room",
        size: 1000,
        rent: 600,
        image: "https://i.ibb.co.com/7vXs0Ng/hotel.jpg"
    },
]