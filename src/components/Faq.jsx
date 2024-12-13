"use client"

import React from 'react';
import SectionTitle from './SectionTitle';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';
import service from "../Images/hotel-room-service.jpg"
import service2 from "../Images/staff-service.jpg"

const Faq = () => {
	const content = [
		{
			title: "What payment methods do you accept?",
			description:
				"Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.....",
			content: (
				<div className="h-full w-full flex items-center justify-center text-white">
					<Image width={500} height={500} alt='photo' src={service} />
				</div>
			),
		},
		{
			title: "Can I modify or cancel my booking?",
			description:
				"See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.....",
			content: (
				<div className="h-full w-full flex items-center justify-center text-white">
					<Image width={500} height={500} alt='photo' src={service2} />
				</div>
			),
		},
		{
			title: "What amenities are included in each room?",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.....",
			content: (
				<div className="h-full w-full flex items-center justify-center text-white">
					<Image width={500} height={500} alt='photo' src={service} />
				</div>
			),
		},
		{
			title: "Can you arrange transportation from the airport?",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.....",
			content: (
				<div className="h-full w-full flex items-center justify-center text-white">
					<Image width={500} height={500} alt='photo' src={service2} />
				</div>
			),
		},
		{
			title: "What are the check-in and check-out times?",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions......",
			content: (
				<div className="h-full w-full flex items-center justify-center text-white">
					<Image width={500} height={500} alt='photo' src={service} />
				</div>
			),
		},
	];
	return (
		<div className='max-w-screen-xl text-black mx-auto py-16'>
			<SectionTitle heading="Frequently Asked Questions"></SectionTitle>
			<div className="p-10">
				<StickyScroll content={content} />
			</div>
		</div>

	);
};

export default Faq;
