'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaPhoneVolume, FaTwitter } from 'react-icons/fa6';
import { IoSearch, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';

const Page = () => {
  const [events, setEvents] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  useEffect(() => {
    fetch('/event.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setOriginalEvents(data);
      });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
      setEvents(originalEvents);
    } else {
      const filteredEvents = originalEvents.filter((event) =>
        event.eventName.toLowerCase().includes(searchTerm)
      );
      setEvents(filteredEvents);
    }
    setCurrentPage(1);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-2'>
        <section>
          <div
            className='dark:bg-violet-600'
            style={{
              backgroundImage:
                "url('https://i.ibb.co/w0BWT1q/restaurant-2-1.jpg')",
              width: '100%',
              height: '200px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='flex items-center justify-center px-4 py-16 text-center'>
              <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold text-white'>
                Search and Find Your Events
              </h1>
            </div>
          </div>
        </section>
        <h2 className='text-2xl md:text-4xl text-center font-bold py-4'>
          Events
        </h2>
        <div className='grid md:grid-cols-4 gap-6'>
          <div className='md:col-span-1 space-y-4'>
            <div className='relative'>
              <input
                onChange={handleSearch}
                type='text'
                placeholder='Search for an event'
                className='w-full border border-gray-400 p-2 pr-10 rounded'
              />
              <IoSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500' />
            </div>

            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.309269750361!2d90.25330957534318!3d23.984853678511186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e7005932da8f%3A0xd7b18e38528dcbf3!2sNew%20Work!5e0!3m2!1sen!2sbd!4v1732969526301!5m2!1sen!2sbd'
                width='100%'
                height='300'
                style={{ border: 0 }}
                loading='lazy'
              ></iframe>
            </div>
            <div className='border p-4 rounded-md'>
              <h2 className='font-bold text-lg'>When & Where</h2>
              <hr />
              <p className='py-1'>NYC - Financial Freedom</p>
              <p className='py-1'>Investor</p>
              <p className='py-1'>Madison Ave</p>
              <p className='py-1'>New York, NY 10010</p>
              <p className='py-1'>Thursday, January 8, 2015</p>
              <p className='py-1'>6:30 PM to 8:30 PM (EST)</p>
            </div>
            <div className='border p-4 rounded-md'>
              <h2 className='font-bold text-lg'>Organizer</h2>
              <hr />
              <p className='py-2'>
                Fusce pellentesque vel vitae tincidunt egestas. Proin gravida
                nibh vel velit auctor aliquet.
              </p>
              <div className='space-y-2'>
                <a href='' className='flex items-center gap-2 text-blue-600'>
                  <FaFacebook /> facebook.com
                </a>
                <a href='' className='flex items-center gap-2 text-blue-400'>
                  <FaTwitter /> twitter.com
                </a>
                <a href='' className='flex items-center gap-2 text-gray-700'>
                  <FaPhoneVolume /> +8801358485487485
                </a>
              </div>
            </div>
          </div>
          <section className='md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {currentEvents.map((event) => (
              <div
                key={event.eventId}
                className='p-4 shadow-md rounded-md border '
              >
                <div className='flex justify-between pb-2 text-sm'>
                  <div className='flex items-center'>
                    <IoTimeOutline className='mr-1' /> {event.eventTime}
                  </div>
                  <div className='flex items-center'>
                    <MdOutlineDateRange className='mr-1' /> {event.eventDate}
                  </div>
                </div>
                <Image
                  src={event.img}
                  width={300}
                  height={200}
                  alt={event.eventName}
                  className='block w-full h-auto rounded-md'
                />
                <h3 className='text-lg font-semibold mt-2'>
                  Venue: {event.venue}
                </h3>
                <h3 className='text-lg font-semibold text-orange-500'>
                  Name: {event.eventName}
                </h3>
                <p>Guests: {event.guests}</p>
                <p>Organizer: {event.organizer}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </section>
        </div>
        <div className='flex justify-center items-center space-x-2 mt-4'>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 border rounded-md ${
                number === currentPage
                  ? 'bg-gray-500 text-white'
                  : 'bg-white text-gray-800'
              } shadow`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
