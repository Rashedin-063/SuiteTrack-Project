'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaBed } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { Rating } from "@mui/material";
import SectionTitle from "@/components/SectionTitle";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const RoomPage = () => {
  const [roomsData, setRoomsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // Fetch rooms data
  // const fetchRooms = async () => {
  //   try {
  //     const res = await fetch("/rooms.json"); // Ensure '/rooms.json' is served in the public directory
  //     if (!res.ok) throw new Error("Failed to fetch data");
  //     const data = await res.json();
  //     setRoomsData(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // console.log(roomsData);

  // useEffect(() => {
  //   fetchRooms();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  useEffect(() => {
    setRoomsData(roomInfo);
  }, [])

  const handleFilter = e => {
    e.preventDefault();
    console.log(e.target.value)
    const filteredValue = e.target.value;
    const filteredRoom = roomInfo?.find(room => room.category = filteredValue);
    setRoomsData(filteredRoom);
  }
  console.log(roomsData);

  return (
    <>
      {/* <Navbar></Navbar> */}
      <section className="bg-[#E2E1DF] min-h-screen text-black">
        <div className="container mx-auto">
          <div className="">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              {/* Section Header */}
              <div className="mb-10 md:mb-16 text-white py-36 bg-no-repeat bg-cover bg-center bg-[#00000080] bg-blend-multiply" style={{ backgroundImage: "url(https://i.postimg.cc/ht7Bf2hD/freepik-upload-55202.jpg)" }}>
                <SectionTitle heading="Rooms & Suites" description="Explore our curated list of luxurious rooms with modern amenities." />
              </div>

              {/* Room Cards */}
              <div className="flex gap-8">
                <div className="w-1/3">
                  <div>
                    <button className="bg-[#bd9966] uppercase font-bold px-4 py-2 w-full">Room Type</button>
                    <ul onClick={handleFilter} className="m-8">
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <option value="Deluxe" className="hover:underline">
                          Deluxe
                        </option>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>Standard</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>Suite</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>Family</li>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <button className="bg-[#bd9966] uppercase font-bold px-4 py-2 w-full">Guests</button>
                    <ul className="m-8">
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>1</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>2</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>4</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>6</li>
                      </div>
                      <div className="flex items-center gap-4">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        <li>8</li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="w-2/3 grid gap-8 grid-cols-2">
                  {roomsData?.map((room) => (
                    <div
                      key={room.id}
                      className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-lg w-full relative"
                    >
                      <Image
                        src={room.image} // Static image for all rooms
                        loading="lazy"
                        width={500}
                        height={400}
                        alt={room.roomName}
                        className="w-full h-[250px]"
                      />
                      {
                        room.offer > 0 && <div className="bg-[#bd9966] p-2 rounded-full absolute top-2 left-2"><button className="uppercase text-xl font-bold rounded-full px-4 py-3 border-2 border-white">{room.offer}% <br />off</button></div>
                      }
                      <div className="flex justify-between items-center ">
                        <button className="bg-white px-2 py-1 absolute top-2 right-2">${room.price} | Night</button>
                      </div>
                      <div className="flex flex-1 flex-col p-6 relative">
                        <button className="uppercase bg-[#bd9966] font-semibold p-2 flex items-center gap-2 absolute -top-10 -left-0 text-white">View Details <FaArrowRightLong /></button>
                        <h2 className="text-[#bd9966] font-semibold uppercase text-sm">{room.category} Room</h2>
                        <h2 className="mb-2 text-xl font-semibold text-gray-800">{room.roomName}</h2>
                        <p className="text-sm text-gray-500">{room.size} SQ FT/Rooms</p>
                        <p className="text-sm my-2">{room.description}</p>

                        <div className="flex justify-evenly items-center border-t-2 pt-2 mt-2">
                          <div className="flex gap-8 items-center">
                            <p className="flex gap-3 items-center"><span className="text-[#bd9966]"><FaUserFriends /></span>{room.guest}</p>
                            <p className="flex gap-3 items-center"><span className="text-[#bd9966]"><FaBed /></span>{room.bed}</p>
                          </div>
                          <Rating className="flex border-l-2 pl-3" value={room.rating} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer></Footer> */}
    </>
  );
};

export default RoomPage;


const roomInfo = [
  {
    id: 1,
    category: "Deluxe",
    roomName: "Superior Bed Room",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/g3j7Cw2/05153526-11202122-presidential-suite-bedroom-2-cover-2000x1333-cover-1599x1066.jpg",
    price: 500,
    offer: 0,
    guest: 1,
    bed: 1,
    size: 1400,
    rating: 4.5,
    services: "Balcony, Soundproof, No Kitchenette"
  },
  {
    id: 2,
    category: "Standard",
    roomName: "Standard Family Rooms",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/f9QgS8C/standard-hotel-room-complete-with-bed-sofa-amenities-961875-229163.jpg",
    price: 500,
    offer: 25,
    guest: 4,
    bed: 2,
    size: 1400,
    rating: 4.5,
    services: "Balcony, Soundproof, No Kitchenette"
  },
  {
    id: 3,
    category: "Suite",
    roomName: "Single Suite Room",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/THdnTL3/luxury-beige-brown-bedroom-hotel-room-home-with-large-bed-center-white-ivory-blank-wall-gray-linen-b.jpg",
    price: 700,
    offer: 30,
    guest: 2,
    bed: 1,
    size: 1400,
    rating: 4,
    services: "Balcony, Soundproof, No Kitchenette"
  },
  {
    id: 4,
    category: "Family",
    roomName: "Deluxe Family Rooms",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/mRTGcnm/depositphotos-128166302-stock-photo-luxurious-bedroom-in-pastel-colours.webp",
    price: 500,
    offer: 45,
    guest: 8,
    bed: 4,
    size: 1400,
    rating: 4.5,
    services: "Balcony, Soundproof, No Kitchenette"
  },
  {
    id: 5,
    category: "Deluxe",
    roomName: "Deluxe Family Rooms",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/fGrjTqV/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
    price: 600,
    offer: 0,
    guest: 4,
    bed: 2,
    size: 1400,
    rating: 4.5,
    services: "Balcony, Soundproof, No Kitchenette"
  },
  {
    id: 6,
    category: "Suite",
    roomName: "Master Suite Rooms",
    description: "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    image: "https://i.ibb.co.com/fGrjTqV/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
    price: 800,
    offer: 40,
    guest: 6,
    bed: 3,
    size: 2000,
    rating: 4.5,
    services: "Balcony, Soundproof, No Kitchenette"
  }
]
