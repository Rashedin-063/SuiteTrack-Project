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
import FlipCard from './animata/card/flip-card';

const Amenities = () => {
    return (
        <div className='bg-black mt-24 p-16 text-white'>
            <SectionTitle heading="Hotel's Amenities" description="A modern hotel offers a range of facilities to cater to diverse guest needs. From luxurious accommodations to state-of-the-art amenities, hotels strive to provide an unforgettable experience."></SectionTitle>
            <div className='flex gap-8 mt-12 max-w-4xl mx-auto'>
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/SnVNm5R/friends-with-wifi-signal-icon.jpg"
                    image={wifi}
                    rotate="y"
                    subtitle="Wi-Fi"
                    title="Wi-Fi"
                />
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/rsGfGc8/man-enjoying-food-while-being-home-alone-watching-tv.jpg"
                    image={TV}
                    rotate="y"
                    subtitle="Television"
                    title="Television"
                />
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/2spvMvr/front-view-bartender-preparing-drink.jpg"
                    image={bar}
                    rotate="y"
                    subtitle="Mini Bar"
                    title="Mini Bar"
                />
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/JxZg74P/white-pillow-bed.jpg"
                    image={blanket}
                    rotate="y"
                    subtitle="Blanket"
                    title="Blanket"
                />
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/pj5SHfJ/movie-theatre-quarantine.jpg"
                    image={theatre}
                    rotate="y"
                    subtitle="Theatre"
                    title="Theatre"
                />
                <FlipCard
                    description="Computer programming or coding is the composition of sequences of instructions."
                    backImg="https://i.ibb.co.com/m96Hbd2/sunny-summer-morning-young-athletic-woman-doing-handstand-city-park-street-modern-urban-buildings-ex.jpg"
                    image={yoga}
                    rotate="y"
                    subtitle="Yoga"
                    title="Yoga"
                />
            </div>
        </div>
    );
};

export default Amenities;