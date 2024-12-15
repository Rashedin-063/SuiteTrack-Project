"use client"
// import Navbar from '@/components/Navbar';
// import Image from 'next/image';
// import React from 'react';

// const page = () => {
//     return (
//         <div className='max-w-7xl mx-auto'>
//             <h2 className='text-4xl font-bold text-center py-4'>Gallery </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
//                 {
//                     gallery.map(gal => <div key={gal.id}>
//                         <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
//                             <div className="space-y-4">
//                                 <div className="space-y-2">
//                                     <Image src={gal.image_url} width={3000} height={50} alt="" className="block object-cover w-fll object-center rounded-md h-72 dark:bg-gray-500" />
//                                     <div className="flex items-center text-lg">
//                                         <span>{gal.category}</span>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <a rel="noopener noreferrer" href="#" className="block">
//                                         <h3 className="text-xl font-semibold dark:text-gray-600">{gal.title}</h3>
//                                     </a>
//                                     <p className="leading-snug dark:text-gray-600">{gal.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default page;
import Image from 'next/image';
import React, { useState } from 'react';

const categories = ["All", "Dining", "Rooms", "GYM", "Facilities", "Spa"];

const Gallery = () => {
    const [currentCategory, setCurrentCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

    const filteredGallery = currentCategory === "All" 
        ? gallery 
        : gallery.filter(item => item.category === currentCategory);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredGallery.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="bg-gray-200 text-black">
          <div className='max-w-7xl  mx-auto px-4 py-8'>
            <h2 className='text-4xl font-bold text-center py-4'>Gallery</h2>
            
            <div className="flex justify-center space-x-4 mb-6">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => {
                            setCurrentCategory(category);
                            setCurrentPage(1);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {currentItems.map(gal => (
                    <div key={gal.id} className="max-w-lg rounded-2xl shadow-md">
                        <div className="space-y-4">
                            <div className="space-y-2 overflow-hidden">
                                <div className="relative group">
                                    <Image 
                                        src={gal.image_url} 
                                        width={3000} 
                                        height={50} 
                                        alt={gal.title}
                                        className="block object-cover w-full object-center rounded-2xl  h-72 dark:bg-gray-500 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex rounded-2xl items-center   justify-center opacity-0 group-hover:opacity-100">
                                        <div className="text-white text-center p-4">
                                            <h3 className="text-xl font-bold">{gal.title}</h3>
                                            <p className="mt-2">{gal.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                {Array.from({ length: Math.ceil(filteredGallery.length / itemsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
      </div>
    );
};



const gallery = [{
        id: 1,
        image_url: "https://i.ibb.co.com/w0BWT1q/restaurant-2-1.jpg",
        title: "Elegant Dining Area",
        description: "A modern restaurant setting perfect for fine dining.",
        category: "Dining"
    },
    {
        id: 2,
        image_url: "https://i.ibb.co.com/G9bvG1F/restaurant-1-1.jpg",
        title: "Cozy Restaurant Dining",
        description: "Enjoy a cozy ambiance with delicious cuisine.",
        category: "Dining"
    },
    {
        id: 3,
        image_url: "https://i.ibb.co.com/6RNyKKM/friends-sitting-dining-table-celebrating-52137-2550.jpg",
        title: "Our Dining",
        description: "Enjoy a cozy ambiance with delicious cuisine.",
        category: "Dining"
    },
    {
        id: 4,
        image_url: "https://i.ibb.co.com/vqKyY7B/1645067710-16622596724.jpg",
        title: "New Dining",
        description: "Enjoy a cozy ambiance with delicious cuisine.",
        category: "Dining"
    },
    {
        id: 5,
        image_url: "https://i.ibb.co.com/SdQpd2L/istockphoto-1311487470-612x612.jpg",
        title: "welcome Dining",
        description: "Enjoy a cozy ambiance with delicious cuisine.",
        category: "Dining"
    },
    {
        id: 7,
        image_url: "https://i.ibb.co.com/LJ2xdKd/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-phot.webp",
        title: "Nice Dining",
        description: "A sneak peek into our luxurious and elegant suites.",
        category: "Rooms"
    },
    {
        id: 8,
        image_url: "https://i.ibb.co.com/0DYsCv8/Long-Beach-Hotel-Coxs-Bazar-Exterior.jpg",
        title: "Relaxing Spa Area rom",
        description: "Rejuvenate your senses in our tranquil spa facilities.",
        category: "Rooms"
    },
    {
        id: 9,
        image_url: "https://i.ibb.co.com/tcBfgvR/c5aa406eece8558e8f076316ceff665a7427-1280x720.webp",
        title: "Infinity Pool View",
        description: "A serene poolside view to unwind and relax.",
        category: "Rooms"
    },
    {
        id: 10,
        image_url: "https://i.ibb.co.com/Hq8wJ1c/360-F-619000872-Axiw-Lsf-Qq-RHMk-Nx-Ab-N4l5wg1-Ms-Pg-Bsmo.jpg",
        title: "Grand Lobby",
        description: "Our elegant and welcoming lobby area.",
        category: "Rooms"
    },
    
    {
        id: 11,
        image_url: "https://i.ibb.co.com/XWtDxQz/hotel-room-with-beachfront-view.jpg",
        title: "Island View Suite",
        description: "Rooms with stunning views of the nearby islands.",
        category: "Rooms"
    },
    {
        id: 12,
        image_url: "https://i.ibb.co.com/3TK5PZd/360-F-475768676-wmw-EVWYWNlcqa-Moj4khb4-GF3-F0f4f7-TF.jpg",
        title: "Outdoor ",
        description: "Dine under the stars in our serene outdoor area.",
        category: "Rooms"
    },
    {
        id: 13, 
        title: "Outdoor Room ",
        image_url: "https://i.ibb.co.com/tcBfgvR/c5aa406eece8558e8f076316ceff665a7427-1280x720.webp",
        description: "Rooms with stunning views of the nearby islands.",
        category: "Rooms"
    },
        {
            id: 14,
            title: "Outdoor Room",
            image_url: "https://i.ibb.co.com/n3dXfDm/getting-some-elevation-those-pushups-full-length-shot-young-man-working-out-gym-590464-33711.jpg",
            description: "Rooms with stunning views of the nearby islands.",
            category: "GYM"
        },
        {
            id: 15,
            title: "Strength Zone",
            image_url: "https://i.ibb.co.com/Fw1GDXf/360-F-498763970-XD0-R6d-Ptnsd-Vl-LGy-Iuxq-XHezfnc1s1g4.jpg",
            description: "A dedicated area for weightlifting and strength training.",
            category: "GYM"
        },
        {
            id: 16,
            title: "Cardio Studio",
            image_url: "https://i.ibb.co.com/T8WZGK3/Planning-to-Install-a-Gym-in-your-Society-Banner-1200x620.jpg",
            description: "Equipped with treadmills, cycling machines, and ellipticals.",
            category: "GYM"
        },
        {
            id: 17,
            title: "Yoga and Relaxation Room",
            image_url: "https://i.ibb.co.com/yV1KPJR/how-much-joining-gym-helps-health-2-jpg-1488906648.jpg",
            description: "A serene space for yoga and meditation practices.",
            category: "GYM"
        },
        {
            id: 18,
            title: "Functional Fitness Area",
            image_url: "https://i.ibb.co.com/3dqBDBx/man-doing-push-ups-with-barbell-background-1064589-40023.jpg",
            description: "Perfect for HIIT and functional fitness workouts.",
            category: "GYM"
        },
        {
            id: 19,
            title: "Functional Fitness Area",
            image_url: "https://i.ibb.co.com/kc9C4Pk/young-sportwoman-hijab-doing-physical-exercise-274679-29664.jpg",
            description: "Perfect for HIIT and functional fitness workouts.",
            category: "GYM"
        },
        {
            id: 20,
            title: "Functional Fitness Area",
            image_url: "https://i.ibb.co.com/vZ8qdDY/istockphoto-1056286622-612x612.jpg",
            description: "Perfect for HIIT and functional fitness workouts.",
            category: "GYM"
        },
        {
            id: 21,
            title: "Functional Fitness Area",
            image_url: "https://i.ibb.co.com/KwWrV4z/muslim-woman-hijab-exercising-gym-152904-4961.jpg",
            description: "Perfect for HIIT and functional fitness workouts.",
            category: "GYM"
        },
        {
            id: 22,
            title: "Functional Fitness Area",
            image_url: "https://i.ibb.co.com/9NmHtT0/istockphoto-1293917526-612x612.jpg",
            description: "Perfect for HIIT and functional fitness workouts.",
            category: "GYM"
        },
        {
            id: 23,
            title: "Swimming Pool",
            image_url: "https://i.ibb.co.com/sCnNQL7/1905-MZN-BLOOM-01-edited-sfw.jpg",
            description: "Enjoy a relaxing swim or energetic laps in our clean and spacious pool.",
            category: "Facilities"
        },
        {
            id: 24,
            title: "Spa and Sauna",
            image_url: "https://i.ibb.co.com/HNRmmFY/GLC136.jpg",
            description: "Unwind with our premium spa and sauna services, perfect for rejuvenation.",
            category: "Facilities"
        },
        {
            id: 25,
            title: "Conference Hall",
            image_url: "https://i.ibb.co.com/FXD55KG/unnamed.jpg",
            description: "Host your business meetings or events in our fully equipped hall.",
            category: "Facilities"
        },
        {
            id: 26,
            title: "Children’s Play Area",
            image_url: "https://i.ibb.co.com/bR4Hc8w/slip-resistant-solutions-for-childrens-play-areas-safe-fun-spaces-for-kids-to-enjoy-132865.webp",
            description: "A safe and fun area for kids to play and enjoy themselves.",
            category: "Facilities"
        },
        {
            id: 27,
            title: "Indoor Games Room",
            image_url: "https://i.ibb.co.com/zZP6m29/gameroomlouisduncan-he123-830ee752304a4cbcac249732558d9c3d.jpg",
            description: "Challenge your friends to a game of table tennis, chess, or other fun activities.",
            category: "Facilities"
        },
        {
            id: 28,
            title: "Jogging Track",
            image_url: "https://i.ibb.co.com/7pp2Hfq/running-track-500x500-1.jpg",
            description: "Keep fit with our dedicated jogging track amidst greenery.",
            category: "Facilities"
        },
        {
            id: 29,
            title: "Rooftop Lounge",
            image_url: "https://i.ibb.co.com/9tW38QV/f79341137f79e2c0918b07f47cf52604.jpg",
            description: "Relax with stunning views and cozy seating at our rooftop lounge.",
            category: "Facilities"
        },
        {
            id: 30,
            title: "Library and Reading Area",
            image_url: "https://i.ibb.co.com/VgB0QFw/belmar-public-library-reading-room-d1200-628.webp",
            description: "A peaceful corner to read and study with a wide collection of books.",
            category: "Facilities"
        },
        {
            id: 31,
            title: "24/7 Security",
            image_url: "https://i.ibb.co.com/b68Jf6V/24-7-Security-Service-officers-Our-Story.jpg",
            description: "Feel safe and secure with round-the-clock professional security services.",
            category: "Facilities"
        },
        {
            id: 32,
            title: "Aromatherapy Massage",
            image_url: "https://i.ibb.co.com/JFsG6wB/aromatherapy-massage-scaled-e1582251557268.jpg",
            description: "Relax with soothing essential oils and rejuvenating massage techniques.",
            category: "Spa"
        },
        {
            id: 33,
            title: "Hot Stone Therapy",
            image_url: "https://i.ibb.co.com/zsgSJLk/Hot-Stone-title-Pic-scaled.jpg",
            description: "Experience deep relaxation with warm stones placed on key points of your body.",
            category: "Spa"
        },
        {
            id: 34,
            title: "Facial Treatment",
            image_url: "https://i.ibb.co.com/L1q9Tqg/Women-Receiving-Facial-Treatment-min.jpg",
            description: "Rejuvenate your skin with our customized facial treatments.",
            category: "Spa"
        },
        {
            id: 35,
            title: "Foot Reflexology",
            image_url: "https://i.ibb.co.com/4FNCRVj/choosing-facial-treatment.jpg",
            description: "Relieve stress and improve circulation with expert foot reflexology.",
            category: "Spa"
        },
        {
            id: 36,
            title: "Body Scrub",
            image_url: "https://i.ibb.co.com/6nLSDSn/images-1.jpg",
            description: "Exfoliate and refresh your skin with our luxurious body scrubs.",
            category: "Spa"
        },
        {
            id: 37,
            title: "Couples Spa Experience",
            image_url: "https://i.ibb.co.com/tzW9CvZ/chocolate-min-scaled-1.webp",
            description: "Enjoy a romantic and relaxing spa session designed for couples.",
            category: "Spa"
        }
       
        
        
    
   
];


export default Gallery;

