"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import faq from '../../../public/faq.json'
import FaqText from './FaqText'
const faqData = [
  {
    question: "Ex orci laoreet egestas sapien magna egestas scelerisque?",
    answer: "Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est."
  },
  {
    question: "Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?",
    answer: "Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti."
  },
  {
    question: "Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?",
    answer: "Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className='max-w-screen-xl mx-auto py-16'>
      <motion.h2 
        className='text-4xl font-bold text-center text-[#020202] mb-12'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaqText />
      </motion.h2>
      <div className="grid grid-cols-1 bg-[#FEF9F2] rounded-lg shadow-md md:grid-cols-2 gap-8 items-center  p-8 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
            <Lottie animationData={faq}  className="w-full h-auto max-w-md" />
    
        </motion.div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <button
                  className="w-full px-4 py-6 text-black text-left font-semibold focus:outline-none   transition-colors duration-200 ease-in-out hover:bg-gray-50"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {item.question}
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-4 py-6 pt-0 text-black">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

