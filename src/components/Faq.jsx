"use client"

import React from 'react';
import Lottie from 'lottie-react';
import faq from '../../public/faq.json'


const Faq = () => {
  return (
    <div className='max-w-screen-xl text-black mx-auto py-16'>
   <h1 className='text-center text-4xl font-bold '> Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 bg-[#FEF9F2] rounded-lg shadow-md md:grid-cols-2 gap-8 items-center p-8">
      <Lottie animationData={faq} className="w-full h-auto max-w-md" />
      <div className="space-y-4">
			<details className="w-full  rounded-lg">
				<summary className="px-4 py-6 text-gray-800">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full rounded-lg">
				<summary className="px-4 py-6 focus:outline-none text-gray-800">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full text-gray-800 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-800">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
      </div>

	
	</div>

  );
};

export default Faq;
