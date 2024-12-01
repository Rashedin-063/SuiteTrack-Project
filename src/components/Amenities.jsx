import React from 'react';
import SectionTitle from './SectionTitle';
import { GlareCard } from './ui/glare-card';
import Image from 'next/image';
import wifi from "../Images/wifi.png"
import TV from "../Images/TV.png"
import bar from "../Images/bar.png"
import blanket from "../Images/blanket.png"
import theatre from "../Images/theatre.png"
import yoga from "../Images/yoga.png"

const Amenities = () => {
    return (
        <div className='bg-black mt-24 p-16 text-white'>
            <SectionTitle heading="Hotel's Amenities" description="A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience."></SectionTitle>
            <div className='flex gap-8 mt-12 max-w-4xl mx-auto'>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={wifi}></Image>
                    <p className="text-white text-lg mt-4">Wi-Fi</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={TV}></Image>
                    <p className="text-white text-lg mt-4">Television</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={bar}></Image>
                    <p className="text-white text-lg mt-4">Mini Bar</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={blanket}></Image>
                    <p className="text-white text-lg mt-4">Blanket</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={theatre}></Image>
                    <p className="text-white text-lg mt-4">Theatre</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image width={40} height={40} alt='Wi-Fi' src={yoga}></Image>
                    <p className="text-white text-lg mt-4">Yoga</p>
                </GlareCard>
            </div>
        </div>
    );
};

export default Amenities;