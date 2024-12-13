import Image from 'next/image';
import React from 'react';
import flower from "../Images/flower.png";

const SectionTitle = ({ heading, description }) => {
    return (
        <div>
            <p className="flex justify-center items-center text-[#bd9966] mb-2">__________<Image width={40} height={40} alt="Flower" src={flower} />__________</p>
            <h6 className="text-center text-4xl font-semibold uppercase">{heading}</h6>
            <p className="text-center text-[#bd9966] max-w-3xl mx-auto mt-2">{description}</p>
        </div>
    );
};

export default SectionTitle;